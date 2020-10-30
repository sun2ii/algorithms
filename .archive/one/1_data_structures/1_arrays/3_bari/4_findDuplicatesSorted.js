// 🕑 O(n)
// 🛰 O(n)
const findDuplicatesSorted = a => {
	let lastDuplicate = 0;
	let result = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i] === a[i + 1] && lastDuplicate !== a[i]) {
			result.push(a[i]);
			lastDuplicate = a[i];
			i++;
		}
	}

	console.log('result', result)
	return result;
}

// 🕑 O(n)
// 🛰 O(n)
const findDuplicatesSorted2 = a => {
	let result = [];
	for (let i = 0; i < a.length - 1; i++) {
		if (a[i] === a[i + 1]) {
			let j = i + 1;
			while (a[i] === a[j]) j++;
			result.push(a[i]);
			i = j - 1;
		}
	}

	console.log('result', result)
	return result;
}
 
// 🕑 O(n)
// 🛰 O(n)
const findDuplicatesSorted3 = a => {
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
	findDuplicatesSorted([3, 6, 8, 8, 10, 12, 15, 15, 15, 20]);
	findDuplicatesSorted2([3, 6, 8, 8, 10, 12, 15, 15, 15, 20]);
	findDuplicatesSorted3([3, 6, 8, 8, 10, 12, 15, 15, 15, 20]);
}
 
main();