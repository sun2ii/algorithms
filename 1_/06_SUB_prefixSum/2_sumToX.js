const u = require('../__common/utils');
 
// Time  o(n)
// Space o(n)
const sumToX = (a, x) => {
	if (a === null || a.length <= 0) return null;

	let sum, obj;

	sum = 0;
	obj = {};

	for (let i = 0; i < a.length; i++) {
		sum += a[i];

		if (sum === x) {
			u.p([0, i]);
			return [0, i];
		}

		if (obj.hasOwnProperty(sum - x)) {
			u.p([obj[sum - x] + 1, i]);
			return [obj[sum - x] + 1, i];
		}

		obj[sum] = i;
	}

	return -1;
}
 
const main = () => {
	sumToX([5, 3, 1, 7, 6, 4, 2, 3], 14);
	sumToX([2,4,-2,1,-3,5,-3], 5);
}
 
main();