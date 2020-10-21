const u = require('../../__common/utils');
 
// Time  o(n)
// Space o(1)
const reverseSentence = a => {
	let e = a.length - 1;
	let cw = "";
	let result = "";

	while (e >= 0) {
		while (a[e] === " " && a[e - 1] === " ") e--;

		if (a[e] !== " ") {
			cw = a[e] + cw;
		} else if (a[e] === " " && cw) {
			if (!result) result = cw;
			else result = result + " " + cw;
			cw = "";
		}

		e--;
	}

	if (!result) result = cw;
	else result = result + " " + cw;

	console.log('result', result)
	return result;
}
 
const main = () => {
	reverseSentence("this is a string");
}
 
main();