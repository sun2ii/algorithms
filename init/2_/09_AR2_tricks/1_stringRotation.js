const u = require('../../__common/utils');
 
// Time  o(n)
// Space o(n)
const stringRotation = (a, b) => {
	if (a === null || a.length <= 0 || b === null || b.length <= 0) return null;
	console.log('(a + a).includes(b)', (a + a).includes(b))
	return (a + a).includes(b);
}
 
const main = () => {
	stringRotation("bobcat", "atbob");
}
 
main();