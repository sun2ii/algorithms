const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// Compare edges >< + push to end of result[] --> 2 Pointers
// 🕑 O(n)
// 🛰 O(n)
const squares = a => {
	let i = 0; 
	let j = a.length - 1;

	let result = new Array(a.length);
	let resultIndex = result.length - 1;

	while (i <= j) {
		utils.prettyPrint(a, i, j, result);
		if (i * i >= j * j) {
			result[resultIndex] = i * i;
			i++;
		} else {
			result[resultIndex] = j * j;
			j--;
		}

		resultIndex--;
	}

	return result;
}
 
const main = () => {
	console.log(squares([-4, -2, -1, 0, 3, 5]));
}
 
main();