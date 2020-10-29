const u = require('../../__common/utils');
 
// Time  o(n)
// Space o(n)
const climbingStepsBottomUp = n => {
	let a = [];

	for (let i = 0; i < n + 1; i++) a[i] = 0;
	a[0] = 1;

	for (let i = 0; i < a.length; i++) {
		u.pl();
		u.par(a, i, n)
		if (i + 1 < a.length) {
			u.p(i + 1);
			a[i + 1] += a[i];
		}
		if (i + 3 < a.length) {
			u.p(i + 3);
			a[i + 3] += a[i];
		}
		if (i + 5 < a.length) {
			u.p(i + 5);
			a[i + 5] += a[i];
		}
	}

	return a[n];
 }
 
const main = () => {
	climbingStepsBottomUp(8);
}
 
main();