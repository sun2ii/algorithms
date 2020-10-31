const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(log n)
// 🛰 O(1)
const searchInArrayDups = (a, x) => {
	let s = 0;
	let e = a.length - 1;

	line();
	log('\tBinary Search Duplicate');
	line();
	log('\n1. >< amgem-, compare left')
	line();
	while (s <= e) {
		let m = Math.floor(s + (e - s) / 2);
		utils.prettyPrint(a, s, m, e);

		if (a[m] > x || a[m] === x && a[m - 1] == x && m !== 0) {
			e = m - 1;
		} else if (a[m] < x) {
			s = m + 1;
		} else {
			return m;
		}
	}

	return -1;
}
 
const main = () => {
	console.log(searchInArrayDups([1, 5, 5, 5, 5, 6, 8, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 28, 29, 30, 32, 35, 36, 37, 39, 52, 53, 54, 55], 5));
}
 
main();