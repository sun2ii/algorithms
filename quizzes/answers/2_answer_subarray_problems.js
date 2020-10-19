/*
* 1_kadanes_brute.js         | 2loops+, isum=0, jsum+=a[j] max(maxSum, sum)
* 2_kadanes.js               | kadanes
* 3_subArraySum.js           | elg (s< len(a)) + if (s>e) reset [.ret(s,e) .if(e=end)break, e++,sum+=ae . sum-=se s+=]
* 4_prefixSums.js            | prefixSum
* 4_findLongestSubstring.js  | pullEnd, if str[e] in map, s+1, map[toAdd]=e, ret maxLen
*/

const u = require("../0_common/utils")

const kadanesBrute = a => {
	let curS, maxS;
	maxS = a[0];

	if (a === null || a.length === 0) return null;

	for (let i = 0; i < a.length; i++) {
		curS = 0;
		for (let j = i; j < a.length; j++) {
			curS += a[j];
			maxS = Math.max(curS, maxS);
		}
	}

	return maxS;
}

const kadanes = a => {
	let curS, maxS;
	maxS = a[0];
	curS = a[0];

	if (a === null || a.length === 0) return null;

	for (let i = 1; i < a.length; i++) {
		curS = Math.max(curS + a[i], a[i]);
		maxS = Math.max(curS, maxS);
	}

	return maxS;
}



const subArraySum = (a, x) => {
	let s, i;
	s = 0;
	i = 0;

	let sum;
	sum = a[0];

	while (s < a.length) {
		if (s > i) {
			i = s;
			sum = a[i];
		}

		if (sum === x) return [s, i];
		else if (sum < x) {
			if (i === a.length - 1) break;
			i++;
			sum += a[i];
		} else if (sum > x) {
			sum -= a[s];
			s++;
		}
	}

	return null;
}

const prefixSums = a => {
	let sum, obj;
	sum = 0;
	obj = {};

	// { sum : i }
	for (let i = 0; i < a.length; i++) {
		sum += a[i];
		if (sum === 0) return [0, i];

		if (obj.hasOwnProperty(sum)) {
			return [obj[sum] + 1, i];
		}

		obj[sum] = i;
	}

	return null;
}

const prefixSumsTarget = (a, x) => {
	let sum, obj;
	sum = 0;
	obj = {};

	for (let i = 0; i < a.length; i++) {
		sum += a[i];
		if (sum === x) return [0, i];
		if (obj.hasOwnProperty(sum - x)) {
			return [obj[sum - x] + 1, i]
		}
		obj[sum] = i;
	}

	return null;
}

const longestSubstring = str => {
	let s, i;
	s = 0;
	i = 0;

	let obj, res, toAdd;
	obj = {};
	res = 1;

	obj[str[0]] = 0;

	// { char : i }
	while (i < str.length) {
		i++;
		toAdd = str[i];

		if (obj.hasOwnProperty(toAdd) && obj[toAdd] >= s) {
			s = obj[toAdd] + 1;
		}

		obj[toAdd] = i;

		if (i - s + 1 > res) res = i - s + 1;
	}

	return res;
}

const main = () => {
    u.p(kadanesBrute([-2, -3, 4, -1, -2, 1, 5, -1]));
    u.p(kadanes([-2, -3, 4, -1, -2, 1, 5, -1]));
	u.p(subArraySum([5, 3, 1, 7, 6, 4, 2, 3], 14));
	u.p(prefixSums([2, 4, -2, 1, -3, 5, -3]));
	u.p(prefixSumsTarget([2, 4, -2, 1, -3, 5, -3], 5));
	u.p(longestSubstring("whatwhywhere"));
}

main();

