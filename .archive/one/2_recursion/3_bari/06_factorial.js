// 🕑 O(n)
// 🛰 O(n)
const factorialRecursion = a => {
	if (a <= 1) return 1;
	return factorialRecursion(a - 1) * a;
}

// 🕑 O(n)
// 🛰 O(1)
const factorialIterative = a => {
	if (a <= 1) return 1;
	
	let s = 1;
	for (let i = 1; i <= a; i++) s *= i;

	return s;
}
 
const main = () => {
	console.log(factorialRecursion(5));
	console.log(factorialIterative(5));
}
 
main();