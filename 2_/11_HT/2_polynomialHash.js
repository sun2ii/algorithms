const u = require('../../__common/utils');
 
// Time  o(n)
// Space o(1)
const polynomialHash = a => {
	let hash = 0;
	let x = 53;

	for (let i = 0; i < a.length; i++) {
		hash = hash * x + a.charCodeAt(i);
	}

	return hash;
}
 
const main = () => {
	polynomialHash("boat");
}
 
main();