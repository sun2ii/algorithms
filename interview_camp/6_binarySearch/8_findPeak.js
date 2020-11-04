const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(log n)
// 🛰 O(1)
const findPeak = a => {

	line();
	log('\tFind Peak');
	line();
	log('\n1. Establish left + right values of m')
	log('2. [1, 5, 9]: look right')
	log('3. [9, 5, 1]: look left')
	log('4. [9, 5, 9]: look either way')
	log('5. else return m')
	let s = 0;
	let e = a.length - 1;

	while (s <= e) {
		let m = Math.floor(s + (e - s) / 2);
		let left = (m > 0) ? a[m - 1] : Number.MIN_SAFE_INTEGER;
		let right = (m < a.length - 1) ? a[m + 1] : Number.MAX_SAFE_INTEGER;
		utils.prettyPrint(a, s, e, m, left.toString(), right.toString())

		if (left < a[m] && right > a[m]) s = m + 1;
		else if (left > a[m] && right < a[m]) e = m - 1;
		else if (left > a[m] && right > a[m]) e = m - 1;
		else return m;
	}

	return -1;
}
 
const main = () => {
	console.log(findPeak([7, 6, 5, 1, 2, 3, 4, 0]));
}
 
main();