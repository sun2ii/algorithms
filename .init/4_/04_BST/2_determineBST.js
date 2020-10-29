const u = require('../../__common/utils');
const { BinaryTreeNode } = require('../../__data_structures/0_node');
 
// Time  o(n)
// Space o(h)
const isBST = root => {
	if (root === null) return [Number.MAX_VALUE, Number.MIN_VALUE];

	let left = isBST(root.left);
	let right = isBST(root.right);

	if (left === null || right === null) return null;
	if (left[1] > root.value || right[0] < root.value) return null;

	let min = root.left === null ? root.value : left[0];
	let max = root.right === null ? root.value : right[1];

	return [min, max];
}

const main = () => {
	let root = new BinaryTreeNode(4);
	root.right = new BinaryTreeNode(6);
	root.left = new BinaryTreeNode(2);

	root.right.left = new BinaryTreeNode(5);

	root.left.left = new BinaryTreeNode(1);
	root.right.right = new BinaryTreeNode(3);

	console.log(isBST(root));
}
 
main();