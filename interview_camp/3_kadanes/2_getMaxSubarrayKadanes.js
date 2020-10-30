const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const getMaxSubarrayKadanes = a => {
	let maxAll = a[0];
	let maxHere = a[0];


	log('\n1. Set max1, max2 to a[0] > loop1');
	log('2. 🟢 max1 = max(max1 + e, e)') 
	log('3. 🔴 max2 = max(max1, max2)')
	line()
	for (let i = 1; i < a.length; i++) {
		utils.prettyPrint(a, i, (maxHere + a[i]).toString(), maxAll.toString());
		maxHere = Math.max(maxHere + a[i], a[i]);
		maxAll = Math.max(maxHere, maxAll);
	}

	log(maxAll);
	return maxAll;
}
 
const main = () => {
	getMaxSubarrayKadanes([1,2,-1,2,-3,2,-5]);
}
 
main();