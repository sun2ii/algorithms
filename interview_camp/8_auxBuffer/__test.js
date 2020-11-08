const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const combinations = (a, x) => combinationsHelper(a, new Array(x), 0, 0);

const combinationsHelper = (a, buf, bIndex, aIndex) => {
	if (buf.length === bIndex || a.length === aIndex) {
		utils.found(buf);
		return;
	}

	for (let i = aIndex; i < a.length; i++) {
		buf[bIndex] = a[i];
		combinationsHelper(a, buf, bIndex + 1, i + 1);
	}
}

const phoneNums = a => phoneNumsHelper(a, new Array(a.length), 0, 0);

const phoneNumsHelper = (a, buf, bIndex, aIndex) => {
	if (buf.length === bIndex || a.length === aIndex) {
		utils.found(buf);
		return;
	}

	let letters = getLetters(a[aIndex]);

	if (!letters.length) phoneNumsHelper(a, buf, bIndex, aIndex + 1);

	for (let i = 0; i < letters.length; i++) {
		buf[bIndex] = letters[i];
		phoneNumsHelper(a, buf, bIndex + 1, aIndex + 1);
	}
}

const coinChange = (a, x) => coinChangeHelper(a, x, 0, [], 0);

const coinChangeHelper = (a, x, startIdx, buf, sum) => {
	if (sum === x) {
		console.log('buf', buf)
		return;
	}

	if (sum > x) return;

	for (let i = startIdx; i < a.length; i++) {
		buf.push(a[i]);
		coinChangeHelper(a, x, i, buf, sum + a[i]);
		buf.pop();
	}
}

const getLetters = num => {
	switch (num) {
		case 0: return [];
		case 1: return [];
		case 2: return ['a', 'b', 'c']
		case 3: return ['d', 'e', 'f']
		case 4: return ['g', 'h', 'i']
		case 5: return ['j', 'k', 'l']
		case 6: return ['m', 'n', 'o']
		case 7: return ['p', 'q', 'r', 's']
		case 8: return ['t', 'u', 'v']
		case 9: return ['w', 'x', 'y', 'z']
	}
}

const permutations = (a, x) => permutationsHelper(a, new Array(x), 0, {});

const permutationsHelper = (a, buf, bIndex, isInBuffer) => {
	if (buf.length === bIndex) {
		utils.found(buf);
		return;
	}

	for (let i = 0; i < a.length; i++) {
		if (!isInBuffer[i]) {
			buf[bIndex] = a[i];

			isInBuffer[i] = true;
			permutationsHelper(a, buf, bIndex + 1, isInBuffer);
			isInBuffer[i] = false;
		}
	}
}

const printAll = (a, x) => {
	return printAllHelper(a, new Array(x), 0);
}

const printAllHelper = (a, buf, bIndex) => {
	if (buf.length === bIndex) {
		console.log(buf);
		return;
	}

	for (let i = 0; i < a.length; i++) {
		buf[bIndex] = a[i];
		printAllHelper(a, buf, bIndex + 1);
	}
}

 
const main = () => {
	// combinations([1, 2, 3, 4, 5, 6, 7], 3);
	// permutations([1, 2, 3, 4, 5, 6, 7], 3);
	// phoneNums([2, 4, 3]);
	coinChange([1,2, 5], 5);
}
 
main();