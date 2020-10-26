const u = require('../../__common/utils');
 
// Time  o(n)
// Space o(n)
const climbingStepsTopDown = n => {
	let a = [];

	for (let i = 0; i < n + 1; i++) a[i] = 0;
	a[0] = 1;

	for (let j = 1; j < a.length; j++) {
		let nMinus1 = j - 1 < 0 ? 0 : a[j - 1];
		let nMinus3 = j - 3 < 0 ? 0 : a[j - 3];
		let nMinus5 = j - 5 < 0 ? 0 : a[j - 5];

		a[j] = nMinus1 + nMinus3 + nMinus5;	
		u.par(a, j, n);
	}

	console.log('a[n]', a[n])
	return a[n];
}
 
const main = () => {
	climbingStepsTopDown(8);
}
 
main();