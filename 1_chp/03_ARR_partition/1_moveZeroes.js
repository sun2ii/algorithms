const u = require('../__common/utils');
 
// Time  o(n)
// Space o(1)
const moveZeroes = (a, type) => {
	if (a === null || a.length <= 0) return null;
	let boundary;

	if (type === "begin") {
		boundary = 0;
		for (let i = 0; i < a.length; i++) {
			if (a[i] === 0) {
				u.swap(a, i, boundary);
				boundary++;
			}
		}
	} else {
		boundary = a.length - 1;
		for (let i = a.length - 1; i > 0; i--) {
			if (a[i] === 0) {
				u.swap(a, i, boundary);
				boundary--;
			}
		}
	}

	u.p(a);
	return a;
}
 
const main = () => {
	moveZeroes([4, 2, 0, 1, 0, 3, 0], "begin");
	moveZeroes([4, 2, 0, 1, 0, 3, 0], "end");
}
 
main();