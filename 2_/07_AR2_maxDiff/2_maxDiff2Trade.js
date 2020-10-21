const u = require('../../__common/utils');
 
// Time  o(n)
// Space o(n)
const maxDiff2 = a => {
	if (a === null || a.length <= 0) return null;
	
	let bestTill = Array(a.length).fill(0);
	let minSoFar = Number.MAX_VALUE;
	let maxDiff = 0;

	for (let i = 0; i < a.length; i++) {
		minSoFar = Math.min(a[i], minSoFar);
		maxDiff = Math.max(a[i] - minSoFar, maxDiff);
		bestTill[i] = maxDiff;
	}

	let bestFrom = Array(a.length).fill(0);
	let maxSoFar = Number.MIN_VALUE;
	maxDiff = 0;

	for (let i = a.length - 1; i >= 0; i--) {
		maxSoFar = Math.max(maxSoFar, a[i]);
		maxDiff = Math.max(maxDiff, maxSoFar - a[i]);
		bestFrom[i] = maxDiff;
	}

	let maxTwoTrades = 0;

	for (let i = 0; i < a.length; i++) {
		let maxSecondTrade = (i + 1 < a.length) ? bestFrom[i + 1] : 0;
		maxTwoTrades = Math.max(maxTwoTrades, bestTill[i] + maxSecondTrade);
	}

	console.log('maxTwoTrades', maxTwoTrades)
	return maxTwoTrades;
}
 
const main = () => {
	maxDiff2([3,3,5,0,0,3,1,4]);
}
 
main();