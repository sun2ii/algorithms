const u = require('../__common/utils');
const { Stack } = require('./2_stack');

// Push - Enqueue
// Shift - Dequeue
class Queue {
	constructor() {
		this.items = [];
	}

	enqueue(e) {
		this.items.push(e);
	}

	dequeue() {
		if (this.isEmpty()) return;
		return this.items.shift();
	}

	peekFront() {
		if (this.isEmpty()) return;
		return this.items[0];
	}

	peekBack() {
		if (this.isEmpty()) return;
		return this.items[this.items.length - 1];
	}

	isEmpty() {
		return this.items.length === 0;
	}

	removeLast() {
		if (this.isEmpty()) return;
		return this.items.pop();
	}

	print() {
		let str= "";
		for (let i = 0; i < this.items.length; i++) {
			str += a[i] + " ";
		}

		return str;
	}
}

class ArrayQueue {
	constructor(size) {
		this.items = new Array(size);
		this.front = 0;
		this.back = 0;
		this.length = 0;
	}

	enqueue(e) {
		if (this.length === this.items.length) return 'queue is full';
		this.items[this.back] = e;
		this.back = (this.back + 1) % this.items.length;
		this.length++;
	}

	dequeue() {
		if (this.length === 0) return 'queue is empty';
		let res = this.items[this.front]
		this.front = (this.front + 1) % this.items.length;
		this.length--;

		return res;
	}

	peekFront() {
		if (this.length === 0) return 'queue is empty';
		return this.items[this.front];
	}

	peekBack() {
		if (this.length === 0) return 'queue is empty';
		return this.items[this.back];
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
		if (this.b.isEmpty()) {
			while (!this.a.isEmpty()) {
				this.b.push(this.a.pop());
			}
		}

		if (this.b.isEmpty()) {
			console.error('empty queue');
		}

		return this.b.pop();
	}

	peekFront() {
		return this.b.pop();
	}

	isEmpty() {
		return this.length === 0;
	}
}

class QueueWithMax {
	constructor() {
		this.main = new Queue();
		this.max = new Queue();
	}

	enqueue(e) {
		this.main.enqueue(e);
		while (!this.max.isEmpty() && this.max.peekBack() < e) this.max.removeLast();
		this.max.enqueue(e);
	}

	dequeue() {
		if (this.main.isEmpty()) return 'queue is empty';
		let item = this.main.dequeue();
		if (this.max.peekFront() === item) this.max.dequeue();
	}

	getMax() {
		if (this.max.isEmpty()) return 'queue is empty';
		return this.max.peekFront();
	}

	peekFront() {
		if (this.isEmpty()) return;
		return this[0];
	}

	peekBack() {
		if (this.isEmpty()) return;
		return this[this.length - 1];
	}

	isEmpty() {
		return this.length === 0;
	}
}

module.exports = {
	Queue,
	ArrayQueue,
	Queue2Stacks,
	QueueWithMax
}
