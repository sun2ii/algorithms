const u = require('../../__common/utils');
const { BinaryTreeNode } = require('../../__data_structures/0_node');
 
// Time  o(n)
// Space o(n)
const findHeightIterative = root => {
	if (root === null) return 0;
	const q = [root];
	let depth = 0;
	
	while (q.length) {
		let len = q.length;
		for (let i = 0; i < len; i++) {
			let item = q.shift();
			if (item.left) q.push(item.left);
			if (item.right) q.push(item.right);
		}
		depth++;
	}

	return depth;
}

// Time  o(n)
// Space o(n)
const findHeightRecursive = root => {
	if (root === null) return 0;
	return Math.max(findHeightRecursive(root.left), findHeightRecursive(root.right)) + 1;
}
 
const main = () => {
	let root = new BinaryTreeNode("A");
	root.left = new BinaryTreeNode("B");
	root.left.left = new BinaryTreeNode("D");
	root.left.right = new BinaryTreeNode("E");

	root.right = new BinaryTreeNode("C");
	root.right.right = new BinaryTreeNode("F");
	root.right.right.left = new BinaryTreeNode("G");
	root.right.right.right = new BinaryTreeNode("H");

	console.log(findHeightIterative(root));
	console.log(findHeightRecursive(root));
}
 
main();