// n! / [ r! (n - r)! ]

// 🕑 O(n)
// 🛰 O(n)
const combinationIterative = (n, r) => {
	const fact = x => {
		if (x <= 1) return x; 
		return fact(x - 1) * x;
	}

	return fact(n) / ( fact(r) * fact(n - r) );
}

// 🕑 O(n)
// 🛰 O(n)
const combinationRecursive = (n, r) => {
	if (r === 0 || n === r) return 1;

	return 	combinationRecursive(n - 1,  r - 1) + combinationRecursive(n - 1, r);
}

const main = () => {
	console.log(combinationIterative(4, 1));
	console.log(combinationRecursive(4, 1));
}
 
main();