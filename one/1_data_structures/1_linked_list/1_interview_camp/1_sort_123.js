const { linkedListHelper: helper } = require('../../../../__common/utils');
const { LinkedListNode: Node } = require('../../../../__data_structures/0_node');
const { LinkedList, appendToList, createListFromArray } = require('../../../../__data_structures/1_linkedList');
 
// 🕑 O(n)
// 🛰 O(1)
const sort123 = a => {
	if (a === null) return new LinkedList();

	let l1 = new LinkedList();
	let l2 = new LinkedList();
	let l3 = new LinkedList();

	let current = a.head;

	while (current !== null) {
		switch (current.value) {
			case 1: l1.append(new Node(current.value)); break;
			case 2: l2.append(new Node(current.value)); break;
			case 3: l3.append(new Node(current.value)); break;
			default: console.error('invalid value'); break;
		}

		current = current.next;
	}

	if (l1.tail !== null) l1.tail.next = null;
	if (l2.tail !== null) l2.tail.next = null;
	if (l3.tail !== null) l3.tail.next = null;

	helper.print(a, 'a');
	helper.print(l1, 'l1');
	helper.print(l2, 'l2');
	helper.print(l3, 'l3');

	let result = new LinkedList();

	appendToList(result, l1);
	appendToList(result, l2);
	appendToList(result, l3);

	helper.print(result, 'result');
	return result;
}
 
const main = () => {
	sort123(createListFromArray([
		1, 3, 1, 2, 1, 3, 2
	]));
}
 
main();