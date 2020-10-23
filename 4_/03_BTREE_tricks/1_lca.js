const u = require('../../__common/utils');
const { BinaryTreeNode } = require('../../__data_structures/0_node');
 
// Time  o(h)
// Space o(1)
const lca = (root, a, b) => {
	if (root === null) return null;
	if (a <= 0 || b <= 0) return null;

	if (root.value === a || root.value === b) return root.value;

	let leftLCA = lca(root.left, a, b);
	let rightLCA = lca(root.right, a, b);

	if (leftLCA !== null && rightLCA !== null) return root.value;

	return leftLCA !== null ? leftLCA : rightLCA;
}

const main = () => {
	let root = new BinaryTreeNode(4);

	root.right = new BinaryTreeNode(6);
	root.left = new BinaryTreeNode(2);

	root.left.left = new BinaryTreeNode(1);
	root.left.right = new BinaryTreeNode(3);

	root.right.left = new BinaryTreeNode(5);
	root.right.right = new BinaryTreeNode(7);
	root.right.right.right = new BinaryTreeNode(8);

	console.log(lca(root, 5, 8));
}
 
main();