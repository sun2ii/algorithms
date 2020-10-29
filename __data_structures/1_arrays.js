class ArrayBen {
	constructor(data) {
		this.data = data
	}

	// 🕑 O(n)
	// 🛰 O(1)
	display() {
		for (let i = 0; i < this.size; i++) {
			console.log(i, this.data[i]);
		}
	}

	// 🕑 O(1)
	// 🛰 O(1)
	append(num) {
		this.data.push(num);
	}

	// 🕑 O(n)
	// 🛰 O(1)
	insert(num, index) {
		if (index >= 0 && index <= this.data.length) {
			for (let i = this.data.length - 1; i > index; i--) {
				this.data[i] = this.data[i - 1];
			}
			this.data[index] = num;
		}
	}

	// 🕑 O(n)
	// 🛰 O(1)
	delete(index) {
		let x = 0;
		if (index >= 0 && index < this.data.length) {
			x = this.data[index];
			for (let i = index; i < this.data.length; i++) {
				this.data[i] = this.data[i + 1];
			}

			return x;
		}

		return 0;
	}

	// 🕑 O(n)
	// 🛰 O(1)
	linearSearch(key) {
		for (let i = 0; i < this.data.length; i++)
			if (key === this.data[i]) return i;

		return -1;
	}

	// 🕑 O(log n)
	// 🛰 O(1)
	binarySearch(key) {
		let s = 0;
		let e = this.data.length - 1;

		while (s <= e) {
			let m = Math.floor(s + (e - s) / 2);

			if (key === this.data[m]) return m;
			else if (key < this.data[m]) e = m - 1;
			else s = m + 1;
		}

		return -1;
	}

	// 🕑 O(log n)
	// 🛰 O(n)
	binarySearchRecursive(low, high, key) {
		if (low <= high) {
			let mid = Math.floor(low + (high - low) / 2);
	
			if (key === this.data[mid]) return mid;
			else if (key < this.data[mid]) this.binarySearchRecursive(low, mid - 1, key);
			else this.binarySearchRecursive(mid + 1, high, key);
		}

		return -1;
	}

	// 🕑 O(1)
	// 🛰 O(1)
	get(index) {
		if (index >= 0 && index < this.data.length) return this.data[index];

		return -1;
	}

	// 🕑 O(1)
	// 🛰 O(1)
	set(index, value) {
		if (index >= 0 && index < this.data.length) a[index] = value;
	}

	// 🕑 O(n)
	// 🛰 O(1)
	max() {
		let maximum = this.data[0];
		for (let i = 1; i < this.data.length; i++)
			if (this.data[i] > maximum) maximum = this.data[i];

		return maximum;
	}

	// 🕑 O(n)
	// 🛰 O(1)
	min() {
		let minimum = this.data[0];
		for (let i = 1; i < this.data.length; i++)
			if (this.data[i] < minimum) minimum = this.data[i];

		return minimum;
	}

	// 🕑 O(n)
	// 🛰 O(1)
	sum() {
		let total = 0;
		for (let i = 0; i < this.data.length; i++)
			total += this.data[i];

		return total;
	}

	// 🕑 O(n)
	// 🛰 O(n)
	sumRecursive(n = this.data.length) {
		if (n < 0) return 0;
		else return this.sumRecursive(this.data, n - 1) + this.data[n];
	}

	// 🕑 O(n)
	// 🛰 O(1)
	avg() {
		let total = 0;
		for (let i = 0; i < this.data.length; i++)
			total += this.data[i];

		return total / this.data.length;
	}

	// 🕑 O(n)
	// 🛰 O(1)
	reverse() {
		let i = 0;
		let j = this.data.length - 1;
		while (i <= j) {
			[this.data[j], this.data[i]] = [this.data[j], this.data[i]];
			i++;
			j--;
		}
	}

	// 🕑 O(n)
	// 🛰 O(1)
	insertSorted(value) {
		let i = this.data.length - 1;
		while (this.data[i] > value) {
			this.data[i] = this.data[i + 1];
			i--;
		}
		this.data[i + 1] = value;
	}

	// 🕑 O(n)
	// 🛰 O(1)
	isSorted() {
		for (let i = 0; i < this.data.length; i++) if (this.data[i] > this.data[i + 1]) return false;

		return true;
	}

	// 🕑 O(n)
	// 🛰 O(1)
	negativesOnLeftSide() {
		let i = 0;
		let j  = this.data.length - 1;

		while (i < j) {
			while (this.data[i] < 0) i++;
			while (this.data[j] >= 0) j--;
			if (i < j) [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
		}
	}

	// 🕑 O(n)
	// 🛰 O(1)
	merge(arrayB) {
		let i = 0;
		let j = 0;
		let k = 0;
		let result = [];

		while (i < this.data.length && j < arrayB.length) {
			if(this.data[i] < arrayB[j]) 
				result[k++] = this.data[i++];
			else 
				result[k++] = arrayB[j++];
		}

		for (; i < this.data.length; i++) 
			result[k++] = this.data[i];

		for (; j < arrayB.length; j++) 
			result[k++] = arrayB[j];

		this.data = result;
	}

	// a && b
	// 🕑 O(n) - if sorted else O(n^2)
	// 🛰 O(1)
	union(arrayB) {
		let i = 0;
		let j = 0;
		let k = 0;
		let result = [];

		while (i < this.data.length && j < arrayB.length) {
			if(this.data[i] < arrayB[j]) 
				result[k++] = this.data[i++];
			else if (arrayB[j] < this.data[i]) 
				result[k++] = arrayB[j++];
			else {
				result[k++] = this.data[i++];
				j++;
			}
		}

		for (; i < this.data.length; i++) 
			result[k++] = this.data[i];

		for (; j < arrayB.length; j++) 
			result[k++] = arrayB[j];

		this.data = result;
	}

	// a[i] == b[j]
	// 🕑 O(n) - if sorted else O(n^2)
	// 🛰 O(1)
	intersection(arrayB) {
		let i = 0;
		let j = 0;
		let k = 0;
		let result = [];

		while (i < this.data.length && j < arrayB.length) {
			if(this.data[i] < arrayB[j]) 
				i++;
			else if (arrayB[j] < this.data[i]) 
				j++;
			else {
				result[k++] = this.data[i++];
				j++;
			}
		}

		this.data = result;
	}
	
	// a - b
	// 🕑 O(n) - if sorted else O(n^2)
	// 🛰 O(1)
	difference(arrayB) {
		let i = 0;
		let j = 0;
		let k = 0;
		let result = [];

		while (i < this.data.length && j < arrayB.length) {
			if(this.data[i] < arrayB[j]) 
				result[k++] = this.data[i++];
			else if (arrayB[j] < this.data[i]) 
				j++;
			else {
				i++;
				j++;
			}
		}

		for (; i < this.data.length; i++) 
			result[k++] = this.data[i];

		this.data = result;
	}
}

module.exports = {
	ArrayBen
}