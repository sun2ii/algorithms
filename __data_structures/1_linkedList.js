const { LinkedListNode: Node } = require('./0_node');

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	// 🕑 O(n)
	// 🛰 O(1)
	get(n) {
		if (this.head === null) return;
		let node = this.head;

		for (let i = 0; i < n; i++) {
			if (node !== null) node = node.next;
			else return "out of bounds";
		}

		return node;
	}

	// 🕑 O(1) - tail
	// 🛰 O(1)
	append(node) {
		if (this.head === null) this.head = node;
		else this.tail.next = node;
		this.tail = node;
	}

	// 🕑 O(1) - prev
	// 🛰 O(1)
	removeWithPrev(nodeToDelete, prev) {
		if (nodeToDelete === null) return;
		if (nodeToDelete === this.head) this.head = nodeToDelete.next;
		else if (nodeToDelete === this.tail) this.tail = prev;
		if (prev !== null) prev.next = nodeToDelete.next;
	}

	// 🕑 O(n)
	// 🛰 O(1)
	remove(n) {
		let nodeToDelete = this.get(n - 1);

		if (nodeToDelete === this.tail) {
			let temp = this.head;
			while (temp && temp.next !== this.tail) temp = temp.next;
			temp.next = null;
			this.tail = temp;
		}

		let prev = nodeToDelete
		let node = nodeToDelete.next;
		if (node === null) return;

		prev.value = node.value;

		if (node === this.head) this.head = node.next;
		else if (node === this.tail) this.tail = prev;

		if (prev !== null) prev.next = node.next;
	}
}

const appendToList = (init, toAdd) => {
	if (toAdd.head === null) return;

	init.append(toAdd.head);
	init.tail = toAdd.tail;
}

const arrayToList = (a, cycle = false) => {
	let list = new LinkedList();
	list.length = a.length;
	
	// add the nodes
	list.head = list.tail = new Node(a[0]);
	for (let i = 1; i < a.length; i++)
		list.append(new Node(a[i]))

	// set the tail
	let node = list.head;
	while (node !== null && node.next) node = node.next;
	list.tail = node;

	if (cycle) list.tail.next = list.head;

	return list;
}

module.exports = {
	LinkedList,
	arrayToList,
	appendToList
}