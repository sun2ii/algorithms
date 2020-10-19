const u = require('../__common/utils');
 
// Time  o(n)
// Space o(1)
const rgbMarbles = a => {
	if (a === null || a.length <= 0) return null;

	let s, i, e;
	s = 0;
	i = 0;
	e = a.length - 1;

	while (i <= e) {
		if (a[i] === 2) i++;
		else if (a[i] === 1) {
			u.swap(a, i, s);
			s++;
			i++;
		} else  {
			u.swap(a, i, e);
			e--;
		}
	}

	u.p(a);
	return a;
}
 
const main = () => {
	rgbMarbles([2, 1, 2, 3, 2, 1, 2, 3]);
}
 
main();
