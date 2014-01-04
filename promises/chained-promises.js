var promise = require('es6-promise');
var request = require('superagent');

function get(url) {

  return new promise.Promise(function(resolve, reject) {

    console.log("\n### getting url: \n\n\t%s", url);

    request
      .get(url)
      .end(function(err, res) {
        if (res) {
          resolve(res);
        } else {
          reject(new Error(err));
        }
      });

  });
}

function post(url, body) {

  return new promise.Promise(function(resolve, reject) {

    console.log("\n### posting to url: \n\n\t%s", url);

    request
      .post(url)
      .send(body)
      .end(function(err, res) {
        if (res) {
          resolve(res);
        } else {
          reject(new Error(err));
        }
      });

  });
}
(function(url) {
  get(url)
    .then(function(response) {
      return response.text;
    })
    .then(function(text) {
      console.log("\n### response.text: \n\t%s", text);

      return post(url);
    })
    .
  catch (function(err) {
    console.log("Failed!", err);
  })
    .then(function(response) {
      console.log("\n### response.text: \n%s", response.text);
      return post(url + '/some-post-url');
    })
    .then(function(response) {
      console.log("\n### response.text: \n%s", response.text);
      return response;
    })
    .
  catch (function(err) {
    console.log("Failed!", err);
  })
    .then(function(response) {

    });

})('http://jsonip.com');