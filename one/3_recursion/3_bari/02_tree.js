// 🕑 O(2^n)
// 🛰 O(n)
const treeRecursion = a => {
	if (a > 0) {
		console.log('a', a)
		treeRecursion(a - 1);
		treeRecursion(a - 1);
	}
}
 
const main = () => {
	treeRecursion(5);
}
 
main();