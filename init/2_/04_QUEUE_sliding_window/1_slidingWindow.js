const u = require('../../__common/utils');
 
// Time  o(n)
// Space o(k)
const slidingWindowSum = (a, k) => {
	if (a === null || a.length <= 0 || k === 0) return null;

	let q = [];
	let sum = 0;

	for (let i = 0; i < a.length; i++) {
		if (q.length === k) {
			let last = q.shift();
			sum -= last;
		}

		q.push(a[i]);
		sum += a[i];

		if (q.length === k) console.log('sum', sum)
	}

	return -1
}
 
const main = () => {
	slidingWindowSum([1, 4, 3, 2,  5], 3);
}
 
main();