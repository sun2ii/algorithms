// 🕑 O(n)
// 🛰 O(n)
const indirectRecursion_1 = a => {
	if (a > 0) {
		console.log('a', a)
		indirectRecursion_2(a - 1);
	}
}

const indirectRecursion_2 = b => {
	if (b > 0) {
		console.log('b', b)
		indirectRecursion_1(b - 1);
	}
}
 
const main = () => {
	indirectRecursion_1(10);
}
 
main();