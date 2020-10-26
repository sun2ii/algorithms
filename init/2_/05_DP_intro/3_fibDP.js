const u = require('../../__common/utils');
 
// Time  o(n)
// Space o(1)
const fibDP = x => {
	if (x === 0) return 0;

	let a = 0;
	let b = 1;

	for (let i = 2; i < x; i++) {
		let temp = a + b;
		a = b;
		b = temp;
	}

	return a + b;

}
 
const main = () => {
	console.log(fibDP(8))
}
 
main();