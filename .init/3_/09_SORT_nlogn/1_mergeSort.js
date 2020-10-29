const u = require('../../__common/utils');
 
// Time  o(n log n)
// Space o(n)
const mergeSort = a => {
	if (a === null || a.length <= 0) return null;

	mergeSortHelper(a, 0, a.length - 1);
	return a;
}

const mergeSortHelper = (a, s, e) => {
	if (s >= e) return;

	let m = Math.floor(s + (e - s) / 2);
	mergeSortHelper(a, s, m);
	mergeSortHelper(a, m + 1, e);
	totalMerge(a, s, m, e);
}

const totalMerge = (a, s, m, e) => {
	let result = new Array(e - s + 1);
	let i = s;
	let j = m + 1;
	resultPos = 0;

	while (i <= m && j <= e) {
		if (a[i] < a[j]) 
			result[resultPos++] = a[i++];
		else
			result[resultPos++] = a[j++];
	}

	while (i <= m) {
		result[resultPos++] = a[i++];
	}

	while (j <= e) {
		result[resultPos++] = a[j++];
	}

	for (let k = 0; k < result.length; k++) {
		a[s+k] = result[k]
	}
}
 
const main = () => {
	mergeSort([4, 2, 6, 7, 8, 1, 19]);
}
 
main();