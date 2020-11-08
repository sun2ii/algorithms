const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(log n)
// 🛰 O(1)
const findMinimumInSortedArray = a => {
	let s = 0;
	let e = a.length - 1;
	let r = a[a.length - 1];

	while (s <= e) {
		let m = Math.floor(s + (e - s) / 2);
		if (a[m] > r) s = m + 1;
		else if (a[m] <= r && (m === 0 || a[m - 1] > r)) return [a[m], m];
		else e = m - 1;
	}

	return -1;
}
 
const main = () => {
	log(findMinimumInSortedArray([3, 4, 5, 1, 2]));
}
 
main();