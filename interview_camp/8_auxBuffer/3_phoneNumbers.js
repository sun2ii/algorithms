const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n!)
// 🛰 O(n)
const phoneNumbers = a => {
	utils.start(a);
	return phoneNumbersHelper(a, new Array(a.length), 0, 0);
}

const phoneNumbersHelper = (a, buf, bIndex, aIndex) => {

	line();
	if (buf.length === bIndex || a.length === aIndex) {
		utils.found('printing ' + buf);
		return;
	}

	let letters = getLetters(a[aIndex]);

	if (!letters.length) {
		utils.recursiveStep(true, 'noLetters+', [
			buf.slice(0, bIndex),
			bIndex,
			aIndex + 1,
		]);

		phoneNumbersHelper(a, buf, bIndex, aIndex + 1);

		utils.recursiveStep(false, 'noLetters-', [
			buf.slice(0, bIndex),
			bIndex,
			aIndex,
		]);
	}

	for (let i = 0; i < letters.length; i++) {
		buf[bIndex] = letters[i];
		utils.recursiveStep(true, 'regular+', [
			buf.slice(0, bIndex + 1),
			bIndex + 1,
			aIndex + 1,
		]);
		phoneNumbersHelper(a, buf, bIndex + 1, aIndex + 1);
		utils.recursiveStep(false, 'regular-', [
			buf.slice(0, bIndex),
			bIndex,
			aIndex,
		]);
	}
}

const main = () => phoneNumbers([1, 2, 3]);

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
 
main();