const u = require('../../__common/utils');
 
// Time  o(n)
// Space o(log n)
const findSmallestK = (a, k) => {
	if (a === null || a.length <= 0) return null;

	return findSmallestKHelper(a, 0, a.length - 1, k - 1);
}

const findSmallestKHelper = (a, s, e, k) => {
	let p = getRandom(s, e);
	let result = partition(a, s, e, p);

	if (result > k) return findSmallestKHelper(a, s, result - 1, k);
	else if (result < k) return findSmallestKHelper(a, result + 1, e, k)
	else {
		console.log('a[result]', a[result])
		return a[result];
	}
}

const partition = (a, s, e, p) => {
	u.swap(a, s, p);
	let less = s;

	for (let i = s + 1; i <= e; i++) {
		if (a[i] < a[s]) u.swap(a, i, ++less);
	}

	u.swap(a, s, less);

	return less;
}

const getRandom = (s, e) => {
	return Math.floor((Math.random() * e) + s);
}
 
const main = () => {
	findSmallestK([5, 7, 4, 6, 5, 3, 3], 3);
}
 
main();