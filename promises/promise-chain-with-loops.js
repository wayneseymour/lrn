/*
************************************************** \
Depends on Node.js, and...
npm install es6-promise superagent --save
************************************************** /
*/
var promise = require('es6-promise');
var request = require('superagent');

function get(url) {
    return new promise.Promise(function (resolve, reject) {
        console.log("\n### executing rest call to: \n\n\t%s", url);
        request
        .get(url)
        .on('error', function(err) { 
            console.log('\n### handling onError()');
            resolve({err: err, url: url});
        })
        .end(function (err, res) {
            if (res) resolve({res: res, url: url});
            if (err) resolve({err: err, url: url});
        });
    });
}

(function start(response) {
    var urls = ['http://willfail.wayneseymour.com', 'http://jsonip.com/will_succeed'];
    return promise.Promise.all(urls.map(get));
})().
catch (function (err) {
    console.log("\n### Failed!", err);
}).then(function (responses) {
    // console.log('\n### responses: ', responses);
    responses.forEach(function (response) {
        if(response) console.log('\n### success, url[%s]', response.url); 
        if(response && response.err) console.log('\n### failure: \n\turl[%s] | err[%s]', response.url, response.err); 
        
    });
});