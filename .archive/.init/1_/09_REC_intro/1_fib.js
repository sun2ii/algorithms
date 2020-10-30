const u = require('../../../__common/utils');

// Time  o(2^n)
// Space o(n)
const fib = x => { 
	if (x === 1 || x === 2) return 1;
	return fib(x - 1) + fib(x - 2);
}

// Time  o(n)
// Space o(n)
const fibMemo = x => { 
	return fibMemoHelper(x, {});
}

const fibMemoHelper = (x, memo) => {
	if (x <= 1) return x;
	else {
		if (!memo[x - 2]) memo[x - 2] = fibMemoHelper(x - 2, memo);
		if (!memo[x - 1]) memo[x - 1] = fibMemoHelper(x - 1, memo);

		return memo[x - 2] + memo[x - 1];
	}
}

// 🕑 O(n)
// 🛰 O(1)
const fibIterative = x => {
	let obj = {0 : 0, 1 : 1};

	for (let i = 2; i <= x; i++)
		obj[i] = obj[i - 2] + obj[i - 1];

	return obj[x];
}

const main = () => {
	u.p(fib(7));
	u.p(fibMemo(7));
	u.p(fibIterative(7));
}

main();