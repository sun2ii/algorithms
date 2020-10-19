const u = require("../__common/utils");

// print when it goes into the call stack
// print when it goes out of the call stack

// Time  o(4^n)
// Space o(n)
const phoneNumber = a => { 
	if (a.length === 0 || a === null) return null;
	phoneNumberHelper(a, new Array(a.length), 0, 0)
}

const phoneNumberHelper = (a, buffer, startIdx, bufferIdx) => { 
	console.log('into call stack')
	if (bufferIdx >= buffer.length || startIdx >= a.length) {
		console.log('out of the stack')
		console.log('')
		// console.log('buffer', buffer)
		return;
	}

	let letters = getLetters(a[startIdx]);

	if (!letters.length) {
		phoneNumberHelper(a, buffer, startIdx + 1, bufferIdx);
	}

	for (let letter in letters) {
		buffer[bufferIdx] = letters[letter];
		phoneNumberHelper(a, buffer, startIdx + 1, bufferIdx + 1);
	}

	console.log('out of the stack, last node');
}

const getLetters = num => {
	switch (num) {
		case 0: return null;
		case 1: return null;
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

const main = () => {
	u.p(phoneNumber([2, 3, 4, 5]));
}

main();
