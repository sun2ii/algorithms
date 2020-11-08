const { arrayHelper: utils, log, line } = require('../../__common/utils');

const twoSumSorted = (a, k) => {
	utils.start(a, k);
	let i = 0;
	let j = a.length - 1;

	while (i < j) {
		utils.prettyPrint(a, i, j);
		if (a[i] + a[j] === k) {
			utils.found([a[i], a[j]])
			return [a[i], a[j]];
		}
		else if (a[i] + a[j] > k) j--;
		else i++;
	}

	return -1;
}
 
const main = () => {
	twoSumSorted([1, 2, 3, 4, 5], 9);
}
 
main();