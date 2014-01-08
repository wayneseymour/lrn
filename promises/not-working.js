/*
**************************************************
Depends on Node.js, and...

npm install es6-promise superagent --save

**************************************************
*/
var promise = require('es6-promise');
var request = require('superagent');

function get(url) {
    return new promise.Promise(function (resolve, reject) {
        console.log("\n### executing rest call to: \n\n\t%s", url);
        request.get(url).end(function (err, res) {
            if (res) resolve(res);
            if (err) reject(new Error(err));
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
    console.log('\n### responses: ', responses);
    responses.forEach(function (response) {
        console.log('\n### response.text: ', response.text);
    });
});