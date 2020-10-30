const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const moveZeroesEnd = a => {
	let boundary = a.length - 1;

	log('\nKey is "🔴 boundary pointer"');
	line();
	for (let i = a.length - 1; i >= 0; i--) {
		utils.prettyPrint(a, boundary, i);
		if (a[i] === 0) {
			[a[i], a[boundary]] = [a[boundary], a[i]];
			boundary--;
		}
	}

	log(a);
	return a;
}
 
const main = () => {
	moveZeroesEnd([4, 2, 0, 1, 0, 3, 0]);
}
 
main();