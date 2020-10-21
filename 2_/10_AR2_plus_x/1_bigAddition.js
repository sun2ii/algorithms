const u = require('../../__common/utils');
 
// Time  o(n)
// Space o(n)
const bigAddition = (a, b) => {
	if (a === null || a.length <= 0 || b === null || b.length <= 0) return null;

	let larger = a.length > b.length ? a : b;
	let smaller = larger === a ? b: a;
	smaller = u.resizeWithZeroes(smaller, larger.length);

	let result = new Array(larger.length + 1);
	let carry = 0;

	for (let i = larger.length - 1; i >= 0; i--) {
		let sum = larger[i] + smaller[i] + carry;
		carry = parseInt(sum / 10);
		result[i + 1] = parseInt(sum % 10);
	}

	result[0] = carry;

	// console.log('result', u.trimBeginningZeroes(result));
	return u.trimBeginningZeroes(result);
}
 
const main = () => {
	bigAddition([1, 6, 4, 3], [1, 3, 1]);
}
 
main();

module.exports = { bigAddition }