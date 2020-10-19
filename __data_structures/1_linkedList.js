const u = require('../__common/utils');

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 100;
	}
	get(n) {
		let node = this.head;
		for (let i = 0; i < n - 1; i++) {
			if (node) node = node.next
			else console.error('out of bounds')
		}
		
		return node;
	}

	append(nodeToAdd) {
		if (this.head === null) this.head = nodeToAdd;
		else this.tail.next = nodeToAdd;
		this.tail = nodeToAdd;
	}

	del(nodeToDelete) {
		let node = ll.get(nodeToDelete);
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

	reverse() {
		let curr = this.head;
		let prev = null;
		while (curr !== null) {
			let next = curr.next;
			curr.next = prev;
			prev = curr;
			curr = next;
		}

		return prev;
	}

	print(n) {
		let node = this.head;
		for (let i = 0; i < n - 1; i++) {
			if (node) node = node.next
		}
		if (node === null) return;
		return `${node && node.val} => ${node && node.next && node.next.val}`;
	}
}

class Node {
	constructor(e) {
		this.val = e;
		this.next = null;
	}
}

const appendToList = (original, toAppend) => {
	if (toAppend === null || toAppend && toAppend.head === null) return;

	original.append(toAppend.head);
	original.tail = toAppend.tail;
}

const clink = (a, cycle = false) => {
	let ll = new LinkedList;
	ll.head = ll.tail = new Node(a[0]);
	for (let i = 1; i < a.length; i++) ll.append(new Node(a[i]))

	if (cycle) ll.tail.next = ll.head.next.next;
	return ll;
}


module.exports = {
	LinkedList,
	Node,
	clink,
	appendToList
}