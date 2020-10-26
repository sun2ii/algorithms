const u = require('../../__common/utils');
 
// Time  o(n log n)
// Space o(n)
const drawSkyline = a => {
	console.log('a', a)
}
 
const main = () => {
	// x,h,y
	drawSkyline([ [2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8] ]);
}
 
main();