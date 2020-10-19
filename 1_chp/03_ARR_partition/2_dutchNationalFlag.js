const u = require('../__common/utils');
 
// Time  o(n)
// Space o(1)
const dutchNationalFlag = (a, x) => {
	if (a === null || a.length <= 0) return null;

	let s, i, e;
	s = 0;
	i = 0;
	e = a.length - 1;

	while(i <= e) {
		u.par(a, s, i, e);
		if (a[i] === x) i++;
		else if (a[i] < x) {
			u.swap(a, i, s);
			s++;
			i++;
		} else {
			u.swap(a, i, e);
			e--;
		}
	}

	u.p(a);
	return a;
}
 
const main = () => {
	dutchNationalFlag([5, 2, 4, 4, 6, 4, 4, 3], 4);
}
 
main();