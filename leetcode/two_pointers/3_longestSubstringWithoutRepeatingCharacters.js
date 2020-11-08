const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n^2)
// 🛰 O(1
const longestSubstringWithoutRepeatingCharacters = s => {
	let maxStr = '';
	let maxLength = 0;
	let posIndex = 0;
	
	line();
	log('\tLongest Substr without Repeating Characters');
	line();
	log('\n1. find position index of s[i] in your maxStr')
	log('2. if positionIndex exists, maxStr becomes a substring + 1')
	log('3. maxStr += s[i]')
	log('4. maxLen is max of maxLength or maxStr.length')

	for (let i = 0; i < s.length; i++) {
		posIndex = maxStr.indexOf(s[i]);

		if (posIndex > -1) maxStr = maxStr.substring(posIndex + 1);
		maxStr += s[i];
		maxLength = Math.max(maxStr.length, maxLength);
	}

	return maxLength;
}

// 🕑 O(n^2)
// 🛰 O(1
const longestSubstringWithoutRepeatingCharacters2 = s => {
	if (s === "") return 0;
	let i = 0;
	let j = 0;
	let result = 1;
	let storage = {};
	storage[s[0]] = 0;

	line();
	log('\tLongest Substr without Repeating Characters');
	line();
	log('\n1. increment j')
	log('2. if item exists in storage, i + 1')
	log('3. save item')
	log('4. maxLen is max of maxLength or maxStr.length')

	while (j <= s.length) {
		j++;
		let item = s[j];

		if (storage.hasOwnProperty(item) && storage[item] >= i) 
			i = storage[item] + 1;

		storage[item] = j;

		result = Math.max(result, j - i + 1);
	}

	return result;
}
 
const main = () => {
	// log(longestSubstringWithoutRepeatingCharacters("whatwhywhere"));
	log(longestSubstringWithoutRepeatingCharacters2("bbbbb"));
}
 
main();