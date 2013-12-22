
var Collection = function() {
	this.count = 0;
	this.collection = {};
	this.add = function(key, item) {
		if (this.collection[key] != undefined)
			return undefined;
		this.collection[key] = item;
		return ++this.count
	}
};
var records = new Collection();
var stuff = ["a", "b", "c"];


for (var i = 0; i < stuff.length; i++) {

	// records.push({
	// 	url: "some url-" + i,
	// 	matches: [
	// 		"a match"
	// 	]
	// });
	records.add("url-" + i, { matches: [stuff[i], "random text"]});
	
}


console.log("### records: ", records.collection);