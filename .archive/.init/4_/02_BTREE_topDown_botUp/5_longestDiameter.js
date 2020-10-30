const u = require('../../__common/utils');
const { BinaryTreeNode } = require('../../__data_structures/0_node');
 
// Time  o(n)
// Space o(h)
const longestDiameter = root => {
	return longestDiameterHelper(root);
}

// [height, longestPath]
longestDiameterHelper = start => {
	if (start === null) return;

	let leftResult = longestDiameterHelper(start.left);

	if (leftResult === null) leftResult = [0, 0];

	let rightResult = longestDiameterHelper(start.right);

	if (rightResult === null) rightResult = [0, 0];

	let longestPathOnThisNode = leftResult[0] + rightResult[0] + 1;
	let longestPathThisSubtree = Math.max(longestPathThisSubtree, longestPathOnThisNode);

	let height = Math.max(rightResult[0], leftResult[0]) + 1;

	return [height, longestPathThisSubtree]

}
 
const main = () => {
	let root = new BinaryTreeNode("A");
	root.left = new BinaryTreeNode("B");
	root.right = new BinaryTreeNode("C");
	root.left.left = new BinaryTreeNode("G");
	root.right.left = new BinaryTreeNode("E");
	root.right.right = new BinaryTreeNode("F");
	root.right.left.left = new BinaryTreeNode("H");

	longestDiameter(root);
}
 
main();