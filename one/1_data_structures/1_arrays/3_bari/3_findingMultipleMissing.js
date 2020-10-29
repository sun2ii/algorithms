// 🕑 O(n^2)
// 🛰 O(n)
const findMultipleMissing = a => {
	let diff = a[0];
	let result = [];

	for (let i = 0; i < a.length; i++) {
		if (a[i] - i !== diff) {
			while (diff < a[i] - i) {
				result.push(i + diff);
				diff++;
			}
		}
	}

	console.log('result', result)
	return result;
}

// 🕑 O(n)
// 🛰 O(n)
const findMultipleMissing2 = a => {
	let low = Math.min.apply(null,  a);
	let high = Math.max.apply(null, a);
	let obj = {};
	let result = [];

	for (let i = 0; i < a.length; i++) {
		obj[a[i]] = 1;
	}

	for (let i = low; i <= high; i++) {
		if (!obj[i]) result.push(i);
	}

	console.log('result', result)
	return result;
}
 
const main = () => {
	findMultipleMissing([6, 7, 8, 9, 11, 12, 15, 16, 17, 18, 19]);
	findMultipleMissing2([3,  7,  4, 9, 12, 6,  1, 11, 2, 10]);
}
 
main();