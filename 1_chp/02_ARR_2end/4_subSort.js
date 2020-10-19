const u = require('../__common/utils');
// Find Start, End
// Find Min, Max
// Expand
 
// Time  o(n)
// Space o(1)
const subSort = a => {
	if (a === null || a.length <= 0) return null;

	let s, e;
	let min, max;

	s = 0;
	e = a.length - 1;

	min = Number.MAX_VALUE;
	max = Number.MIN_VALUE;

	for (s = 0; s < a.length; s++) {
		if (a[s] > a[s + 1]) break;
	}

	if (s === a.length) return null;

	for (e = a.length - 1; e > 0; e--) {
		if (a[e] < a[e - 1]) break;
	}

	for (let i = 0; i < a.length; i++) {
		if (a[i] < min) min = a[i];
		if (a[i] > max) max = a[i];
	}

	while (s > 0 && a[s - 1] > min) s--;
	while (e < a.length - 1 && a[e + 1] < max) e++;

	u.p([s, e]);
	return [s, e];

}
 
const main = () => {
	subSort([0, 2, 3, 1, 8, 6, 9]);
}
 
main();