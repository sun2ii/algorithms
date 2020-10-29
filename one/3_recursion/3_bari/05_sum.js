// 🕑 O(n)
// 🛰 O(n)
const sum = a => {
	if (a === 0) return a;
	return sum(a - 1) + a;
}

// 🕑 O(n)
// 🛰 O(1)
const sumIterative = a => {
	let s = 0;
	for (let i = 0; i <= a; i++)
		s += i;

	return s;
}
 
const main = () => {
	console.log(sum(8));
	console.log(sumIterative(8));
}
 
main();