const u = require('../__common/utils');
const { TrieNode } = require('./0_node');

// Time O(n) for all operations
// Space O(1) search | O(n) insert | O(1) delete
class Trie {
	constructor(e) {
		this.root = new TrieNode(e);
	}

	insert(word) {
		let current = this.root;

		for (let i = 0; i < word.length; i++) {
			let ch = word[i];
			if (!word[ch]) current.addNode(ch);

			current = current.getNode(ch);
		}

		current.setWord = true;
	}

	hasPrefix(prefix) {
		let current = this.root;
		for (let i = 0; i < prefix.length; i++) {
			let ch = prefix[i];
			if (!current[ch]) return false;
			current = current.getNode(ch);
		}

		return true;
	}

	hasWord(word) {
		let current = this.root;
		for (let i = 0; i < word.length; i++) {
			let ch = word[i];
			if (!current[ch]) return false;

			current = current.getNode(ch);
		}

		return current.isWord;
	}

	deleteNode(word) {
		if (word === null || word === "") return;

		let lastNode = getLastNode(word);
		if (lastNode === null || !lastNode.isWord()) return;

		lastNode.setWord(false);

		if (Object.keys(lastNode.getMap()).length > 0) return;

		removeLastNodeWithMultipleChildren(word);
	}

	getLastNode(word) {
		let current = this.root;

		for (let i = 0; i < word.length; i++) {
			let ch = word[i];
			if (!current[ch]) return null;

			current = current.getNode(ch);
		}

		return current;
	}

	removeLastNodeWithMultipleChildren(word) {
		let lastNodeWithMultipleChildren = null;
		let childToBreak = 0;
		let current = this.root;

		for (let i = 0; i < word.length; i++) {
			let ch = word[i];
			if (!current.includes(ch)) return;

			if (Object.keys(current.getMap()).length > 1 || current.isWord()) {
				lastNodeWithMultipleChildren = current;
				childToBreak = ch[i + 1];
			}
		}

		if (lastNodeWithMultipleChildren !== null) {
			lastNodeWithMultipleChildren.remove(childToBreak);
		} else {
			this.root.getMap().remove(word[0])
		}
	}
}


module.exports = {
	Trie
}