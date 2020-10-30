const u = require('../__common/utils');
 
// Time  
// Space 
const sudoku = a => {
	for (let row = 0; row < 9; row++) {
		for (let col = 0; col < 9; col++) {
			if (a[row][col] == '.') {
				for (let k = 1; k <= 9; k++) {
					if (isValid(a, row, col, k)) {
						a[row][col] = `${k}`;
						u.pl();
						u.pm(a, row, col);
						if (sudoku(a)) {
							return true;
						} else {
							a[row][col] = '.';
						}
					}
				}
				return false;
			}
		}
	}
	return true;
}

const isValid = (board, row, col, k) => {
	for (let i = 0; i < 9; i++) {
		const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
		const n = 3 * Math.floor(col / 3) + i % 3;
		if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
			return false;
		}
	}
	return true;
}
const main = () => {
	u.p(sudoku([
		['.', '9', '.', '.', '4', '2', '1', '3', '6'],
		['.', '.', '.', '9', '6', '.', '4', '8', '5'],
		['.', '.', '.', '5', '8', '1', '.', '.', '.'],
		['.', '.', '4', '.', '.', '.', '.', '.', '.'],
		['5', '1', '7', '2', '.', '.', '9', '.', '.'],
		['6', '.', '2', '.', '.', '.', '3', '7', '.'],
		['1', '.', '.', '8', '.', '4', '.', '2', '.'],
		['7', '.', '6', '.', '.', '.', '8', '1', '.'],
		['3', '.', '.', '.', '9', '.', '.', '.', '.'],
	]));
}
 
main();