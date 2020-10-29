const u = require('../__common/utils');
 
// Time  o(log n)
// Space o(1)
const binarySearchRecord = (a, x) => {
	if (a === null || a.length <= 0) return null;

	let s, e, m, res;

	s = 0;
	e = a.length - 1;
	res = null;
	
	while (s <= e) {
		m = Math.floor(s + (e - s) / 2);
		u.par(a, s, e, m);
		res = record(a, m, res, x);

		if (a[m] < x) s = m + 1;
		else if (a[m] > x) e = m - 1;
		else return m;
	}

	console.log('res', res)
	return res;
}

const record = (a, m, res, x) => {
	if (res === null || Math.abs(a[m] - x) < Math.abs(a[res] - x)) return m;

	return res;
}

const main = () => {
	binarySearchRecord([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180], 142);
}
 
main();