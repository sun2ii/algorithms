const u = require('../../__common/utils');
 
// Time  o(n log n)
// Space o(1)
const quickSort = a => {
	if (a === null || a.length <= 0) return null;

	quickSortHelper(a, 0, a.length - 1);

	console.log('a', a)
	return a;
}

const quickSortHelper = (a, s, e) => {
	if (s < 0 || e >= a.length || s >= e) return;

	let pivot = Math.floor((Math.random() * a.length - 1));
	let points = dutchNationalFlag(a, s, e, pivot);
	quickSortHelper(a, s, points[0]);
	quickSortHelper(a, points[1], e);
}

const dutchNationalFlag = (a, s, e, p) => {
	let pivot = a[p];
	let low = s - 1;
	let mid = s - 1;
	let high = e + 1;

	while (mid + 1 < high) {
		if (a[mid + 1] > pivot) {
			u.swap(a, high - 1, mid + 1);
			high--;
		} else if (a[mid + 1] === pivot) {
			mid++;
		} else {
			u.swap(a, mid + 1, low + 1);
			mid++;
			low++;
		}
	}

	return [low, high];
}
 
const main = () => {
	quickSort([4, 2, 6, 7, 8, 1, 19]);
}
 
main();