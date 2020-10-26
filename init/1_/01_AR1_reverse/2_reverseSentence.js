const u = require('../../__common/utils');
 
// Time  o(n)
// Space o(1)
const reverseSentence = a => {
	let cw = "";
	let result = "";
	let e = a.length - 1;

	if (a === null || a.length <= 0) return null;

	while (e >= 0) {
		u.par(a, e);u.p(cw, result);
		while (a[e] === " " && a[e - 1] === " ") e--;
		if (a[e] !== " ") {
			cw = a[e] + cw;
		} else if (a[e] === " " && cw) {
			if (!result) result = cw;
			else result = `${result} ${cw}`
			cw = "";
		}

		e--;
	}

	if (!result) result = cw;
	else result = `${result} ${cw}`

	u.p(result);
	return result;
}
 
const main = () => {
	reverseSentence("this is a string");
}
 
main();