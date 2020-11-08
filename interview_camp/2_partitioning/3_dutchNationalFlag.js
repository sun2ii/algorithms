const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const dutchNationalFlag = (a, p) => {
	let s = 0;
	let i = 0;
	let e = a.length - 1;

	while (i < e) {
		if (a[i] === p) i++;
		else if (a[i] > p) {
			[a[i], a[e]] = [a[e], a[i]];
			e--;
		} else {
			[a[i], a[s]] = [a[s], a[i]];
			s++;
			i++;
		}
	}

	utils.found(a)
	return a;
}
 
const main = () => {
	dutchNationalFlag([5, 2, 4, 4, 6, 4, 4, 3], 4);
}
 
main();