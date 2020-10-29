// 🕑 O(n)
// 🛰 O(n)
const findMissingElementSorted = a => {
	let total = 0;

	let sumOfNaturalNums = n => {
		if (n === 0) return n;
		return sumOfNaturalNums(n - 1) + n;
	}

	for (let i = 0; i < a.length; i++)	total += a[i];

	return sumOfNaturalNums(a[a.length - 1]) - total;
}

// 🕑 O(n)
// 🛰 O(1)
const findMissingElementSorted2 = a => {
	let difference = a[0];
	
	for (let i = 0; i < a.length; i++)
		if (a[i] - i !== difference) return i + difference;

	return -1;
}
 
const main = () => {
	console.log(findMissingElementSorted([1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12]));
	console.log(findMissingElementSorted2([1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12]));
}
 
main();