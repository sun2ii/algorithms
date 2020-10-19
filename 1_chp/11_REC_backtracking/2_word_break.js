const u = require('../0_common/utils');
 
// Time  o(n^2)
// Space o(n)
const wordBreak = str => {
	if (str === null || str.length === 0) return null;

	let memo = {};
	let result = [];
	for (let i = 0; i < str.length; i++) {
		memo[i] = "not_visited";
	}

	if (wordBreakHelper(str, 0, memo, result, dictionary)) {
		return result;
	}

	return null;
}

const wordBreakHelper = (str, s, memo, result, dictionary) => {
	if (s === str.length) return true;
	if (memo[s] === "not_found") return false;

	for (let i = s; i < str.length; i++) {
		let candidate = str.substring(s, i + 1);
		
		if (dictionary[candidate]) {
			result.push(candidate);
			if (wordBreakHelper(str, i + 1, memo, result, dictionary)) {
				return true;
			} else {
				result.pop();
				memo[i + 1] = "not_found";
			}
		}
	}

	return false;
}

const dictionary = {
	"i": true,
	"like": true,
	"mango": true,
	"tango": true,
}
 
const main = () => {
	wordBreak("ilikemangotango");
}
 
main();