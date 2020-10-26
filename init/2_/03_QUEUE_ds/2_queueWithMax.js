const { QueueWithMax } = require('../../__data_structures/3_queue');

const main = () => {

	// Time  O(1) - Insertion/Deletion/Max Lookup
	// Space O(1) - After initial array
	let q = new QueueWithMax();

	q.enqueue(1)
	q.enqueue(2)
	q.enqueue(5)
	q.enqueue(3)
	q.enqueue(13)
	q.enqueue(4)
	q.dequeue()

	console.log('q', q)
	console.log('q.getMax()', q.getMax())
}

main();

