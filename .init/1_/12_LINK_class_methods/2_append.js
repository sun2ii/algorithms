const u = require('../../__common/utils');
const { clink, Node } = require('../../__data_structures/1_linkedList');
 
// Time  o(n)
// Space o(1)
const append = (ll, n) => {
	let node = new Node(n);
	if (!ll.head) ll.head = node;
	else ll.tail.next = node;
	ll.tail = node;
}
 
const main = () => {
	let ll = clink([1, 2, 3,  4, 5, 6]);
	u.p(append(ll, 7));
	u.plink('ll', ll);
}
 
main();