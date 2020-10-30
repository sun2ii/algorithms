const u = require('../../__common/utils');
const { clink } = require('../../__data_structures/1_linkedList');
 
// Time  o(n)
// Space o(1)
const isListPalindrome = a => {
	let median = findMedian(a);
	let last = reverse(median);

	let start = a.head;
	let end = last;

	while (start !== null && end !== null) {
		u.plinktr(a, start, end)
		if (start.val !== end.val) return false;

		start = start.next;
		end = end.next;
	}

	return true;
}

const reverse = (node) => {
	let prev = null;

	while (node !== null) {
		let next = node.next;
		node.next = prev;
		prev = node;
		node = next;
	}

	return prev;
}

const findMedian = a => {
	let fast = a.head;
	let slow = a.head;
	while (fast !== null) {
		fast = fast.next;
		if (fast === null) break;

		fast = fast.next;
		slow = slow.next;
	}

	return slow;
}
 
const main = () => {
	console.log(isListPalindrome(clink(['A', 'B', 'C', 'B', 'A'])));
	console.log(isListPalindrome(clink(['A', 'B', 'C', 'B', 'D'])));
}
 
main();