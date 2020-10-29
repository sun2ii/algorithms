// 🕑 O(n)
// 🛰 O(n)
let p = 1;
let f = 1;

const taylorRecursion = (x, n) => {
	return taylorRecursionHelper(x, n, 0);
}

const taylorRecursionHelper = (x, n, res) => {
	if (n === 0) return 1;

	res = taylorRecursionHelper(x, n - 1);
	p *= x;
	f *= n;

	return res + p / f;
}
 
const main = () => {
	console.log(taylorRecursion(1, 10));
}
 
main();