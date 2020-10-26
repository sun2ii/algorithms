const { linkedListHelper: helper } = require("../../../../__common/utils");
const { arrayToList } = require("../../../../__data_structures/1_linkedList");

// 🕑 O(n)
// 🛰 O(1)
const isCycle = a => {
	let slow = a.head;
	let fast = a.head;

	helper.print(a);
	let ptrFast = 0;
	let ptrSlow = 0;

	while (fast !== null) {
		fast = fast.next;
		if (slow === fast) return true;
		if (fast !== null) {
			ptrFast++;
			fast = fast.next;
			if (slow === fast) return true;
		}
		slow = slow.next;
		ptrSlow++;
	}

	return false;
}
 
const main = () => {
	let input = arrayToList([1, 2, 3, 4, 5, 6], true)
	console.log(isCycle(input));
}
 
main();