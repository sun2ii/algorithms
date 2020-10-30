const utils = require("../../../../__common/utils");

// 🕑 O(n^2)
// 🛰 O(n)
const findDuplicatedUnsorted = a => {
	let result = [];
	for (let i = 0; i < a.length - 1; i++) {
		for (let j = i + 1; j < a.length; j++) {
			if (a[i] === a[j] && a[i] !== -1) {
				result.push(a[i]);
				a[j] = -1;
				break;
			}
		}
	}

	console.log('result', result)
	return result;
}

// 🕑 O(n)
// 🛰 O(n)
const findDuplicatedUnsorted2 = a => {
	let high = Math.max.apply(null, a);
	let low = Math.min.apply(null, a);
	let obj = {};
	let result = [];

	for (let i = 0; i < a.length; i++) {
		if (!obj[a[i]]) obj[a[i]] = 1;
		else obj[a[i]]++;
	}

	for (let i = low; i <= high; i++) {
		if (obj[a[i]] > 1 && !result.includes(a[i])) result.push(a[i]);
	}

	console.log('result', result)
	return result;
}
 
const main = () => {
	findDuplicatedUnsorted([8, 3, 6, 4, 6, 5, 6, 8, 2, 7]);
	findDuplicatedUnsorted2([8, 3, 6, 4, 6, 5, 6, 8, 2, 7]);
}
 
main();