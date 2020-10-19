const u = require('../__common/utils');
const { clink } = require('../00_data_structures/1_linkedList');

// Time  o(n)
// Space o(1)
const isCycle = a => {
	if (a.head == null || a.tail === null) return null;

	let fast = a.head;
	let slow = a.head;

	while (fast !== null) {
		fast = fast.next;
		d(a, fast, slow, 7, "fast1");
		if (fast === slow) return 1;
		if (fast !== null) {
			fast = fast.next;
			if (fast === slow) return 1;
		}

		d(a, fast, slow, 7, "fast2");
		slow = slow.next;

		d(a, fast, slow, 7);
	}

	return 0;
}

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

// Time  o(n)
// Space o(1)
const listCycleBegins = a => {
	if (a.head === null || a.tail === null) return null;

	let slow = a.head;
	let fast = a.head;

	while (fast !== null) {
		fast = fast.next;
		if (fast === slow) break;
		if (fast !== null) {
			fast = fast.next;
			if (fast === slow) break;
		}

		slow = slow.next;
	}

	if (fast === null) return null;

	fast = fast.next;
	let length = 1;

	while (fast !== slow) {
		fast = fast.next;
		length++;
	}

	let x = a.head;
	let y = a.head;

	for (let i = 0; i < length; i++) {
		x = x.next;
	}

	while (x !== y) {
		x = x.next;
		y = y.next;
	}

	return x.val;
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
	// u.p(isCycle(clink([1, 2, 3, 4, 5, 6, 7], "cycle")));
	u.p(cycleLength(clink([1, 2, 3, 4, 5], "cycle")));
	// u.p(nonCycleMedian(clink([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])));
	// u.p(listCycleBegins(clink([1, 2, 3, 4, 5, 6, 7], "cycle")))
}
 
main();
