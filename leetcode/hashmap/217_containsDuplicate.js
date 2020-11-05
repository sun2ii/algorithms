const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n^2)
// 🛰 O(1)
const containsDuplicate1 = a => {
	for (let i = 0; i < a.length; i++) {
		for (let j = i + 1; j < a.length; j++) {
			utils.prettyPrint(a, i, j);
			if (a[i] === a[j]) return true;
		}
	}

	return false;
}

// 🕑 O(n log n)
// 🛰 O(1)
const containsDuplicate2 = a => {
	a.sort((a, b) => a - b);

	for (let i = 0; i < a.length; i++)
		if (a[i] === a[i + 1]) return true;

	return false;
}

// 🕑 O(n)
// 🛰 O(n)
const containsDuplicate3 = a => {
	let storage = {};

	for (let i = 0; i < a.length; i++) {
		let item = a[i];
		if (storage.hasOwnProperty(item)) return true;

		storage[item] = i;
	}

	return false;
}
 
const main = () => {
	log(containsDuplicate1([1, 2, 3, 4, 5, 6, 7, 7, 8, 9]));
	log(containsDuplicate1([1, 2, 3]));
	log(containsDuplicate2([1, 2, 3, 4, 5, 6, 7, 7, 8, 9]));
	log(containsDuplicate2([1, 2, 3]));
	log(containsDuplicate3([1, 2, 3, 4, 5, 6, 7, 7, 8, 9]));
	log(containsDuplicate3([1, 2, 3]));
}
 
main();