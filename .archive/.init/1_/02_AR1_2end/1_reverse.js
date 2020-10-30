const u = require('../__common/utils');
 
// Time  o(n)
// Space o(1)
const reverse = a => {
	let s, e;
	s = 0;
	e = a.length - 1;

	if (a === null || a.length <= 0) return null;

	while (s < e) {
		u.par(a, s, e);
		u.swap(a, s, e);
		s++;
		e--;
	}

	u.p(a);
	return a;
}
 
const main = () => {
	reverse([1, 2, 3, 4, 5, 6]);
}
 
main();