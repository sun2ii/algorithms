// 🕑 O(n)
// 🛰 O(1)
const findMaxMin = a => {
	let maxNum = Number.MIN_SAFE_INTEGER;
	let minNum = Number.MAX_SAFE_INTEGER;

	for (let i = 0; i < a.length; i++) {
		if (a[i] > maxNum) maxNum = a[i];
		if (a[i] < minNum) minNum = a[i];
	}

	console.log('maxNum, minNum', maxNum, minNum)
	return [maxNum, minNum];
}
 
const main = () => {
	findMaxMin([5, 8, 3, 9, 6, 2, 10, 7, -1, 4]);
}
 
main();