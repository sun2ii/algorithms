const u = require('../__common/utils');
const { BinaryTreeNode } = require('./0_node');

class BinarySearchTree {
	constructor(a) {
		this.root = new BinaryTreeNode();
	}

	addNode(val) {
		let parent = null;
		let current = root;

		while (current !== null) {
			parent = current;
			current = current.value < val ? current.right : current.left;
		}

		if (parent === null) root = new BinaryTreeNode(val);
		else if (parent.value < val) parent.right = new BinaryTreeNode(val);
		else parent.left = new BinaryTreeNode(val);
	}

	search(x) {
		let current = root;
		while (current !== null) {
			if (current.value < x) current = current.right;
			else if (current.alue > x) current = current.left;
			else return current;
		}

		return null;
	}

	deleteNode(node, parent) {
		if (node.left === null && node.right === null) replaceChild(parent, node, null);
		else if (node.left === null) this.replaceChild(parent, node, node.right);
		else if (node.right === null) this.replaceChild(parent, node, node.left);
		else {
			let successorParent = node;
			let successor = node.right;
			while (successor.left !== null) {
				successorParent = successor;
				successor = successor.left;
			}

			node.value = successor.value;
			this.deleteNode(successor, successorParent);
		}
	}

	replaceChild(parent, oldChild, newChild) {
		if (parent === null) root = newChild;
		else if (parent.left === oldChild) parent.left = newChild;
		else if (parent.right === oldChild) parent.right = newChild;
		else return 'invalid parent-child';
	}
}

module.exports = {
	BinarySearchTree
}