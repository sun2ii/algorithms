const u = require('../../__common/utils');
const { clink } = require('../../__data_structures/1_linkedList');

// Time  o(n)
// Space o(1)
const cycleLength = a => {
	if (a.head == null || a.tail === null) return null;

	let fast = a.head;
	let slow = a.head;

	while (fast !== null) {
		fast = fast.next;
		if (fast === slow) break;
		if (fast !== null) {
			fast = fast.next;
			if (fast === slow) break;
		}

		slow = slow.next;
	}

	if (fast === null) return -1;

	fast = fast.next;
	let length = 1;
	while (fast !== slow) {
		fast = fast.next;
		length++;
	}

	return length;
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
	u.p(cycleLength(clink([1, 2, 3, 4, 5], "cycle")));
}

main();
