function existy(x) { return x != null };

function truthy(x) { return (x !== false) && existy(x) };



existy(null);
//=> false
existy(undefined); //=> false
existy({}.notHere); //=> false
existy((function(){})()); //=> false
existy(0); //=> true
existy(false); //=> true


truthy(false); //=> false
truthy(undefined); //=> false
truthy(0); //=> true
truthy(''); //=> true
