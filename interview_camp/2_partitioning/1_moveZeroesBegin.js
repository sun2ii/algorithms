const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const moveZeroesBegin = a => {
	let boundary = 0;

	log('\nKey is "🔴 boundary pointer"');
	line();
	for (let i = 0; i < a.length; i++) {
		utils.prettyPrint(a, boundary, i);
		if (a[i] === 0) {
			[a[boundary], a[i]] = [a[i], a[boundary]];
			boundary++;
		}
	}

	log(a)
	return a;
}
 
const main = () => {
	moveZeroesBegin([4, 2, 0, 1, 0, 3, 0]);
}
 
main();
