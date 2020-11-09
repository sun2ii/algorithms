const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(n^2)
const maze = a => {
	let memo = JSON.parse(JSON.stringify(a));
	for (let i = 0; i < a.length; i++) {
		for (let j = 0; j < a[0].length; j++) {
			memo[i][j] = "not_visited";
		}
	}

	return mazeHelper(a, memo, 0, 0);
}

const mazeHelper = (a, memo, x, y) => {
	if (oob(a, x, y) || a[x][y] === 1) {
		utils.baseCase('hit a wall ' + x + y)
		return false;
	}

	if (x === a.length - 1 && y === a[0].length - 1) {
		utils.baseCase('finished! ' + x + y)
		return true;
	}

	if (memo[x][y] === "visiting" || memo[x][y] === "no_path") {
		utils.baseCase('path been visited ' + x + y)
		return false;
	}

	const directions = [
		// up, down, right, left
		[x, y + 1], [x, y - 1], [x + 1, y], [x - 1, y]
	]

	memo[x][y] = "visiting";
	
	for (let k = 0; k < directions.length; k++) {
		utils.recursiveStep(true, '', [memo[x][y], directions[k][0], directions[k][1]]);
		if (mazeHelper(a, memo, directions[k][0], directions[k][1])) return true;
		utils.recursiveStep(false, '', [memo[x][y], directions[k][0], directions[k][1]]);
	}

	memo[x][y] = "no_path";
	return false;
}

const oob = (a, i, j) => i < 0 || i >= a.length || j < 0 || j >= a[0].length;
 
const main = () => {
	log(maze([
		[0, 1, 1, 0],
		[0, 0, 0, 0],
		[0, 0, 1, 0],
		[1, 1, 1, 0],
	]));
}
 
main();
