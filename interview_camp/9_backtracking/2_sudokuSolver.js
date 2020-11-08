const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const sudokuSolver = a => {
	for (let i = 0; i < a.length; i++) {
		for (let j = 0; j < a[0].length; j++) {
			if (a[i][j] === '.') {
				chars.forEach(c => {
					if (isValid(a, i, j, c)) {
						a[i][j] = c;

						if (sudokuSolver(a)) return true;
						else a[i][j] = '.';
					}
				})

				return false;
			}
		}
	}
	return true;
}

const isValid = (a, row, col, c) => {
	// check row, column, and 3x3 block
	for (let i = 0; i < 9; i++) {
		if (a[row][i] !== '.' && a[row][i] === c) return false;
		if (a[3 * (row / 3) + i / 3][3 * (col / 3) + i % 3] !== '.' &&
			a[3 * (row / 3) + i / 3][3 * col / 3 + i % 3] === c) return false;
	}

	return true;
}

let chars = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
 
const main = () => {
	log(sudokuSolver([
		[
			["5","3",".",".","7",".",".",".","."],
			["6",".",".","1","9","5",".",".","."],
			[".","9","8",".",".",".",".","6","."],
			["8",".",".",".","6",".",".",".","3"],
			["4",".",".","8",".","3",".",".","1"],
			["7",".",".",".","2",".",".",".","6"],
			[".","6",".",".",".",".","2","8","."],
			[".",".",".","4","1","9",".",".","5"],
			[".",".",".",".","8",".",".","7","9"]
		]
	]));
}
 
main();
