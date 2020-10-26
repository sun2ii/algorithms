const u = require('../../__common/utils');
 
// Time  o(n)
// Space o(1)
const maxDiff = a => {
	if (a === null || a.length <= 0) return null;

	let minSoFar = Number.MAX_VALUE;
	let maxTrade = 0;

	for (let i = 0; i < a.length; i++) {
		minSoFar = Math.min(minSoFar, a[i]);
		maxTrade = Math.max(a[i] - minSoFar, maxTrade);
	}

	console.log('maxTrade', maxTrade);
	return maxTrade;
}
 
const main = () => {
	maxDiff([9, 3, 2, 1, 5, 7, 2, 8, 3, 4]);
}
 
main();