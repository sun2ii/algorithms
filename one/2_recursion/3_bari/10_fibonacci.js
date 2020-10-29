// 🕑 O(n)
// 🛰 O(1)
const fibIterative = a => {
	if (a <= 1) return a;

	let one = 0;
	let two = 1;
	let res = 0;

	for (let i = 2; i <= a; i++) {
		res = one + two; 
		one = two;
		two = res;  
	}
	return res; 
}

// 🕑 O(2^n)
// 🛰 O(n)
const fibRecursive = a => {
	if (a <= 1) return a;

	return fibRecursive(a - 2) + fibRecursive(a - 1)
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
 
const main = () => {
	console.log(fibIterative(10));
	console.log(fibRecursive(10));
	console.log(fibMemo(10));
}

main();
 