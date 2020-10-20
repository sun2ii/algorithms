const u = require('../../__common/utils');
 
// Time  o()
// Space o()
const slidingWindowTime = (a, k) => {
	if (a === null || a.length <= 0 || k === 0) return null;

	let q = [];
	let max = a[0][0];
	let sum = 0;

	// max and sum
	for (let i = 1; i < a.length; i++) {
		let price = a[i][0];
		let day = a[i][1];

		if (day - a[i - 1][1]) {
			let last = q.shift();
			sum -= last;
		}

		if (day - a[i - 1][1] <= k) q.push(a[i]);

	}
}

// start with max as 0th value
// loop through queue
	// if currentDay - earliestDayInQueue is less than k 
		// add a[i] to queue
		// sum += a[i]
	// else if currentDay - earliestDayInQueue is greater than k
		// add a[i] to queue
		// keep doing below until currentDay - earliestDayInQueue is less than K
			// shift queue to delete earliest day
			// sum -= q.shift()
	// if sum > max: max = sum
// return max

const main = () => {
	slidingWindowTime([[1, 2], [4, 4], [3, 7], [2, 9], [5, 11]], 3);
}
 
main();