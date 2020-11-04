const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(log n)
// 🛰 O(1)
const searchUnknownLength = (a, x) => {
	let high = 1;
	let lastIndex = -1;
	while (1) {
		try {
			let temp = a[high];
		} catch (err) {
			lastIndex = binarySearchLastIndex(a, high / 2, high);
			break;
		}

		high *= 2;
	}

	return binarySearch(a, x, 0, lastIndex);
}

const binarySearchLastIndex = (a, s, e) => {
	while (s <= e) {
		let m = Math.floor(s + (e - s) / 2);
		utils.prettyPrint(a, s, m, e);

		// lower half
		try {
			let temp = a[m];
		} catch (err) {
			e = m - 1;
			continue;
		}

		// upper half 
		try {
			let temp = a[m + 1];
		} catch (err) {
			return m;
		}

		s = m + 1;
	}

	return -1;
}

const binarySearch = (a, x, s, e) => {
	while (s <=e) {
		let m = Math.floor(s + (e - s) / 2);
		if (x > a[m]) s = m + 1;
		else if (x < a[m]) e = m - 1;
		else return m;
	}

	return -1;
}
 
const main = () => {
	searchUnknownLength([1, 5, 5, 5, 5, 6, 8, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 28, 29, 30, 32, 35, 36, 37, 39, 52, 53, 54, 55], 24);
}
 
main();