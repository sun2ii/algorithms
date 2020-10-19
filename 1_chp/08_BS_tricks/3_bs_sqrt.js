const u = require('../__common/utils');

// Time  O(logn)
// Space O(1)
const sqrt = x => { 
	let s, e, m;
	s = 0;
	e = x / 2;

	while (s <= e) {
		m = Math.floor(s + (e - s) / 2);
		if (square(m) > x) {
			e = m - 1;
		} else if (square(m) < x) {
			if (square(m + 1) > x) {
				u.p(m);
				return m;
			}
			s = m + 1;
		} else {
			u.p(m);
			return m;
		}
	}

	return -1;
}

const square = x => x * x;

const main = () => sqrt(25);

main();
