const { linkedListHelper: helper } = require("../../../../__common/utils");
const { arrayToList } = require("../../../../__data_structures/1_linkedList");

// 🕑 O(n)
// 🛰 O(1)
const isCycle = a => {
	let slow = a.head;
	let fast = a.head;

	let ptrFast = 0;
	let ptrSlow = 0;

	while (fast !== null) {
		fast = fast.next;
		ptrFast++; debug(a, ptrSlow, ptrFast, slow, fast)
		if (slow === fast) return true;
		if (fast !== null) {
			fast = fast.next; 
			ptrFast++; debug(a, ptrSlow, ptrFast, slow, fast)
			if (slow === fast) return true;
		}
		slow = slow.next; ptrSlow++;
	}

	return false;
}

let debug = (a, ptrSlow, ptrFast, slow, fast) => {
	console.log('slow, fast', slow.value, fast.value); helper.pointers(a, ptrSlow % a.length, ptrFast % a.length);
}
 
const main = () => {
	let input = arrayToList([1, 2, 3, 4, 5, 6], true)
	console.log(isCycle(input));
}
 
main();
