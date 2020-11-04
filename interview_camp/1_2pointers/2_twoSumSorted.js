const { arrayHelper: utils, log, line } = require('../../__common/utils');

/*
-------------------------------------
        Two Sum Sorted
-------------------------------------
🕑 O(n)
🛰 O(1)

1. Get closer to purple ><
-------------------------------------
| 0 4 9 | [1, 2, 3, 4, 5] 
| 1 4 9 | [1, 2, 3, 4, 5] 
| 2 4 9 | [1, 2, 3, 4, 5] 
| 3 4 9 | [1, 2, 3, 4, 5] 
-------------------------------------
			[ 4, 5 ]
*/

const twoSumSorted = (a, k) => {
	let i = 0;
	let j = a.length - 1;

	while (i < j) {
		utils.prettyPrint(a, i, j, k.toString());
		if (a[i] + a[j] === k) return [a[i], a[j]];
		else if (a[i] + a[j] > k) j--;
		else i++;
	}

	return -1;
}
 
const main = () => {
	log(twoSumSorted([1, 2, 3, 4, 5], 9));
}
 
main();