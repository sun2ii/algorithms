const u = require('../../__common/utils');
const { BinaryTreeNode } = require('../../__data_structures/0_node');
 
// Time  o()
// Space o()
const rangeQuerying = (root, range) => {}
 
const main = () => {
	let root = new BinaryTreeNode(8);

	root.right = new BinaryTreeNode(10);
	root.left = new BinaryTreeNode(3);

	root.left.right = new BinaryTreeNode(6);
	root.left.left = new BinaryTreeNode(1);

	root.left.right.left = new BinaryTreeNode(4);
	root.left.right.right = new BinaryTreeNode(7);

	root.right.right = new BinaryTreeNode(14);

	root.right.right.left = new BinaryTreeNode(13);

	rangeQuerying(root, [5, 8]);
}
 
main();