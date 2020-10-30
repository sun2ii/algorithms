// 🕑 O(2^n)
// 🛰 O(n)
const fib = a => {
	if (a <= 1) return a;
	return fib(a - 2) + fib(a - 1);
}

// 🕑 O(n)
// 🛰 O(n)
const fibMemo = a => {
	return fibMemoHelper(a, {});
}

const fibMemoHelper = (a, memo) => {
	if (a <= 1) return a;
	else {
		if (!memo[a - 2]) memo[a - 2] = fibMemoHelper(a - 2, memo);
		if (!memo[a - 1]) memo[a - 1] = fibMemoHelper(a - 1, memo);

		return memo[a - 2] + memo[a - 1];
	}
}

// 🕑 O(n)
// 🛰 O(1)
const fibIterative = a => {
	let obj = {0 : 0, 1 : 1};

	for (let i = 2; i <= a; i++) 
		obj[i] = obj[i - 2] + obj[i - 1];
		
	return obj[a];
}
 
const main = () => {
	console.log(fib(11));
	console.log(fibMemo(11));
	console.log(fibIterative(11));
}
 
main();