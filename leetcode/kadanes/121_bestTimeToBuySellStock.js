const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const bestTimeToBuyAndSellStock = a => {
	let max1 = 0;
	let max2 = 0;
	
	for (let i = 1; i < a.length; i++) {
		utils.prettyPrint(a, i, max1.toString(), (a[i] - a[i - 1]).toString(), max2.toString());
		max1 = Math.max(0, max1 + a[i] - a[i - 1]);
		max2 = Math.max(max2, max1);
	}

	return max2;
}
 
const main = () => {
	log(bestTimeToBuyAndSellStock([7, 1, 5, 3, 6, 4]));
}
 
main();