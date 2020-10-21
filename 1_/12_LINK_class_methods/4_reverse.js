const u = require('../../__common/utils');
const { clink, Node, LinkedList } = require('../../__data_structures/1_linkedList');
 
// Time  o(n)
// Space o(1)
const reverse = (ll) => {
	let list = new LinkedList();
	let current = ll.head;
	let prev = null;

	//ncnpc 
	while (current !== null) {
		let next = current.next;
		current.next = prev;
		prev = current;
		current = next;
	}

	list.head = prev;

	return list;
}
 
const main = () => {
	let ll = clink([1, 2, 3, 4, 5, 6]);
	u.plink('ll', ll);
	ll = reverse(ll);
	u.plink('ll', ll);
}
 
main();