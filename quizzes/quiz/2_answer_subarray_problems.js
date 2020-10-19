/*
* 1_kadanes_brute.js         | 2loops+, isum=0, jsum+=a[j] max(maxSum, sum)
* 2_kadanes.js               | kadanes
* 3_subArraySum.js           | elg (s< len(a)) + if (s>e) reset [.ret(s,e) .if(e=end)break, e++,sum+=ae . sum-=se s+=]
* 4_prefixSums.js            | prefixSum
* 4_findLongestSubstring.js  | pullEnd, if str[e] in map, s+1, map[toAdd]=e, ret maxLen
*/

const u = require("../0_common/utils")

const kadanesBrute = a => {
}

const kadanes = a => {
}

const subArraySum = (a, x) => {
}

const prefixSums = a => {
}

const prefixSumsTarget = (a, x) => {
}

const longestSubstring = str => {
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

