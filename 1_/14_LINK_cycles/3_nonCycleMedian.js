const u = require('../../__common/utils');
const { clink } = require('../../__data_structures/1_linkedList');

// Time  o(n)
// Space o(1)
const nonCycleMedian = a => {
	if (a.head == null || a.tail === null) return null;

	let slow = a.head;
	let fast = a.head;

	while (fast !== null) {
		d(a, fast, slow, 11);
		fast = fast.next;
		if (fast && fast.next !== null) {
			fast = fast.next;
			slow = slow.next;
		}
	}

	return slow.val;
}

const d = (a, fast, slow, len, type) => {
	if (type === "fast1") {
		process.stdout.write('fast1: ');
		console.log(fast.val)
		u.plinktr(a, fast, slow, len);
	} else if (type === "fast2") {
		process.stdout.write('fast2: ');
		console.log(fast.val)
		u.plinktr(a, fast, slow, len);
	} else {
		process.stdout.write('slow: ')
		console.log(slow.val)
		u.plinktr(a, fast, slow, len)
	}
}

const main = () => {
	u.p(nonCycleMedian(clink([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])));
}

main();

