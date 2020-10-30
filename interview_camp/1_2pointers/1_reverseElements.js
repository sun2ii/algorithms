const { arrayHelper: utils, log, line } = require('../../__common/utils');

// Sorted -> 2 Pointer
// 🕑 O(n)
// 🛰 O(1)
const reverseArray = a => {
	let i = 0;
	let j = a.length - 1;
	
	log('\nMost basic 2 pointer swap');
	line();
	while (i < j) {
		utils.prettyPrint(a, i, j);
		[a[i], a[j]] = [a[j], a[i]];
		i++;
		j--;
	}
		
	return a;
}
 
const main = () => {
	reverseArray([1, 2, 3, 4, 5, 6]);
}
 
main();