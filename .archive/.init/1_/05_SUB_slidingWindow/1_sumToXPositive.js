const u = require('../__common/utils');
 
// Time  o(n)
// Space o(1)
const sumToXPositive = (a, x) => {
	if (a === null || a.length <= 0) return null;

	let s, i, sum;
	s = 0;
	i = 0;
	sum = a[0];

	while (s < a.length) {
		if (s > i) {
			i = s;
			sum = a[s];
		}

		if (sum === x) {
			u.p([s, i]);
			return [s, i];
		}
		else if (sum < x) {
			if (i === a.length - 1) break;
			i++;
			sum += a[i];
			d(a, s, i, sum, x, 'i');
		} else {
			sum -= a[s];
			s++;
			d(a, s, i, sum, x);
		}
	}

	return null;
}

const d = (a, s, i, sum, x, type = 's') => {
	if (type === 's') {
		u.pl(); u.par(a, s, i); console.log('sum', sum, 's++');	console.log('x', x)
	}
	else {
		u.pl(); u.par(a, s, i); console.log('sum', sum, 'i++'); console.log('x', x)
	}
}
 
const main = () => {
	sumToXPositive([5, 3, 1, 7, 6, 4, 2, 3], 14);
}
 
main();