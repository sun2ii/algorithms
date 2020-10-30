const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(log n)
// 🛰 O(1)
const binarySearchIterative = (a, x) => {
	let s = 0;
	let e = a.length - 1;

	line();
	log('\tBinary Search');
	line();
	log('\n1. >< problem')
	log('2. set m, == return m, amgem-, alsm+')
	line();
	while (s <= e) {
		let m = Math.floor(s + (e - s) / 2);
		utils.prettyPrint(a, s, m, e, x.toString());

		if (a[m] === x) return m;
		else if (a[m] > x) e = m - 1;
		else s = m + 1;
	}

	return -1;
}

// 🕑 O(log n)
// 🛰 O(n)
const binarySearchRecursive = (a, x) => {
	line();
	log('\tBinary Search Recursive');
	line();
	log('\n1. >< problem')
	log('2. low, high pointers are passed and calculated')
	line();
	return binarySearchRecursiveHelper(a, x, 0, a.length - 1);
}
 
const binarySearchRecursiveHelper = (a, x, s, e) => {
	let m = Math.floor(s + (e - s) / 2);
	utils.prettyPrint(a, s, m, e, x.toString());

	if (a[m] === x) return m;
	else if (a[m] > x) return binarySearchRecursiveHelper(a, x, s, m - 1);
	else return binarySearchRecursiveHelper(a, x, m + 1, e);
}

const main = () => {
	// console.log(binarySearchIterative([1, 2, 4, 5, 6, 8, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 28, 29, 30, 32, 35, 36, 37, 39, 52, 53, 54, 55], 14));
	console.log(binarySearchRecursive([1, 2, 4, 5, 6, 8, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 28, 29, 30, 32, 35, 36, 37, 39, 52, 53, 54, 55], 14));
}
 
main();