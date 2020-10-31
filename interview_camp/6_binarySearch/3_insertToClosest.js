const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const insertToClosest = (a, x) => {
	let s = 0;
	let e = a.length - 1;

	line();
	log('\tBinary Search Insert Closest');
	line();
	log('1. aml=s+ : check end')
	log('2. amge-  : check begin || a[m-1] <= x return m')
	line();
	while (s <= e) {
		let m = Math.floor(s + (e - s) / 2);
		utils.prettyPrint(a, s, m, e);
		if (a[m] <= x) {
			if (m === a.length) return a.length;
			s = m + 1;
		} else {
			if (m === 0 || a[m - 1] <= x) return m;
			e = m - 1;
		}
	}

	return -1;
}
 
const main = () => {
	// console.log(insertToClosest([1, 2, 4, 5, 6, 8], 3));
	console.log(insertToClosest([1, 2, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 28, 29, 30, 32, 35, 36, 37, 39, 52, 53, 54, 55], 11));
}
 
main();