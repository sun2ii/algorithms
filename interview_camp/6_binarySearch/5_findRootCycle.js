const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
line();
log('\tFind Root Cycle');
line();
log('\n1. compare to last element is key');
log('3. [4, 5, 1] - m > r: ->');
log('2. [9, 5, 5] - m <= r + left > m: return');
log('4. else <-');

// 🕑 O(log n)
// 🛰 O(1)
const findRootCycle = a => {
	let s = 0;
	let e = a.length - 1;
	let r = a[a.length - 1];

	while (s <= e) {
		let m = Math.floor(s + (e - s) / 2);
		let left = (m > 0) ? a[m - 1] : Number.MIN_SAFE_INTEGER;
		utils.prettyPrint(a, s, m, e, r.toString());

		if (a[m] > r) {
			s = m + 1;
		} else if (a[m] <= r && (m === 0 || left > r)) {
			return m;
		} else {
			e = m - 1;
		}
	}

	return -1;
}
 
const main = () => {
	// console.log(findRootCycle([3, 4, 5, 6, 7, 8, 9, 10, 1, 2]));
	console.log(findRootCycle([2, 3, 1]));
	console.log(findRootCycle([3, 1, 2]));
	console.log(findRootCycle([1, 2, 3]));
}
 
main();