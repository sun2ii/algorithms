const u = require('../__common/utils');

class Stack {
	constructor() {
		this.items = [];
	}

	push(e) {
		this.items.push(e);
	}

	pop(){
		if (this.isEmpty()) return;
		return this.items.pop();
	}

	peek() {
		if (this.isEmpty()) return;
		return this.items[this.items.length - 1];
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

class ArrayStack {
	constructor(size) {
		this.a = new Array(size);
		this.x = 0;
		this.y = this.a.length - 1;
	}

	push(stack, e) {
		if (stack !== 1 && stack !== 2) return;
		if (this.x > this.y) console.error('stack overflow');
		if (stack === 1) this.a[this.x++] = e;
		else this.a[this.y--] = e;
	}

	pop(stack) {
		if (stack !== 1 || stack !== 2) return;

		if (stack === 1 && this.x > 0) return this.a[--this.x]
		else if (stack === 2 && this.y < this.a.length - 1) return this.a[++this.y];

		return;
	}
}

class StackWithMax {
	constructor() {
		this.main = new Stack();
		this.max = new Stack();
	}

	push(e) {
		this.main.push(e);
		if (this.max.isEmpty() || e >= this.max.peek()) {
			this.max.push(e);
		}
	}

	getMax() {
		if (this.max.isEmpty()) return;
		return this.max.peek();
	}

	peek() {
		if (this.isEmpty()) return;
		return this[this.length - 1];
	}

	pop() {
		if (this.main.isEmpty()) return;
		let item = this.main.pop();
		if (this.max.peek() === item) this.max.pop();

		return item;
	}

	isEmpty() {
		return this.length === 0;
	}
}

const cstack = (a, type = "reg") => {
	let stack = type === "reg" ? new Stack() : new StackWithMax();
	for (let i = 0; i < a.length; i++) stack.push(a[i])
	return stack;
}

const castack = (a, b) => {
	let stack = new ArrayStack();
	for (let i = 0; i < a.length; i++) stack.push(1, a[i])
	for (let j = 0; j < b.length; j++) stack.push(2, b[j])
	return stack;
}

module.exports = {
	Stack,
	ArrayStack,
	StackWithMax,
	cstack,
	castack,
}