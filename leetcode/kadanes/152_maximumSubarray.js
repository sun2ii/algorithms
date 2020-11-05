const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const maximumSubarray = a => {
	let result = Number.MIN_SAFE_INTEGER;
	let maxloc = 1;
	let minloc = 1;

	for (let i = 0; i < a.length; i++) {
		let x = a[i] * maxloc;
		let y = a[i] * minloc;

		utils.prettyPrint(a, i);
		maxloc = Math.max(a[i], Math.max(x, y));
		minloc = Math.max(a[i], Math.min(x, y));
		console.log('x, y, maxloc, minloc', x, y, maxloc, minloc)
		line();

		result = Math.max(maxloc, result);
	}

	return result;
}

const main = () => {
	log(maximumSubarray([2,3,-2,4]));
}
 
main();