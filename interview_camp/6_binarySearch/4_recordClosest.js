const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(log n)
// 🛰 O(1)
const recordClosest = (a, x) => {
	let result = -1;
	let s = 0;
	let e = a.length - 1;
	
	while(s <= e) {
		let m = Math.floor(s + (e - s) / 2);
		utils.prettyPrint(a, s, m, e, x.toString());
		result = record(a, m, result, x);
		if (x < a[m]) e = m - 1;
		else if (x > a[m]) s = m + 1;
		else return m;
	}
	
	console.log('result', a[result])
	return a[result];
}

const record = (a, m, res, x) => {
	if (res === -1 || Math.abs(a[m] - x) < Math.abs(a[res] - x)) return m;

	return res;
}
 
const main = () => {
	recordClosest([10, 20, 30, 40, 50], 32);
}
 
main();