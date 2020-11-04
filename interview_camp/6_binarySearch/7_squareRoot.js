const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(log n)
// 🛰 O(1)
const squareRoot = x => {
	if (x === 0) return 0;
	if (x === 1) return 1;

	line();
	log('\tFind Square Root');
	line();
	log('\n1. If square is bigger than x, continue to cut m in half (e = m - 1)')
	log('2. If square is less than x, check if square(x + 1) is bigger, if it is return (continue to cut in half (s = m + 1))')
	let s = 0;
	let e = Math.floor(x / 2);
	
	while (s <= e) {
		let m = Math.floor(s + (e - s) / 2);
		console.log(s, m, e, m * m, x)
		if (square(m) > x) e = m - 1;
		else if (square(m) < x) {
			if (square(m + 1) > x) return m;
			s = m + 1;
		} else return m;

	}
	return -1;
}

const square = x => x * x;
 
const main = () => {
	console.log(squareRoot(6561));
}
 
main();