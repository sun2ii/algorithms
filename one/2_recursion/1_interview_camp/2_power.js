// 🕑 O(n)
// 🛰 O(n)
const power = (a, pow) => {
	if (pow === 0) return 1;

	return power(a, pow - 1) * a;
}

// 🕑 O(log n)
// 🛰 O(n)
const power2 = (a, pow) => {
	if (pow === 0) return 1;
	if (pow % 2 === 0) return power2(a * a, pow / 2);
	else return power2(a * a, (pow - 1) / 2) * a;
}
 
const main = () => {
	console.log(power(3, 8));
	console.log(power2(3, 8));
}
 
main();