const u = require('../0_common/utils');
 
// Time  o(n) 
// Space o(n^2)
const maze = a => {
	if (a === null || a.length === 0) return false;

	let memo = JSON.parse(JSON.stringify(a));
	for (let i = 0; i < a.length; i++) {
		for (let j = 0; j < a[0].length; j++) {
			memo[i][j] = "not_visited";
		}
	}

	return mazeHelper(a, 0, 0, memo);
}

const mazeHelper = (a, i, j, memo) => {
	if (oob(a, i, j) || a[i][j] === 1) return false;
	if (i === a.length - 1 && j === a[0].length - 1) return true;
	if (memo[i][j] === "no_path" || memo[i][j] === "visiting") return false;

	memo[i][j] = "visiting";
	
	const points = [
		[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]
	]

	for (let point in points) {
		if (mazeHelper(a, points[point][0], points[point][1], memo)) return true;
	}

	memo[i][j] = "no_path";
	return false;
}

const oob = (a, i, j) => i < 0 || i >= a.length || j < 0 || j >= a[0].length;

const main = () => {
	maze([
		[0, 1, 1, 0],
		[0, 0, 0, 0],
		[0, 0, 1, 0],
		[1, 1, 1, 0],
	]);
}
 
main();