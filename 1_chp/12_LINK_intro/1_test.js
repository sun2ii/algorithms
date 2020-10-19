const u = require('../../__common/utils');
const { clink, Node, LinkedList } = require('../../__data_structures/1_linkedList');

const test = () => {
	// Time  o(n)
	// Space o(1)
	const get = (ll, n) => {
		let node = ll.head;
		for (let i = 0; i < n - 1; i++) {
			if (node) node = node.next
			else console.error('out of bounds')
		}
		
		return node.val;
	}

	// Time  o(n)
	// Space o(1)
	const append = (ll, n) => {
		let node = new Node(n);
		if (!ll.head) ll.head = node;
		else ll.tail.next = node;
		ll.tail = node;
	}

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


	let ll = clink([1, 2, 3,  4, 5, 6]);
	u.p(get(ll, 3));
	u.p(append(ll, 4));
	u.p(del(ll, 1));
	u.plink('ll', ll);
	ll = reverse(ll);
	u.plink('ll', ll);
}

test();

