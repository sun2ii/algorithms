const u = require('../../__common/utils');
const { BinaryTreeNode } = require('../../__data_structures/0_node');
 
// Time  o(n)
// Space o(n)
const buildBSTFromArray = (a, s, e) => {
	if (s > e || oob(a, s) || oob(a, e)) return null;

	let m = Math.floor(s + (e - s) / 2);
	let root = new BinaryTreeNode(a[m]);
	root.left = buildBSTFromArray(a, s, m -1);
	root.right = buildBSTFromArray(a, m + 1, e);

	return root;
}
 
const oob = (a, i) => i < 0 || i >= a.length;

const main = () => {
	let a = [1, 2, 3, 4, 5, 6, 7, 8];
	console.log(buildBSTFromArray(a, 0, a.length - 1));
}
 
main();