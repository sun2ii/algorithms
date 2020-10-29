// 🕑 O(n)
// 🛰 O(n)
const powerRecursion = (a, pow) => {
	if (pow === 0) return 1;

	return powerRecursion(a, pow - 1) * a;
}

// 🕑 O(log n)
// 🛰 O(n)
const powerRecursion2 = (a, pow) => {
	if (pow === 0) return 1;
	if (pow % 2 === 0) return powerRecursion2(a * a, pow / 2);
	else return powerRecursion2(a * a, (pow - 1) / 2) * a;
}
 
const main = () => {
	console.log(powerRecursion(3, 8));
	console.log(powerRecursion2(3, 8));
}
 
main();