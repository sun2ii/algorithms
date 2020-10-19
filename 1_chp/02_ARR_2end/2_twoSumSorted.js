const u = require('../__common/utils');
 
// Time  o(n)
// Space o(1)
const twoSumSorted = (a, x) => {
	let s, e, sum;
	s = 0;
	e = a.length - 1;

	if (a === null || a.length <= 0) return null;

	while (s < e) {
		sum = a[s] + a[e];
		if (sum === x) {
			u.p(a[s], a[e])
			return [a[s], a[e]];
		}
		else if (sum < x) s++;
		else if (sum > x) e--;
	}

	return -1;
}
 
const main = () => {
	twoSumSorted([5, 2, 3, 4, 5], 9);
}
 
main();