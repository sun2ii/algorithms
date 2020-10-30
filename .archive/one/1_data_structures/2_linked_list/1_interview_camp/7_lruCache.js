const { LRUCache } = require('../../../../__data_structures/9_lruCache');
// 🕑 O()
// 🛰 O()
 
const main = () => {
	let lru = new LRUCache(3);

	lru.put(1, 1)
	lru.put(2, 2)
	lru.put(3, 3)
	// lru.put(4, 4)
	// lru.put(5, 5)

	console.log(lru.get(3))
	console.log('lru', lru)
	
}
 
main();