// 🕑 O(n)

const utils = require("../../../__common/utils");

// 🛰 O(n)
const reverseString = a => {
	let str = "";

	for (let i = a.length - 1; i >= 0; i--) {
		str += a[i];
	}
	
	console.log('str', str)
	return str;
}

const reverseString2 = a => {
	let i = 0;
	let j = a.length - 1;

	while (i < j) {
		[a[i], a[j]] = [a[i], a[j]];
		i++;
		j--;
	}

	return a;
}
 
const main = () => {
	reverseString("python");
	reverseString2("python");
}
 
main();