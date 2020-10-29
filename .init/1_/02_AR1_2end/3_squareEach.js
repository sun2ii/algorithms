const u = require('../__common/utils');
 
// Time  o(n)
// Space o(n)
const squareEach = a => {
	let s, e, res;
	s = 0;
	e = a.length - 1;
	res = [];

	if (a === null || a.length <= 0) return null;

	while (s < e) {
		let x = Math.abs(a[s]);
		let y = Math.abs(a[e]);

		if (y * y > x * x) {
			res.unshift(y * y);
			res.unshift(x * x);
		} else {
			res.unshift(x * x);
			res.unshift(y * y);
		}
		s++;
		e--;
	}

	u.p(res);
	return res;
}
 
const main = () => {
	squareEach([-4, -2, -1, 0, 3, 5]);
}
 
main();