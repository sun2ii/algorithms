const u = require('../../__common/utils');
const _heap = require('../../__data_structures/6_heap');
const { minHeap, maxHeap } = require('../../__data_structures/6_heap');
 
// Time  o(n log k)
// Space o(k)
const findSmallestK = (a, k) => {
	if (k > a.length) return;

	let smallHeap = new minHeap(k);

	for (let i = 0; i < a.length; i++) {
		if (i < k) smallHeap.insert(a[i]);
		else if (a[i] < smallHeap.peekFront()) {
			smallHeap.remove(a[i]);
			// smallHeap.insert(a[i]);
		}
	}

	console.log('smallHeap', smallHeap)

	return smallHeap;
}

const main = () => {
	findSmallestK([4, 8, 1, 6, 82, 7, 3, 2], 4);
	// findLargestK([4, 8, 1, 6, 82, 7, 3, 2], 4);
}
 
main();