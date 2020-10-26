const u = require('../../__common/utils');
const { clink } = require('../../__data_structures/1_linkedList');
 
// Time  o(n)
// Space o(1)
const findMedian = ll => {
	let fast = ll.head;
	let slow = ll.head;
	while (fast !== null) {
		fast = fast.next;
		if (fast === null) break;

		fast = fast.next;
		slow = slow.next;
	}

	u.plinktr(ll, slow)
	return slow.val;
}

const main = () => {
	let ll = clink([1, 2, 3,  4, 5, 6]);
	console.log('findMedian(ll)', findMedian(ll))
}
 
main();
