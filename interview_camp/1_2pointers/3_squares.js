const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// Compare edges >< + push to end of result[] --> 2 Pointers
// 🕑 O(n)
// 🛰 O(n)
const squares = a => {
	utils.start(a);
	let i = 0; 
	let j = a.length - 1;

	let result = new Array(a.length);
	let resultIndex = result.length - 1;

	while (i <= j) {
		utils.prettyPrint(a, i, j);
		if (a[i] * a[i] >= a[j] * a[j]) {
			result[resultIndex] = a[i] * a[i];
			i++;
		} else {
			result[resultIndex] = a[j] * a[j];
			j--;
		}

		resultIndex--;
	}

	utils.found(result);
	return result;
}
 
const main = () => {
	squares([-4, -2, -1, 0, 3, 5]);
}
 
main();