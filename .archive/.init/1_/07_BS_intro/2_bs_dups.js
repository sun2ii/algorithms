const u = require('../__common/utils');
 
// Time  o(log n)
// Space o(1)
const binarySearchDups = (a, x) => {
	if (a === null || a.length <= 0) return null;

	let s, m, e;
	s = 0;
	e = a.length - 1;

	while (s <= e) {
		m = Math.floor(s + (e - s) / 2);
		u.par(a, s, e, m);

		if (a[m] < x) s = m + 1;
		else if (a[m] > x || a[m] === x && a[m - 1] === x && m > 0) e = m - 1;
		else return m;
	}
}
 
const main = () => {
	console.log(binarySearchDups([1, 2, 5, 6, 11, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 35, 36, 37, 39, 52, 53, 54, 55], 11));

 
main();