const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(2^n)
// 🛰 O(1)
const fib = a => {
	if (a < 2) return a;
	return fib(a - 1) + fib(a - 2);
}

// 🕑 O(n)
// 🛰 O(n)
const fibMemo = a => {
	return fibMemoHelper(a, {});
}

const fibMemoHelper = (a, memo) => {
	if (a < 2) return a;
	else {
		if (!memo[a - 2]) memo[a - 2] = fibMemoHelper(a - 2, memo);
		if (!memo[a - 1]) memo[a - 1] = fibMemoHelper(a - 1, memo);
	}

	return memo[a - 2] + memo[a - 1];
}

const fibIterative = x => {
	storage = {0 : 0, 1 : 1};

	for (let i = 2; i <= x; i++) 
		storage[i] = storage[i - 2] + storage[i - 1];

	return storage[x];
}
 
const main = () => {
	log(fib(10));
	log(fibMemo(10));
	log(fibIterative(10));
}
 
main();