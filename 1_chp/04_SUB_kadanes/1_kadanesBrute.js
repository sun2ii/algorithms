const u = require('../__common/utils');
 
// Time  o(n^2)
// Space o(1)
const kadanesBrute = a => {
	if (a === null || a.length <= 0) return null;

	let sum, result;
	result = a[0];

	for (let i = 0; i < a.length; i++) {
		sum = 0;
		for (let j = i; j < a.length; j++) {
			u.pl(); console.log('sum, result', sum, result); u.par(a, i, j)
			sum += a[j];
			result = Math.max(result, sum);
		}
	}

	u.p(result);
	return result;
}
 
const main = () => {
	kadanesBrute([1, 2, -1, 2, -3, 2, -5]);
}
 
main();