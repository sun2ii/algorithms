const u = require("../../0_common/utils");

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
	if (x === 1 || x === 2) return 1;
	if (memo.hasOwnProperty(x)) return memo[x];
	let result = fibMemoHelper(x - 1, memo) + fibMemoHelper(x - 2, memo);

	memo[x] = result;
}

const main = () => {
	u.p(fib(5));
	u.p(fibMemo(5));
}

main();