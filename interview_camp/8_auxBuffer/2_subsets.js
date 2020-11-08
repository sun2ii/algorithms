const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n!)
// 🛰 O(n)
const subsets = (a, x) => {
	utils.start(a, x);
	return subsetsHelper(a, new Array(x), 0, 0);
}

const subsetsHelper = (a, buf, bIndex, aIndex) => {
	utils.baseCase('printing ' + buf)
	line();
	if (buf.length === bIndex || a.length === aIndex) {
		buf.pop();
		return;
	}

	for (let i = aIndex; i < a.length; i++) {
		buf[bIndex] = a[i];
		utils.recursiveStep(true, '', [
			buf.slice(0, bIndex + 1),
			bIndex + 1,
			i + 1,
		]);
		subsetsHelper(a, buf, bIndex + 1, i + 1);
		utils.recursiveStep(false, '', [
			buf.slice(0, bIndex),
			bIndex,
			i,
		]);
	}
}
 
const main = () => {
	subsets([1, 2, 3], 3);
}
 
main();
