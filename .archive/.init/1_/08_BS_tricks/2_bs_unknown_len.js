const u = require('../__common/utils');
 
// Time  o()
// Space o()
const binarySearchUnknownLength = (a, x) => {
	let s = 0;
	let e = 1;
	let val = a[0]

	while (val < x) {
		s = e;
		e = 2 * e;
		val = a[e];
	}

	return helper(a, s, e, x);
}

const helper =(a, s, e, x) => {
	let m;
	if (e >= s) {
		m = Math.floor(s + (e - s) / 2);
		if (a[m] === x) return m;
		else if (a[m] > x)  
			return helper(a, s, m - 1, x);

		return helper(a, m + 1, e, x);
	}

	return -1;
}
 
const main = () => {
	binarySearchUnknownLength([2, 4, 6, 12, 13, 26, 67, 74, 77, 73, 102, 106], 74);
}
 
main();