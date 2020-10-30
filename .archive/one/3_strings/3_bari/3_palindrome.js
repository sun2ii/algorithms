// 🕑 O(n)
// 🛰 O(1)
const compareStrings = (a, b) => {
	let i = 0;
	let j = 0;

	while (i < a.length || j < b.length) {
		if (i === a.length && j === b.length) return true;
		if (a[i] === b[j]) {
			i++;
			j++;
		} else if (a[i] !== b[j]) break;
	}

	return (a[i].charCodeAt() > b[j].charCodeAt()) ? "a > b" : "a < b";
}

// 🕑 O(n)
// 🛰 O(n)
const isPalindrome = str => {
	let str2 = "";

	for (let i = str.length - 1; i >= 0; i--) {
		str2 += str[i];
	}

	for (let i = 0; i < str.length; i++) {
		if (str[i] !== str2[i]) return false;
	}

	return true;
}

// 🕑 O(n)
// 🛰 O(1)
const isPalindrome2 = str => {
	let i = 0;
	let j = str.length - 1;

	while (i < j) {
		if (str[i] !== str[j]) return false;
		i++;
		j--;
	}

	return true;
}
 
const main = () => {
	console.log(compareStrings("painting", "painter"));
	console.log(isPalindrome("madam"));
	console.log(isPalindrome("hello"));
	console.log(isPalindrome("nitin"));

	console.log(isPalindrome2("madam"));
	console.log(isPalindrome2("hello"));
	console.log(isPalindrome2("nitin"));
}
 
main();