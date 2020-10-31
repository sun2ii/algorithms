const { arrayHelper: utils, log, line } = require('../../__common/utils');

/*
-------------------------------------
        Reverse Array
-------------------------------------
🕑 O(n)
🛰 O(1)

1. >< swap
-------------------------------------
| 0 5 | [1, 2, 3, 4, 5, 6] - swap(1,6)
| 1 4 | [6, 2, 3, 4, 5, 1] - swap(2,5)
| 2 3 | [6, 5, 3, 4, 2, 1] - swap(3,4)
-------------------------------------
        [6, 5, 4, 3, 2, 1]
-------------------------------------
*/

const reverseArray = a => {
	let i = 0;
	let j = a.length - 1;
	
	while (i < j) {
		utils.prettyPrint(a, i, j);
		[a[i], a[j]] = [a[j], a[i]];
		i++;
		j--;
	}
		
	return a;
}
 
reverseArray([1, 2, 3, 4, 5, 6]);