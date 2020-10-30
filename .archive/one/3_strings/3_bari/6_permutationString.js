
const utils = require("../../../__common/utils");

// 🕑 O(n!)
// 🛰 O(n)
const permtutationString = (input, levels) => {
	return permutationStringHelper(input, new Array(levels), {}, 0)
}

const permutationStringHelper = (input, result, buffer, levels) => {
	console.log('buffer in', levels, buffer)
	if (levels === result.length) {
		console.log('result', result);
	} else {
		for (let i = 0; i < input.length; i++) {
			console.log('i', i)
			if (!buffer[i]) {
				result[levels] = input[i];
				buffer[i] = 1;
				permutationStringHelper(input, result, buffer, levels + 1);
				buffer[i] = 0;
				console.log('buffer out', levels, buffer)
			}
		}
	}
}

// 🕑 O(n!)
// 🛰 O(n)
const permtutationString2 = (a, x) => {
	a = Object.assign([], a);
	return permutationStringHelper2(a, 0, x - 1);
}

const permutationStringHelper2 = (a, low, high) => {
	if (low === high) {
		console.log('a', a)
	} else {
		for (let i = low; i <= high; i++) {
			utils.swap(a, low, i);
			permutationStringHelper2(a, low + 1, high);
			utils.swap(a, low, i);
		}
	}
}

const main = () => {
	permtutationString("abc",  3);
	// permtutationString2("abc",  3);
}

main();