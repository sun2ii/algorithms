const u = require('../__common/utils');
const { Stack } = require('./2_stack');

class Queue {
	constructor() {
		this.items = [];
	}

	enqueue(e) {
		this.items.push(e);
	}

	dequeue(){
		if (this.isEmpty()) return;
		return this.items.shift();
	}

	front() {
		if (this.isEmpty()) return;
		return this.items[0];
	}

	isEmpty() {
		return this.items.length === 0;
	}

	print() {
		let str= "";
		for (let i = 0; i < this.items.length; i++) {
			str += a[i] + " ";
		}

		return str;
	}
}

// Time  O(1) - Insertion/Deletion
// Space O(1) - After initial array
class ArrayQueue {
	constructor(size) {
		this.items = new Array(size);
		this.front = 0;
		this.back = 0;
		this.length = 0;
	}

	enqueue(e) {
		const { items, front, back, length } = this;
		if (length === items.length) return 'queue is full';
		items[back] = e;
		back = (back + 1) % items.length;
		length++;
	}

	dequeue() {
		const { items, front, back, length } = this;
		if (length === 0) return 'queue is empty';
		let res = items[front]
		front = (front + 1) % items.length;
		length++;

		return res;
	}

	front() {
		if (length === 0) return 'queue is empty';
		return this.items[this.front];
	}

	isEmpty() {
		return this.length === 0;
	}
}

class Queue2Stacks {
	constructor() {
		this.a = new Stack();
		this.b = new Stack();
	}

	enqueue(e) {
		this.a.push(e);
	}

	dequeue() {
		const { a, b } = this;
		if (b.isEmpty()) {
			while (!a.isEmpty()) {
				b.push(a.pop());
			}
		}

		if (b.isEmpty()) {
			console.error('empty queue');
		}

		return b.pop();
	}

	front() {}


	isEmpty() {
		return this.length === 0;
	}
}

module.exports = {
	Queue2Stacks,
	ArrayQueue,
	Queue
}
