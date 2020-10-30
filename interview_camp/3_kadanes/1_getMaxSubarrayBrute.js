const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n^2)
// 🛰 O(1)
const getMaxSubarrayBrute = a => {
	let max = Number.MIN_SAFE_INTEGER;

	log('\n1. sum0')
	log('2. j=i')
	log('3. +=aj')
	log('4. get max')
	line();
	for (let i = 0; i < a.length; i++) {
		let sum = 0;
		for (let j = i; j < a.length; j++) {
			utils.prettyPrint(a, i, j, sum.toString());
			sum += a[j];
			if (sum > max) max = sum;
		}
	}

	log(max);
	return max;
}
 
const main = () => {
	getMaxSubarrayBrute([1,2,-1,2,-3,2,-5]);
}
 
main();