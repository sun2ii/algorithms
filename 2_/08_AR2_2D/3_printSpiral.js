const u = require('../../__common/utils');
 
// Time  o(n)
// Space o(1)
const printSpiral = a => {
	if (a === null || a.length <= 0) return null;

	for (let i = 0; i < a.length / 2; i++) {
		printSpiralHelper(a, i, a.length - 1 - i, a[0].length - 1 - i);
	}

	return a;
}

const printSpiralHelper = (a, i, lastRow, lastCol) => {
	if (lastCol === i && lastRow === i) console.log('a[i][i]', a[i][i]);

	for (let j = i; j < lastCol; j++) console.log('a[i][j]', a[i][j]);
	for (let j = i; j < lastRow; j++) console.log('a[j][lastCol]', a[j][lastCol]);
	for (let j = lastCol; j > i; j--) console.log('a[lastRow][j]', a[lastRow][j]);
	for (let j = lastRow; j > i; j--) console.log('a[j][i]', a[j][i]);
}
 
const main = () => {
	printSpiral([
		[1, 2, 3,  4],
		[14, 15, 16, 5],
		[13, 20, 17,  6],
		[12, 19, 18,  7],
		[11, 10, 9,  8],
	]);
}
 
main();