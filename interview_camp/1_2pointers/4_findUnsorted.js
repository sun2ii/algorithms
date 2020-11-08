const { arrayHelper: utils, line, log } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const findUnsorted = a => {
	let s, e;

	log('\n1. find dip [as > right] - [9, 1]');
	log('2. find bump [ae < left] - [1, 9]');
	log('3. find min/max between (s, e)');
	log('4. sleft > min | eright < max')
	line();
	
	for (s = 0; s < a.length; s++) {
		utils.prettyPrint(a, s);
		if (a[s] > a[s + 1]) break;
	}

	if (s === a.length) return;

	line();
	for (e = a.length - 1; e >= 0; e--) {
		utils.prettyPrint(a, undefined, e);
		if (a[e] < a[e - 1]) break;
	}

	let min = Number.MAX_SAFE_INTEGER;
	let max = Number.MIN_SAFE_INTEGER; 

	for (let i = s; i < e; i++) {
		if (a[i] > max) max = a[i];
		if (a[i] < min) min = a[i];
	}

	while (s > 0 && a[s - 1] > min) s--;
	while (e < a.length && a[e + 1] < max) e++;

	return [s, e];
}
 
const main = () => {
	console.log(findUnsorted([1, 3, 5, 2, 6, 4, 7, 8, 9]));
}
 
main();