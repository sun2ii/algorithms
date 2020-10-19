const u = require('../__common/utils');
 
// Time  o()
// Space o()
const kadanes = a => {
	if (a === null || a.length <= 0) return null;

	let maxHere, result;

	maxHere = a[0];
	result = a[0];

	for (let i = 1; i < a.length; i++) {
		u.pl(); u.par(a, i); console.log('maxHere+c', maxHere+a[i], 'c', a[i]); 
		maxHere = Math.max(maxHere + a[i], a[i]);
		result = Math.max(maxHere, result);
	}

	u.p(result);
	return result;
}
 
const main = () => {
	kadanes([1, 2, -1, 2, -3, 2, -5]);
}
 
main();