const { ArrayQueue } = require('../../__data_structures/3_queue');

const main = () => {

	// Time  O(1) - Insertion/Deletion
	// Space O(1) - After initial array
	let q = new ArrayQueue(10);

	q.enqueue(1)
	q.enqueue(2)
	q.enqueue(3)
	q.enqueue(4)
	q.enqueue(5)
	q.dequeue();
	q.dequeue();
	q.dequeue();
	console.log('q', q)
	console.log(q.peekFront())
}

main();
