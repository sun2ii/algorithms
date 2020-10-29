const { Queue2Stacks } = require('../../__data_structures/3_queue');

const main = () => {
	let q = new Queue2Stacks();

	q.enqueue(1);
	q.enqueue(2);
	q.enqueue(3);
	q.enqueue(4);
	q.enqueue(5);

	q.dequeue();
	q.dequeue();

	console.log('q', q)
}

main();