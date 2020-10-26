class LRUCache {
	constructor(capacity) {
		this.capacity = capacity;
		this.count = 0;
		this.head = null;
		this.tail = null;
		this.obj = {};
	}

	get(k) {
		if (this.obj[k]) {
		  const { val, left, right } = this.obj[k];
		  
		  // move node to head since it was most recently used
		  if (left) { left.right = right; }
		  if (right) { right.left = left || right.left; }
	  
		  if (this.tail === this.obj[k]) this.tail = left || this.obj[k];
	  
		  this.obj[k].left = null;
		  
		  if (this.head !== this.obj[k]) {
			  this.obj[k].right = this.head;
			  this.head.left = this.obj[k];
		  }
	  
		  this.head = this.obj[k];
	  
		  return val;
		}
	  
		return -1;
	  };

	put(k, val) {
		if (this.obj[k]) {
			this.obj[k].val = val;
			this.get(k);
		} else {
			this.obj[k] = { k, val, left: null, right: null };
			if (this.head) {
				this.head.left = this.obj[k];
				this.obj[k].right = this.head;
			}
	
			this.head = this.obj[k];
	
			if (!this.tail) {
				this.tail = this.obj[k];
			}
	
			this.count += 1;
		}
		
		if (this.count > this.capacity) {
			let removed = this.tail.k;
	
			if (this.tail.left) {
				this.tail.left.right = null;
				this.tail = this.tail.left;
				this.obj[removed].left = null;
			}
	
			delete this.obj[removed];
			
			this.count -= 1;
		}
	};
}

const main = () => {
	let lru = new LRUCache(5);

	lru.put(1);
	lru.put(2);
	lru.put(3);
	lru.put(4);
	lru.put(5);
	lru.put(6);
	lru.put(1);

	lru.get(3);
	console.log('lru', lru)
}

main();
 