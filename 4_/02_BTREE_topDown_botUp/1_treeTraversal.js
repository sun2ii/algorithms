const u = require('../../__common/utils');
const { BinaryTreeNode } = require('../../__data_structures/0_node');

// Time  o(n)
// Space o(h) height of tree
const binaryTreeTraversal = (root, order) => {
	if (root === null) return null;

	if (order === "pre") {
		console.log('root.value', root.value)
		binaryTreeTraversal(root.left, "pre");
		binaryTreeTraversal(root.right, "pre");
	} else if (order === "in") {
		binaryTreeTraversal(root.left, "in");
		console.log('root.value', root.value)
		binaryTreeTraversal(root.right, "in");
	} else if (order === "post") {
		binaryTreeTraversal(root.left, "post");
		binaryTreeTraversal(root.right, "post");
		console.log('root.value', root.value)
	}
}
 
const main = () => {
	let root = new BinaryTreeNode(4);
	root.left = new BinaryTreeNode(2);
	root.left.left = new BinaryTreeNode(1);
	root.left.right = new BinaryTreeNode(3);
	root.right = new BinaryTreeNode(6);
	root.right.left = new BinaryTreeNode(5);
	root.right.right = new BinaryTreeNode(7);

	binaryTreeTraversal(root, "pre");
	u.pl()
	binaryTreeTraversal(root, "in");
	u.pl()
	binaryTreeTraversal(root, "post");
}
 
main();
