// 🕑 O(2^n)
// 🛰 O(n)
const towerOfHanoi = (x, a, b, c) => {
	if (x > 0) {
		towerOfHanoi(x - 1, a, c, b);
		console.log('a to c', a, c);
		towerOfHanoi(x - 1, b, a, c);
	}
}

const main = () => {
	towerOfHanoi(5, 1, 2, 3);
}
 
main()