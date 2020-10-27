const { linkedListHelper: helper } = require("../../../../__common/utils");
const { arrayToList } = require("../../../../__data_structures/1_linkedList");

// 🕑 O(n)
// 🛰 O(1)
const findCycleLength = a => {
	if (a === null) return;

	let slow = a.head;
	let fast = a.head;
	let count = 1;

	// Check cycle
	while (fast !== null) {
		fast = fast.next;
		if (slow === fast) break;
		if (fast !== null) {
			fast = fast.next;
			if (slow === fast) break;
		}
		slow = slow.next; 
	}

	// Loop through cycle and count
	if (fast === null) return -1; 
	else {
		fast = fast.next;
		while (fast !== slow) {
			fast = fast.next;
			count++;
		}
	}

	return count;
}

const main = () => {
	let input = arrayToList([1, 2, 3, 4, 5, 6, 7], true);
	console.log(findCycleLength(input));
}
 
main();