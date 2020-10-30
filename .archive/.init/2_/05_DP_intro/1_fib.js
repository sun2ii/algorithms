const u = require('../../__common/utils');
 
// Time  o(2^n)
// Space o(n)
const fib = x => {
	if (x <= 2) return 1;
	return fib(x-1) + fib(x-2);
}

function fibonacci(x) {
	console.log('push', x);

	if (x <= 2) {
		return 1;
	}
	
	const x1 = fibonacci(x - 1);
	console.log('pop', x1);

	const x2 = fibonacci(x - 2);
	console.log('pop', x2);

	return x1 + x2;
}

function fibonacci2(x) {
	return fibHelper(x, {});
	// console.log('pushing, going down to node:', x);

	// if (x <= 2) return 1;

	// const sum = fibonacci2(x - 1) + fibonacci2(x - 2);
	// console.log('popping, going up from node:', sum)

	// return sum;
}

function fibHelper(x, memo) {
	if (x <= 2) return 1;
	if (memo.hasOwnProperty(x)) return memo[x];

	let result = fibHelper(x - 1, memo) + fibHelper(x - 2, memo);
	memo[x] = result

	return result;

}
 
const main = () => {
	// console.log(fib(8));
	// console.log('fibonacci(5)', fibonacci(5))
	console.log('fibonacci2(5)', fibonacci2(5))
}
 
main();