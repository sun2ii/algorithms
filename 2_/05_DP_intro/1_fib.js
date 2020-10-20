const u = require('../../__common/utils');
 
// Time  o(2^n)
// Space o(n)
const fib = x => {
	if (x <= 2) return 1;
	return fib(x-1) + fib(x-2);
}
 
const main = () => {
	console.log(fib(8));
}
 
main();