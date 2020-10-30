const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const subArrayFindX = (a, x) => {
	let sum = 0;
	let storage = {};

	line();
	log('\tSubarray Find X');
	line();
	log('\n1. Accumulate sum');
	log('2. if sum == x, return [0, i]');
	log('3. if sum - x exists in storage, return [storage[sum-x]+1, i]');
	log('4. Accumulate sum');
	line();
	for (let i = 0; i < a.length; i++) {
		utils.prettyPrint(a, i, sum.toString(), (sum - x).toString(), storage);
		sum += a[i];

		if (sum === x) return [0, i];
		if (storage.hasOwnProperty(sum - x)) return [storage[sum - x] + 1, i];

		storage[sum] = i;
	}
}
 
const main = () => {
	console.log(subArrayFindX([2,4,-2,1,-3,5,-3], 3));
}
 
main();