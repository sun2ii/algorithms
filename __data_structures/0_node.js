class LinkedListNode {
	constructor(val) {
		this.next = null;
		this.prev = null;
		this.value = val;
	}
}

class BinaryTreeNode {
	constructor(val) {
		this.left = null;
		this.right = null;
		this.value = val;
	}
}

class GraphNode {
	constructor() {}
}

class TrieNode {
	constructor(val) {
		let map = {};
		let isWord = false;
	}

	isWord() {
		return this.isWord;
	}

	setWord(isWord) {
		this.isWord = isWord;
	}

	contains(ch) {
		return this.map.hasOwnProperty(ch);
	}

	addNode(ch) {
		if (!this.map[ch]) this.map[ch] = new TrieNode(ch);
	}

	getNode(ch) {
		return this.map[ch];
	}

	getMap() {
		return this.map;
	}
}

module.exports = {
	LinkedListNode,
	BinaryTreeNode,
	GraphNode,
	TrieNode
}