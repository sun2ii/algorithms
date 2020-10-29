const u = require('../../__common/utils');
const { BinaryTreeNode } = require('../../__data_structures/0_node');
 
// Time  o(n)
// Space o(h)
const isBalanced = root => isBalancedHelper(root) !== -1;

const isBalancedHelper = node => {
	if (node === null) return 0;

	let leftHeight = isBalancedHelper(node.left);
	let rightHeight = isBalancedHelper(node.right);

	if (leftHeight === -1 || rightHeight === -1) return -1;
	if (Math.abs(leftHeight - rightHeight ) > 1) return -1;

	return 1 + Math.max(leftHeight, rightHeight);
}
 
const main = () => {
	let root = new BinaryTreeNode("A");
	root.left = new BinaryTreeNode("B");
	root.left.left = new BinaryTreeNode("D");

	root.right = new BinaryTreeNode("C");
	root.right.left = new BinaryTreeNode("E");
	root.right.right = new BinaryTreeNode("F");
	root.right.right.right = new BinaryTreeNode("Z");
	root.right.right.right.right = new BinaryTreeNode("Z");

	console.log(isBalanced(root));
}
 
main();