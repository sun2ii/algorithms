const u = require('../../__common/utils');
 
// Time  o(n^2)
// Space o(1)
const longestPalindrome = a => {
	if (a === null || a === "") return null;

	let longest = 1;
	let longestAtI = 0;
	let result = [];

	// Odd
	for (let i = 0; i < a.length; i++) {
		let offset = 0;

		while (
			isValidIdx(a, i - 1 - offset) && isValidIdx(a, i + 1 + offset) &&
			a[i - 1 - offset] === a[i + 1 + offset]
		) offset++;

		longestAtI = offset * 2 + 1;
		if (longestAtI > longest) {
			longest = longestAtI;
			result = [i - offset, i + offset];
		}
	}

	// Even
	for (let i = 0; i < a.length; i++) {
		offset = 0;

		while (
			isValidIdx(a, i - offset) && isValidIdx(a, i + 1 + offset) &&
			a[i - offset] === a[i + 1 + offset]
		) offset++;

		longestAtI = offset * 2;
		if (longestAtI > longest) {
			longest = longestAtI;
			result = [i - offset, i + 1 + offset];
		}
	}

	console.log('result', result)
	return result;
}

const isValidIdx = (a, i) => i >= 0 && i < a.length;
 
const main = () => {
	longestPalindrome("abkayakcd");
}
 
main();