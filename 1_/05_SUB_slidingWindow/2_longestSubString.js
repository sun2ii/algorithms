const u = require('../__common/utils');
 
// Time  o(n)
// Space o(1)
const longestSubString = a => {
	if (a === null || a.length <= 0) return null;
	
	let s, i, res;
	let obj = {};

	s = 0;
	i = 0;
	res = 1;
	obj[a[0]] = 0;

	// { char: i }
	while (i < a.length) {
		u.par(a, s, i);
		i++;
		if (obj.hasOwnProperty(a[i]) && obj[a[i]] >= s) {
			s = obj[a[i]] + 1;
			console.log(u.color('∆s', 'purple', true));
		}
		obj[a[i]] = i;

		if (i - s + 1 > res) res = i - s + 1;
		u.pl(); u.par(a, s, i); console.log('[s,e]', u.color(`[${[s, i]}]`, 'green', true)); console.log('obj', obj); console.log('cur', i - s + 1, 'res', res);
	}

	u.p(res);
	return res;
}
 
const main = () => {
	longestSubString("whatwhywhere");
}
 
main();