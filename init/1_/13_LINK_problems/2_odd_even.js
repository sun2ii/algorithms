const u = require('../__common/utils');
const { LinkedList, clink, Node } = require('../00_data_structures/1_linkedList');
 
// Time  o(n)
// Space o(1)
const oddEven = a => {
	u.plink('a', a);
	let even = new LinkedList();
	let odd = new LinkedList();
	
	let current = a.head;

	while (current !== null) {
		if (current.val % 2 === 0) {
			even.append(new Node(current.val));
		} else {
			odd.append(new Node(current.val));
		}

		current = current.next;
	}

	u.plink('even', even);
	u.plink('odd', odd);
	return [even, odd];
}
 
const main = () => {
	oddEven(clink([1, 2, 3, 4, 5]));
}
 
main();