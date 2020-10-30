const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const subArrayFindZero = a => {
	let storage = {};
	let sum = 0;

	line()
	log('\tSubarray Sum 0')
	line();
	log('\n1. Cumulate sum');
	log('2. If sum is 0, return answer');
	log('3. if sum exists in storage, return [index, i');
	log('4. Save sum to storage');
	line();

	for (let i = 0; i < a.length; i++) {
		utils.prettyPrint(a, i, sum.toString(), storage);
		sum += a[i];

		if (sum === 0) return [0, i];

		if (storage.hasOwnProperty(sum)) return [storage[sum] + 1, i];

		storage[sum] = i;
	}

	return -1;
}

const main = () => {
	console.log(subArrayFindZero([2,4,-2,1,-3,5,-3]));
}
 
main();