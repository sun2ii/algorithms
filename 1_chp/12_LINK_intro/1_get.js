const u = require('../../__common/utils');
 
// Time  o(n)
// Space o(1)
const get = (ll, n) => {
	let node = ll.head;
	for (let i = 0; i < n - 1; i++) {
		if (node) node = node.next
		else console.error('out of bounds')
	}
	
	return node.val;
}
 
const main = () => {
	get();
}
 
main();