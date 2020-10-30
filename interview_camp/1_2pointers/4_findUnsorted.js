const { arrayHelper: utils, line, log } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const findUnsorted = a => {
	let s, e;

	log('\n1. find dip  🔴 > 🟢 (S > E):');
	log('2. find bump 🔴 < 🟢 (E < S):');
	log('3. find min/max(s, e)');
	log('4. left > min | right < max')
	line();
	for (s = 0; s < a.length; s++) {
		utils.prettyPrint(a, s, s + 1);
		if (a[s] > a[s + 1]) break;
	}

	// if start === end, then a is sorted
	if (s === a.length - 1) return;

	line();
	for (e = a.length - 1; e >= 0; e--) {
		utils.prettyPrint(a, e, e - 1);
		if (a[e] < a[e - 1]) break;
	}

	line(); 
	let min = Number.MAX_SAFE_INTEGER;
	let max = Number.MIN_SAFE_INTEGER;

	for (let i = s; i < e; i++) {
		utils.prettyPrint(a, i, undefined, [min, max]);
		if (a[i] > max) max = a[i];
		if (a[i] < min) min = a[i];
	}
	
	line();
	while (s > 0 && a[s - 1] > min) {
		s--;
		utils.prettyPrint(a, s, e);
	}

	while (e < a.length - 1 && a[e + 1] < max) {
		e++;
		utils.prettyPrint(a, s, e);
	}

	line();
	return [s, e];
}
 
const main = () => {
	findUnsorted([1, 3, 5, 2, 6, 4, 7, 8, 9]);
}
 
main();