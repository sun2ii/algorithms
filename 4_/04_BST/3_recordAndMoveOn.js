const u = require('../../__common/utils');
const { BinaryTreeNode } = require('../../__data_structures/0_node');
 
// Time  o(h)
// Space o(1)
const findFirstOccurrence = (root, x) => {
	let current = root;
	let result = null;

	while (current !== null) {
		if (current.value > x) current = current.left;
		else if (current.value < x) current = current.right;
		else {
			result = current;
			current = current.left;
		}
	}

	console.log('result', result)
	return result;
}
 
const main = () => {
	let root = new BinaryTreeNode(4);
	root.right = new BinaryTreeNode(6);
	root.left = new BinaryTreeNode(2);

	root.right.left = new BinaryTreeNode(5);

	root.left.left = new BinaryTreeNode(1);
	root.right.right = new BinaryTreeNode(4);

	findFirstOccurrence(root, 4);
}
 
main();