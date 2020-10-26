const u = require('../../__common/utils');
 
// Time  o(n)
// Space o(1)
const printZigZag = a => {
	let row = 0; 
	let col = 0;
	let up = true;

	if (a.length <= 1 || a[0].length <= 1) {
		console.log('a', a)
		return;
	}

	while (true) {
		console.log('DEF', 'a[row][col]', a[row][col])

		if ((row === 0 || row === a.length - 1) && col !== a[0].length - 1) {
			col++;
			console.log('ROW', 'a[row][col]', a[row][col]);
			up = !up;
		} else if (col === 0 || col === a[0].length - 1) {
			row++;
			console.log('COL', 'a[row][col]', a[row][col]);
			up = !up;
		}

		if (row === a.length - 1 && col === a[0].length - 1) break;

		row = up ? row - 1 : row + 1;
		col = up ? col + 1 : col - 1;
	}
}
 
const main = () => {
	printZigZag([
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[9, 0, 1, 2],
	]);
}
 
main();