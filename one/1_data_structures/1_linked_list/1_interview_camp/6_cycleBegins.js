const { arrayToList } = require("../../../../__data_structures/1_linkedList");

// 🕑 O(n)
// 🛰 O(1)
const cycleBegins = a => {
	let slow = a.head;
	let fast = a.head;

	while (fast !== null) {
		fast = fast.next;
		if (fast === slow) break;
		if (fast !== null) 
			fast = fast.next;

		slow = slow.next;
	}

	let len = 1;

	if (fast === null) return -1;
	else {
		fast = fast.next;
		while (fast !== slow) {
			fast = fast.next;
			len++;
		}
	}

	let one = a.head;
	let two = a.head;

	for (let i = 0; i < len; i++) {
		one = one.next;
	}

	while (one !== two) {
		one = one.next;
		two = two.next;
	}

	return one;
}
 
const main = () => {
	let input = arrayToList([2, 3, 4, 5, 1], true)
	cycleBegins(input);
}
 
main();