const u = require('../../__common/utils');
 
// Time  o(n log n)
// Space o(n)
const findOverlap = a => {
	let points = [];

	for (let i = 0; i < a.length; i++) {
		points.push([a[i][0], 0]);
		points.push([a[i][1], 1]);
	}

	points.sort((a, b) => a[0] - b[0]);

	let count = 0;
	for (let i = 0; i < points.length; i++) {
		count = points[1] ? count + 1 : count - 1;
		if (count > 1) return true;
	}

	return false;
}
 
const main = () => {
	console.log(findOverlap([ [ 5, 7 ], [ 1, 3 ], [ 6, 9 ] ]))
}
 
main();