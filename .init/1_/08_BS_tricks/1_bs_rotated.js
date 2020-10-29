const u = require('../__common/utils');
 
// Time  o(log n)
// Space o(1)
const binarySearchRotated = a => {
	if (a === null || a.length <= 0) return null;

	let s, e, m, r;

	s = 0;
	e = a.length - 1;
	r = a[a.length - 1];

	while (s <= e) {
		u.par(a, s, e, m);
		m = Math.floor(s + (e - s) / 2);

		if (a[m] <= r && (m === 0 || a[m - 1] > a[m])) return m;
		else if (a[m] > r) s = m + 1;
		else e = m - 1;
	}

	return -1;
}
 
const main = () => {
	console.log(binarySearchRotated([5, 7, 8, 1, 2, 4]));
}
 
main();