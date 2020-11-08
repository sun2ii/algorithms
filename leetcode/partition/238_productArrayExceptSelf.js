const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const productExceptSelf = a => {
	let result = new Array(a.length).fill(1);

	let left = 1;
	for (let i = 0; i < a.length;  i++) {
		result[i] *= left;
		left *= a[i];
		utils.prettyPrint(a, i, left.toString(), result.toString());
	}
	line();
	
	let right = 1;
	for (let i = a.length - 1; i >= 0; i--) {
		result[i] *= right;
		right *= a[i];
		utils.prettyPrint(a, i, right.toString(), result.toString());
	}
	  
	return result;
}
 
const main = () => {
	log(productExceptSelf([1, 2, 3, 4]));
}
 
main();