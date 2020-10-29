// 🕑 O(n)
// 🛰 O(n)
let s = 1;

const taylorHorners = (x, n) => {
	if (n === 0) return s;
	s = 1 + x * s / n;
	return taylorHorners(x, n - 1);
}

// 🕑 O(n)
// 🛰 O(1)
const taylorHornersIterative = (x, n) => {
	let res = 1;
	let numerator = 1;
	let denominator = 1;

	for (let i = 1; i <= n; i++) {
		numerator *= x;
		denominator *= i;
		res += numerator / denominator;
	}
	
	return res;
}
 
const main = () => {
	console.log(taylorHorners(1, 10));
	console.log(taylorHornersIterative(1, 10));
}
 
main();