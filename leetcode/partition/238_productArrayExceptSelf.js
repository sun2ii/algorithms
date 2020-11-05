const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const productExceptSelf = a => {
	let result = new Array(a.length).fill(1);
	let left = 1;
	
	for (let i = 0; i < a.length;  i++) {
	  if (i > 0) left *= a[i - 1];
	  console.log('left', left)
	  result[i] = left;
	}
	
	let right = 1;
	
	for (let i = a.length - 1; i >= 0; i--) {
	  if (a.length - 1) right *= a[i + 1];
	  result[i] *= right;
	}

	  
	return result;
}
 
const main = () => {
	log(productExceptSelf([1, 2, 3, 4]));
}
 
main();