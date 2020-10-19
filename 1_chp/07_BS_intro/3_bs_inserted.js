
const u = require('../__common/utils');
 
// Time  o(log n)
// Space o(1)
const binarySearchInsert = (a, x) => {
	let s, e, m;

	s = 0;
	e = a.length - 1;

	while (s <= e) {
		m = Math.floor(s + (e - s) / 2);
		u.par(a, s, e, m);
		if (a[m] <= x) {
			if (m === a.length - 1) return a.length;
			s = m + 1;
		} else {
			if (m === 0 || a[m - 1] <= x) return m;
			e = m - 1;
		}
	}

	return -1;
}

 
const main = () => {
	console.log(binarySearchInsert([1, 2, 4, 5, 6, 8, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 28, 29, 30, 32, 35, 36, 37, 39, 52, 53, 54, 55], 3));
}
 
main();