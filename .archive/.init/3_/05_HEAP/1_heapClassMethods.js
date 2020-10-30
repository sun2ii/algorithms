const u = require('../../__common/utils');
const { maxHeap, minHeap } = require('../../__data_structures/6_heap');
 
// Time  o(1) lookup of min/max
// Time  o(log n) insertion/deletion
// Space o(n)
const heap = a => {
	let bigHeap = new maxHeap(10);
	bigHeap.insert(10);
	bigHeap.insert(30);
	bigHeap.insert(20);
	bigHeap.insert(15);
	bigHeap.insert(12);
	bigHeap.insert(34);
	bigHeap.insert(19);
	bigHeap.insert(31);
	bigHeap.insert(21);
	bigHeap.insert(82);
	// console.log('bigHeap', bigHeap)

	let smallHeap = new minHeap(5);
	smallHeap.insert(25);
	// smallHeap.insert(19);
	// smallHeap.insert(60);
	// smallHeap.insert(13);
	// smallHeap.insert(7);
	console.log(smallHeap.remove(25));

	console.log('smallHeap', smallHeap)
	// console.log('bigHeap.getMax()', bigHeap.getMax())
	// console.log('smallHeap.getMin()', smallHeap.getMin())
}
 
const main = () => {
	heap();
}
 
main();