const u = require('../../__common/utils');
const { QueueWithMax } = require('../../__data_structures/3_queue');
 
// Time  o(n)
// Space o(k)
const maxSlidingWindow = (a, k) => {
	if (a === null || a.length <= 0 || k === 0) return null;

	let q = new QueueWithMax();
	let res = [];

	try {
		for (let i = 0; i < k; i++) {
			q.enqueue(a[i]);
		}

		res.push(q.getMax());

		for (let j = k; j < a.length; j++) {
			q.dequeue();
			q.enqueue(a[j]);
			res.push(q.getMax());
		}
	} catch (err) {
		console.error(err)
	}

	console.log('res', res)
	return res;
}
 
const main = () => {
	maxSlidingWindow([4, 6, 5, 2, 4, 7], 3);
}
 
main();