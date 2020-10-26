const u = require('../../__common/utils');
const { LinkedListNode, BinaryTreeNode } = require('../../__data_structures/0_node');
const { LinkedList } = require('../../__data_structures/1_linkedList');
 
// Time  o(n log n)
// Space o(n)
const buildBSTFromList = (head, tail) => {
	if (head === null || tail === null) return null;

	let median = findMedian(head, tail);

	let root = new BinaryTreeNode(median[0].val);
	root.left = buildBSTFromList(head, median[1]);
	root.right = buildBSTFromList(median[0].next, tail);

	return root;
}

const findMedian = (head, tail) => {
	if (head === null || tail === null) return null;
	let fast = head;
	let slow = head;
	let previousSlow = null;

	while (fast !== tail) {
		fast = fast.next
		if (fast !== tail) {
			fast = fast.next;
			previousSlow = slow;
			slow = slow.next;
		}
	}

	// [median, previous]
	return [slow, previousSlow];
}
 
const main = () => {
	let list = new LinkedList();
	for (let i = 1; i <= 5; i++) list.append(new LinkedListNode(i));
	buildBSTFromList(list.head, list.tail);
}
 
main();