const u = require('../__common/utils');
const { LinkedList, clink, Node, appendToList } = require('../00_data_structures/1_linkedList');

// Time  o(n)
// Space o(1)
const sort_123 = a => {
	if (a === null) return new LinkedList();
	u.plink('a', a)

	let l1 = new LinkedList();
	let l2 = new LinkedList();
	let l3 = new LinkedList();

	let current = a.head;
	
	while (current !== null) {
		switch (current.val) {
			case 1: l1.append(new Node(current.val)); break;
			case 2: l2.append(new Node(current.val)); break;
			case 3: l3.append(new Node(current.val)); break;
			default: console.error('Invalid value'); break;
		}
		current = current.next;
	}

	if (l1.tail !== null) l1.tail.next = null;
	if (l2.tail !== null) l2.tail.next = null;
	if (l3.tail !== null) l3.tail.next = null;
	
	u.plink('l1', l1)
	u.plink('l2', l2)
	u.plink('l3', l3)

	let result = new LinkedList();
	appendToList(result, l1);
	appendToList(result, l2);
	appendToList(result, l3);

	u.plink('result', result)
	return result;
}
 
const main = () => {
	sort_123(clink([1, 3, 1, 2, 1, 3, 2]));
}
 
main();