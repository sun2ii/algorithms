const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n!)
// 🛰 O(n)
const combinations = (a, x) => {
	utils.start(a, x);
	return combinationsHelper(a, new Array(x), 0, 0);
}

const combinationsHelper = (a, buf, bIndex, aIndex) => {
	line();
	if (buf.length === bIndex) {
		utils.baseCase('printing ' + buf)
		return;
	}

    if (a.length === aIndex) {
		utils.baseCase('maxed aLen')
		return;
	}

	for (let i = aIndex; i < a.length; i++) {
		buf[bIndex] = a[i];
		utils.recursiveStep(true, '', [
			bIndex + 1,
			buf.slice(0, bIndex + 1),
			aIndex + 1,
			i + 1,
		]);
		combinationsHelper(a, buf, bIndex + 1, i + 1);
		utils.recursiveStep(false, '', [
			bIndex,
			buf.slice(0, bIndex),
			aIndex,
			i
		]);
	}

	console.log('for loop is done')
	return;
}
 
const main = () => {
	combinations([1, 2, 3, 4, 5], 3);
}
 
main();

/*	
	recurses until it hits a base case
	backtracks to the for loops
*/