const u = require('../../__common/utils');
 
// Time  o(n^2)
// Space o(n)
const longestIncreasingSubstance = a => {
	if (a === null || a.length <= 0) return null;

	let lis = [];
	for (let i = 0; i < a.length; i++) {
		lis.push(1);
		for (let j = 0; j < i; j++) {
			if (a[j] < a[i]) lis[i] = Math.max(lis[i], lis[j] + 1);
		}
	}

	return a.length ? Math.max.apply(null, lis) : 0;
}
 
const main = () => {
	console.log(longestIncreasingSubstance([1, 3, 2, 5, 3, 5, 6]));
}
 
main();