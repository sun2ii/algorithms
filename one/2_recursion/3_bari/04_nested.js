// 🕑 O(n)
// 🛰 O(n)
const nestedRecursion = a => {
	console.log('a', a)
	if (a > 100) return a - 10;
	return nestedRecursion(nestedRecursion(a + 11));
}
 
const main = () => {
	console.log(nestedRecursion(95));
}
 
main();