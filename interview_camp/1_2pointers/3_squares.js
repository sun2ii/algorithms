const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// Compare edges >< + push to end of result[] --> 2 Pointers
// 🕑 O(n)
// 🛰 O(1)
const squares = a => {
	let s = 0;
	let e = a.length - 1;
	let result = new Array(a.length);
	let resultIndex = result.length - 1;

	log('\n1. max(s, e) push to purple[e]');
	log('2. then ><');

	line();
	while (s <= e) {
		utils.prettyPrint(a, s, e, result);
		if (Math.abs(a[s]) > Math.abs(a[e])) {
			result[resultIndex] = a[s] * a[s];
			s++;
		} else {
			result[resultIndex] = a[e] * a[e];
			e--;
		}

		resultIndex--;
	}

	return result;
}
 
const main = () => {
	squares([-4, -2, -1, 0, 3, 5]);
}
 
main();