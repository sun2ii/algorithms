const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n^2)
// 🛰 O(n)
const wordBreak = a => {
	let memo = {};
	let result = [];
	for (let i = 0; i < a.length; i++) {
		memo[i] = "not_visited";
	}

	if (wordBreakHelper(a, memo, result, 0, dictionary)) return result;

	return null;
}

const wordBreakHelper = (a, memo, result, startIdx, dictionary) => {
	if (a.length === startIdx) return true;
	if (memo[startIdx] === "not_found") return false;

	for (let i = startIdx; i < a.length; i++) {
		let candidate = a.substring(startIdx, i + 1);
		if (dictionary[candidate]) {
			result.push(candidate);
			if (wordBreakHelper(a, memo, result, startIdx + 1, dictionary)) return true;
			else {
				result.pop();
				memo[i + 1] = "not_found";
			}
		}
	}

	return false;
}
 
const main = () => {
	log(wordBreak("ilikemangotango"));
}

const dictionary = {
	"i": true,
	"like": true,
	"mango": true,
	"tango": true,
}
 
main();