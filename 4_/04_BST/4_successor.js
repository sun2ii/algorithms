const u = require('../../__common/utils');
const { BinaryTreeNode } = require('../../__data_structures/0_node');
 
// Time  o(n)
// Space o(1)
const findSuccessor = (root, x) => {
	if (x === null) return;
	if (x.right !== null) {
		let current = x.right;
		while (current.left !== null) current = current.left;
	
		return current;
	} else {
		let current = root;
		let successor = null;
		while (current !== null) {
			if (current.value > x.value) {
				successor = current
				current = current.left;
			} else if (current.value < x.value) {
				current = current.right;
			} else if (current === x) break;
		}

		return successor;
	}

}
 
const main = () => {
	let root = new BinaryTreeNode(4);

	root.right = new BinaryTreeNode(6);
	root.left = new BinaryTreeNode(2);

	root.right.left = new BinaryTreeNode(5);

	root.left.left = new BinaryTreeNode(1);
	root.right.right = new BinaryTreeNode(4);

	let search = root.left.left;

	console.log(findSuccessor(root, search));
}
 
main();