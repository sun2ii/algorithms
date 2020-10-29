// 🕑 O(1) - read/write
// 🛰 O(n) - obj
class LRUCache {
	constructor(len) {
		this.capacity = len;
		this.count = 0;
		this.head = null;
		this.tail = null;
		this.obj = {};
	}

	get(index) {
		// if value exists inside of the hash map
		if (this.obj[index]) {
			// destructure values from obj[index]
			const { value, left, right } = this.obj[index];

			// 
			if (left) left.right = right;
			if (right) right.left = left || right.left;

			if (this.tail === this.obj[index]) this.tail = left || this.obj[index];

			// set 
			this.obj[index].left = null;

			if (this.head !== this.obj[index]) {
				this.obj[index].right = this.head;
				this.head.left = this.obj[index];
			}

			// set the head to be this.obj[index]
			this.head = this.obj[index];

			return value;
		}

		// return -1 if it doesn't exist
		return -1;
	}

	put(index, value) {
		if (this.obj[index]) {
			this.obj[index].value = value;
			this.get(index);
		} else {
			this.obj[index] = { index, value, left: null, right: null };
			if (this.head) {
				this.head.left = this.obj[index];
				this.obj[index].right = this.head;
			}

			this.head = this.obj[index];

			if (!this.tail) this.tail = this.obj[index];

			this.count++;
		}

		if (this.count > this.capacity) {
			let removed = this.tail.index;
			if (this.tail.left) {
				this.tail.right = null;
				this.tail = this.tail.left;
				this.obj[removed].left = null;
			}

			delete this.obj[removed];

			this.count--;
		}
	}
}

module.exports = {
	LRUCache
}

