// 🕑 O(n)
// 🛰 O(n)
const basicRecursion = a => {
	if (a > 0) {
		console.log('a', a);
		basicRecursion(a - 1);
	}
}
 
const main = () => {
	basicRecursion(5);
}
main();
 