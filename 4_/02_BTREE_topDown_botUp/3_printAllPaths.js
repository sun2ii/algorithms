const u = require('../../__common/utils');
const { BinaryTreeNode } = require('../../__data_structures/0_node');
 
// Time  o(n)
// Space o(h)
const printAllPaths = root => {
	if (root === null) return null;
	printHelper(root, []);
}

const printHelper = (current, path) => {
	if (current === null) return;

	path.push(current.value);

	if (current.left === null && current.right === null) 
		console.log('path', path)

	printHelper(current.left, path)
	printHelper(current.right, path)
	path.pop();
}
 
const main = () => {
	let root = new BinaryTreeNode("A");
	root.left = new BinaryTreeNode("B");
	root.left.left = new BinaryTreeNode("D");

	root.right = new BinaryTreeNode("C");
	root.right.left = new BinaryTreeNode("E");
	root.right.right = new BinaryTreeNode("F");

	printAllPaths(root);
}
 
main();