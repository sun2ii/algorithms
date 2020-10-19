const u = require('../__common/utils');
 
// Time  o(n)
// Space o(n)
const sumToZero = a => {
	let sum, obj;

	sum = 0;
	obj = {};

	for (let i = 0; i < a.length; i++) {
		sum += a[i];

		if (sum === 0) return [0, 1];

		if (obj.hasOwnProperty(sum)) {
			u.p([obj[sum] + 1, i]);
			return [obj[sum] + 1, i]
		}

		obj[sum] = i;
	}

	return -1;
}
 
const main = () => {
	sumToZero([2, 4, -2, 1, -3, 5, -3]);
}
 
main();