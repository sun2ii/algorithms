const u = require('../../__common/utils'); 

// Time  o(26^n)
// Space o(26^n)
const wordLadder = (start, end) => {
	let q = [];
	let visitedWords = {};

	q.push(start);
	visitedWords[start] = 0;

	while (q.length) {
		let current = q.shift();

		if (current === end) return visitedWords[current + 1];

		let neighbors = getNeighbors(current);
	}
}

// dictionary

const getNeighbors = word => {
	let result = "";
	let wordArray = [];

	for (let i = 0; i < word.length; i++) {
		for (let ch = "a"; ch < "z"; ch++) {
			if (word[i].charCodeAt(i) !== ch) {
				wordArray[i] = ch;
			}
		}
		
	}
}

// Time  o(n * m)
// Space o(n * m) // # of words in dict + length of longest word
const wordLadderOptimized = a => {
}
 
const main = () => {
	wordLadder();
}
 
main();