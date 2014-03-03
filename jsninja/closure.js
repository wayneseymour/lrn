// without closure
for (var i = 0; i < 10; i++) {
    logIndex = function() {
        console.log(i);
    };
    setTimeout(logIndex, 100); // Logs 0 to 9 real fast... right?
}
