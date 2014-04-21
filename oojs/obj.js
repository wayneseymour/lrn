/*global angular*/
/**
 * angular-oauth
 * (c) Disney.  All rights reserved.
 */


function OAuthInterceptorProvider() {

  // "private" variables & functions
  var _tokenTimeout, _tokenRequest,
  _tokenRequestPending = false;

  var _oAuthConfig = {
    tokenUrl: undefined,
    maxRetries: 1
  };

  /**
   * Method for configuring the oAuthInterceptor by object
   * @param {object} config
   */
  this.init = function(config) {
    angular.extend(_oAuthConfig, config);
  };

  /**
   * Method for setting the token endpoint URL
   * @param {string} url
   */
  this.setTokenUrl = function(url) {
    _oAuthConfig.tokenUrl = url;
  };

  /**
   * Method for setting the max number of retries for 401 responses
   * @param {number} n
   */
  this.setMaxRetries = function(n) {
    _oAuthConfig.maxRetries = n;
  };

  this.$get = ['$injector', '$timeout', '$q',
    function oAuthInterceptorFactory($injector, $timeout, $q) {

      // Sets default Auth headers and clears them on token timeout
      function _setTokenTimeout(ttlSec) {
        var $http = $injector.get('$http');
        _cancelTokenTimout();
        _tokenTimeout = $timeout(function() {
          delete $http.defaults.headers.common.Authorization;
        }, ttlSec * 1000);
        return _tokenTimeout;
      }

      // Cancels a pending token timeout
      function _cancelTokenTimout() {
        return $timeout.cancel(_tokenTimeout);
      }

      return {
        /**
         * Request interceptor for retrieving access tokens and decorating
         * http requests with Authorization headers
         * @param  {object} config http config
         * @return {object}        promise
         */
        request: function(config) {

          var req, $http = $injector.get('$http');

          // If an Auth header exists then use it. Do not create a new one.
          // Also pass through if this is a call to the token endpoint to
          // prevent infinite request chaining.
          if (config.headers.Authorization ||
              config.url === _oAuthConfig.tokenUrl) {
            return config || $q.when(config);
          }

          // Create a promise for the original request
          req = $q.defer();

          // Request a token if there is not already a pending token request.
          if (!_tokenRequestPending) {
            _tokenRequest = $http({
              method: 'GET',
              url: _oAuthConfig.tokenUrl,
            });
            // Set this flag so we don't make multiple requests for tokens.
            _tokenRequestPending = true;
          }

          // Token request successful.
          _tokenRequest.success(function(data) {
            // Set Authorization header for current and future requests.
            $http.defaults.headers.common.Authorization = config.headers.Authorization = 'BEARER ' + data.access_token;
            _setTokenTimeout(data.expires_in);
          });

          // Token request complete.
          // Per the AngularJS docs array notation of 'finally' makes IE8 happy.
          _tokenRequest['finally'](function() {
            // Set the pending flag to false.
            _tokenRequestPending = false;
            // Resolve the original service request.
            req.resolve(config);
          });
          return req.promise;
        },

        /**
         * responseError interceptor for handling authentication failures if the
         * app has a bad token this will clear it and retry the call call with a
         * new token.
         * @param  {object} rej rejection
         * @return {object}     promise
         */
        responseError: function(rej) {

          var numRetries, $http = $injector.get('$http');

          // A 401 status indicates that Authentication with the service API
          // failed. This could be due to the client hanging onto a bad token
          // longer than expect. Flush the bad headers and try the request one
          // more time with a fresh token.

          if (rej.status === 401) {
            // That token didn't do us any good.
            // Cancel any pending token timeouts
            _cancelTokenTimout();
            // Delete the Auth header from the defaults and this request.
            delete rej.config.headers.Authorization;
            delete $http.defaults.headers.common.Authorization;
            // Try again without the bad Auth header but only once.

            // Get number of retries so far.
            numRetries = rej.config.headers['Repeat-Request'] || 0;

            // Retry if we have not hit the max.
            if (numRetries < _oAuthConfig.maxRetries) {
              rej.config.headers['Repeat-Request'] = numRetries + 1;
              return $http(rej.config);
            }
          }

          // Pass through rejection for all other status codes or if the service
          // failed with a 401 on the second try.
          return $q.reject(rej);

        }
      };
    }
  ];
};
