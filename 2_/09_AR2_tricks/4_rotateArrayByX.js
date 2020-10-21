const u = require('../../__common/utils');
 
// Time  o(n)
// Space o(1)
const rotateArrayByX = (a, x) => {
	x = x % a.length;

	reverse(a);
	reverse(a, 0, x - 1)
	reverse(a, x, a.length - 1);

	console.log('a', a)
	return a;
}

const reverse = (a, s = 0, e = a.length - 1) => {
	while (s < e)  {
		u.swap(a, s, e);
		s++;
		e--;
	}

	return a;
}
 
const main = () => {
	rotateArrayByX([1, 2, 3, 4, 5, 6], 2);
}
 
main();