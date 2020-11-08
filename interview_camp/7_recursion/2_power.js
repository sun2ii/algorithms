const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(log n)
// 🛰 O(1)
const power = (x, k) => {
	log(x, k);
	line();
	if (k === 0) return 1;
	let pow = Math.abs(k);
	
	let result = pow % 2 === 0 ?
		power(x * x, k / 2) :
		power(x * x, (k - 1) / 2) * x;
	
	return k > 0 ? result : 1 / result;
}
 
const main = () => {
	log(power(2, 4));
}
 
main();