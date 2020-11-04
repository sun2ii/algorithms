const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(log n)
// 🛰 O(1)
const insertToClosest = (a, x) => {
	let s = 0;
	let e = a.length - 1;

	line();
	log('\tBinary Search Insert Closest');
	line();
	log('\n1. if x is left of mid, and a[m - 1] is less than x, return')
	while (s <= e) {
		let m = Math.floor(s + (e - s) / 2);
		let left = (m > 0) ? a[m - 1] : Number.MIN_SAFE_INTEGER;
		utils.prettyPrint(a, s, m, e, x.toString());
		if (x >= a[m]) {
			if (m === a.length) return a.length;
			s = m + 1;
		} else {
			if (m === 0 || left <= x) return m;
			e = m - 1;
		}
	}

	return -1;
}
 
const main = () => {
	// console.log(insertToClosest([1, 2, 4, 5, 6, 8], 3));
	console.log(insertToClosest([1, 2, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19], 11));
}
 
main();