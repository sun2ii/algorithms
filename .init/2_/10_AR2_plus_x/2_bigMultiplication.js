const u = require('../../__common/utils');
const { bigAddition } = require('./1_bigAddition');
 
// Time  o(m * n)
// Space o(m + n)
const bigMultiplication = (a, b) => {
	if (a === null || a.length <= 0 || b === null || b.length <= 0) return null;

	let result = [0];
	let zeroCount = 0;

	for (let i = a.length - 1; i >= 0; i--) {
		let product = Array(b.length + 1 + zeroCount).fill(0);
		let carry = 0;
		for (let j = b.length - 1; j >= 0; j--) {
			let p = a[i] * b[j] + carry;
			carry = parseInt(p / 10);
			product[j + 1] = parseInt(p % 10);
		}

		product[0] = carry;

		result = bigAddition(result, product);
		zeroCount++;
	}
	
	console.log('result', result)
	return result;
}
 
const main = () => {
	bigMultiplication([4, 1, 2], [1, 2, 3, 3]);
}
 
main();