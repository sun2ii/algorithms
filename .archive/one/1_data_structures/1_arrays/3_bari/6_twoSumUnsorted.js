// 🕑 O(n^2)

const _arrays = require("../../../../__data_structures/1_arrays");

// 🛰 O(1)
const twoSumUnsorted = (a, k) => {
	for (let i = 0; i < a.length; i++) {
		for (let j = i + 1; j < a.length; j++) {
			if (a[i] + a[j] == k) return [[i, j], [a[i], a[j]], k];
		}
	}

	return -1;
}

// 🕑 O(n)
// 🛰 O(n)
const twoSumUnsorted2 = (a, k) => {
	let obj = {};

	for (let i = 0; i < a.length; i++) {
		let e = a[i];
		let diff = k - e;
		if (!obj[e]) obj[e] = diff;
		if (obj.hasOwnProperty(diff)) return [e, diff, k, i];
	}

	return -1;
}
 
const main = () => {
	console.log(twoSumUnsorted([6, 3, 8, 10, 16, 7, 5, 2, 9, 14], 10));
	console.log(twoSumUnsorted2([6, 3, 8, 10, 16, 7, 5, 2, 9, 14], 10));
}
 
main();