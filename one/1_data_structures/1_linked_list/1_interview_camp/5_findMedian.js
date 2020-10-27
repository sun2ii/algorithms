const { arrayToList } = require("../../../../__data_structures/1_linkedList");

// 🕑 O(n)
// 🛰 O(1)
const findMedian = a => {
	let fast = a.head;
	let slow = a.head;
	
	while (fast !== null) {
		fast = fast.next;
		if (fast !== null)  {
			fast = fast.next;
			slow = slow.next;
		}
	}

	return slow.value;
}
 
const main = () => {
	let input = arrayToList([1, 2, 3, 4, 5, 6,  7, 8, 9])
	console.log(findMedian(input));
}
 
main();