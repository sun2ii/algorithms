const u = require('../__common/utils');

// Time  O(logn)
// Space O(1)
const bsPeak = a => { 
	let s, e, m;

	s = 0;
	e = a.length - 1;
	
	while (s <= e) {
		m = Math.floor(s + (e - s) / 2);

		let l = (m > 0) ? a[m - 1] : Number.MIN_VALUE;
		let r = (m < a.length - 1) ? a[m + 1] : Number.MIN_VALUE;

		if (l < a[m] && r > a[m]) {
			s = m + 1;
		} else if (r < a[m] && l > a[m]) {
			e = m - 1;
		} else if (r > a[m] && l > a[m]) {
			e = m - 1;
		} else {
			u.p(m);
			return m;
		}
	}

	return -1;
}

const main = () => bsPeak([2, 4, 7, 12, 55, 645, 3, 1, 5]);

main();



