// without closure
// for (var i = 0; i < 10; i++) {
//     logIndex = function() {
//         console.log(i);
//     };
//     setTimeout(logIndex, 100); // Logs 0 to 9 real fast... right?
// }

// with closure
// for (var i = 0; i < 10; i++) {
//     var logIndexClosure = function(localToThis) {
//         return function() {
//             console.log(localToThis);
//         };
//     };
//     setTimeout(logIndexClosure(i), 100); // Logs 0 to 9 real fast!
// }

//with closure, due to iife
// for (var i = 0; i < 10; i++) {
//     setTimeout(
//         (function(localToThis) {
//             return function() {
//                 console.log(localToThis);
//             };
//         })(i) // We define and call simultaneously.
//         , 100);
// }

// with forEach (intrinsic closure)
var zeroToNine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

zeroToNine.forEach(function(i) {
    setTimeout(function() {
        console.log(i);
    }, 100);
});