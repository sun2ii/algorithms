const u = require('../../__common/utils');
const { clink, Node } = require('../../__data_structures/1_linkedList');
 
// Time  o(1)
// Space o(1)
const del = (ll, n) => {
	let node = ll.get(n);
	let next = node.next;
	if (next === null) return;

	node.val = next.val;

	const deletePrev = (ll, n, prev) => {
		if (n === null) return;
		if (n === ll.head) ll.head = n.next;
		if (n === ll.tail) ll.tail = prev;
		if (prev !== null) prev.next = n.next;
	}

	deletePrev(ll, next, node);
}
 
const main = () => {
	let ll = clink([1, 2, 3,  4, 5, 6]);
	u.p(del(ll, 4));
	u.plink('ll', ll);
}
 
main();