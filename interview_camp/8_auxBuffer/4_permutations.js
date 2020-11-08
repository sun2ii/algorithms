const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n!)
// 🛰 O(n)
const permutations = (a, x) => {
	return permutationsHelper(a, new Array(x), 0, {});
}

const permutationsHelper = (a, buf, bIndex, isInBuffer) => {
	if (buf.length === bIndex) {
		utils.found(buf);
		return;
	}

	for (let i = 0; i < a.length; i++) {
		if (!isInBuffer[i]) {
			buf[bIndex] = a[i];

			isInBuffer[i] = true;
			permutationsHelper(a, buf, bIndex + 1, isInBuffer);
			isInBuffer[i] = false;
		}
	}
}
 
const main = () => {
	permutations([1, 2, 3, 4, 5], 3);
}
 
main();