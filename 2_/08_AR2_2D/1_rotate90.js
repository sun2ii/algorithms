const u = require('../../__common/utils');
 
// Time  o(n)
// Space o(1)
const rotate90 = a => {
	if (a === null || a.length <= 0 || a[0].length !== a.length) return null;

	for (let i = 0; i < a.length / 2; i++) {
		rotateHelper(a, i, a.length - 1 - i);
	}

	return a;
}

const rotateHelper = (a, s, e) => {
	for (let i = 0; s + i < e; i++) {
		let temp = a[s][s+i];
		a[s][s + i] = a[e - i][s];
		a[e - i][s] = a[e][e - i];
		a[e][e - i] = a[s + i][e];
		a[s + i][e] = temp;
	}
}
 
const main = () => {
	rotate90([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]);
}
 
main();