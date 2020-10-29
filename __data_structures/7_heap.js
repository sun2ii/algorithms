
const u = require("../__common/utils");

class maxHeap {
	constructor(capacity) {
		this.heap = new Array(capacity);
		this.size = 0;
	}

	parent(i) {
		return Math.floor((i - 1) / 2);
	}

	left(i) {
		return 2 * i + 1;
	}

	right(i) {
		return 2 * i + 2;
	}

	isValid(i) {
		return i >= 0 && i < this.size
	}

	getMax() {
		if (this.size === 0) return;
		return this.heap[0];
	}

	removeMax() {
		if (this.size === 0) return;

		u.swap(this.heap, 0, this.size - 1);
		this.size--;

		this.heapify(0);
	}

	peekFront() {
		return this.heap[0];
	}

	peekBack() {
		return this.heap[this.heap.length - 1];
	}

	insert(item) {
		if (this.size >= this.heap.length) return;
		let itemIndex = this.size;
		this.heap[this.size++] = item;
		this.bubbleUp(itemIndex);
	}

	bubbleUp(i) {
		let parent = this.parent(i);
		while (i > 0 && this.heap[parent] < this.heap[i]) {
			u.swap(this.heap, parent, i);
			i = parent;
			parent = this.parent(i)
		}
	}

	remove(i) {
		if (!this.isValid(i)) return;

		u.swap(this.heap, i, this.size - 1);
		this.size--;

		if (i !== 0 && this.heap[this.parent(i)] < this.heap[i]) 
			this.bubbleUp(i);
		else 
			this.heapify(i)
	}

	heapify(i) {
		if (!this.isValid(i)) return;

		let left = this.isValid(this.left(i)) ? this.heap[this.left(i)] : Number.MIN_VALUE;
		let right = this.isValid(this.right(i)) ? this.heap[this.right(i)] : Number.MIN_VALUE;

		let max = Math.max(Math.max(left, right), this.heap[i]);

		let maxIndex = i;
		if (max === left) maxIndex = this.left(i);
		else if (max === right) maxIndex = this.right(i);

		if (maxIndex !== i) {
			u.swap(this.heap, i, maxIndex);
			this.heapify(maxIndex);
		}
	}
}

class minHeap {
	constructor(capacity) {
		this.heap = new Array(capacity);
		this.size = 0;
	}

	parent(i) {
		return Math.floor((i - 1) / 2);
	}

	left(i) {
		return 2 * i + 1;
	}

	right(i) {
		return 2 * i + 2;
	}

	isValid(i) {
		return i >= 0 && i < this.size
	}

	getMin() {
		if (this.size === 0) return;
		return this.heap[0];
	}

	removeMin() {
		if (this.size === 0) return;

		u.swap(this.heap, 0, this.size - 1);
		this.size--;

		this.heapify(0);
	}

	peekFront() {
		return this.heap[0];
	}

	peekBack() {
		return this.heap[this.heap.length - 1];
	}

	insert(item) {
		if (this.size >= this.heap.length) return;
		let itemIndex = this.size;
		this.heap[this.size++] = item;
		this.bubbleUp(itemIndex);
	}

	bubbleUp(i) {
		let parent = this.parent(i);
		while (i > 0 && this.heap[parent] > this.heap[i]) {
			u.swap(this.heap, parent, i);
			i = parent;
			parent = this.parent(i)
		}
	}

	remove(i) {
		if (!this.isValid(i)) return;
		
		u.swap(this.heap, i, this.size - 1);
		this.size--;

		if (i !== 0 && this.heap[this.parent(i)] > this.heap[i]) 
			this.bubbleUp(i);
		else 
			this.heapify(i)
	}

	heapify(i) {
		if (!this.isValid(i)) return;

		let left = this.isValid(this.left(i)) ? this.heap[this.left(i)] : Number.MIN_VALUE;
		let right = this.isValid(this.right(i)) ? this.heap[this.right(i)] : Number.MIN_VALUE;

		let min = Math.min(Math.min(left, right), this.heap[i]);

		let minIndex = i;
		if (min === left) minIndex = this.left(i);
		else if (min === right) minIndex = this.right(i);

		if (minIndex !== i) {
			u.swap(this.heap, i, minIndex);
			this.heapify(minIndex);
		}
	}
}

module.exports = {
	maxHeap,
	minHeap
}