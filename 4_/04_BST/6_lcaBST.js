const u = require('../../__common/utils');
const { BinaryTreeNode } = require('../../__data_structures/0_node');
 
// Time  o(h)
// Space o(1)
const lcaBST = (root, a, b) => {
	let current = root;
	while (current !== null) {
		if (current.value < a.value && current.value < b.value)
			current = current.right;
		else if (current.value > a.value && current.value > b.value)
			current = current.left;
		else 
			return current;
	}

	return null;
}
 
const main = () => {
	let root = new BinaryTreeNode(4);

	root.right = new BinaryTreeNode(6);
	root.left = new BinaryTreeNode(2);

	root.right.left = new BinaryTreeNode(5);

	root.left.left = new BinaryTreeNode(1);
	root.right.right = new BinaryTreeNode(7);


	let a = root.right.left;
	let b = root.right.right;

	console.log(lcaBST(root, a, b));
}
 
main();