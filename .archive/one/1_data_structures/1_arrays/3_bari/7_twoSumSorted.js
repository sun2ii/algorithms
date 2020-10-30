// 🕑 O(n)
// 🛰 O(1)
const twoSumSorted = (a, k) => {
	let i = 0;
	let j = a.length - 1;
	let result = [];

	while (i < j) {
		if (a[i] + a[j] === k) {
			result.push([a[i], a[j]]);
			i++;
			j--;
		}
		else if (a[i] + a[j] > k) j--;
		else i++;
	}

	return result;
}
 
const main = () => {
	console.log(twoSumSorted([1, 3, 4, 5, 6, 8, 9, 10, 12, 14], 10));
}
 

main();