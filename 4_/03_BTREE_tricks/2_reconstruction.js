const u = require('../../__common/utils');
const { BinaryTreeNode } = require('../../__data_structures/0_node');
 
// Time  o(n)
// Space o(n)
const reconstruction = (inorder, preorder) => {
	let inOrderMap = convertToMap(inorder);
	return reconstructionHelper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1, inOrderMap);
}

const reconstructionHelper = (preorder, preStart, preEnd, inorder, inStart, inEnd, inOrderMap) => {
	if (preStart > preEnd || inStart > inEnd) return null;

	let rootValue = preorder[preStart];
	let root = new BinaryTreeNode(rootValue);

	let k = inOrderMap[rootValue.toString()];

	root.left = reconstructionHelper(preorder, preStart + 1, preStart + (k - inStart), inorder, inStart, k - 1, inOrderMap);
	root.right = reconstructionHelper(preorder, preStart + (k - inStart) + 1, preEnd, inorder, k + 1, inEnd, inOrderMap);

	return root;
}

const convertToMap = inorder => {
	let map = {};
	for (let i = 0; i < inorder.length; i++) {
		map[inorder[i]] = i;
	}

	return map;
}
 
const main = () => {
	console.log(reconstruction([4, 2, 1, 3, 6, 5, 6], [1, 2, 3, 4, 5, 6]));
}
 
main();