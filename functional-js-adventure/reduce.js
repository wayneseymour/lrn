function countWords(arr) {

	return arr.reduce(function (countMap, el) {
		debugger;
		countMap[el] = ++countMap[el] || 1; // increment or initialize to 1
		return countMap;
	}, {});
}

module.exports = countWords;