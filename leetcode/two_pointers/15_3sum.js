const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n^2)
// 🛰 O(1)
const threeSum = a => {
	let res = [];
	a.sort((a, b) => a - b);

	line();
	log('\tThree Sum');
	line();
	log('\n1. sort');
	log('2. 4 loop, then left/right pointers');
	log('3. while l<r, check sum ');
	log('4. don\'t forget to skip duplicates');

	for (let i = 0; i < a.length - 2; i++) {
		if (i > 0 && a[i] === a[i - 1]) continue;
		let left = i + 1;
		let right = a.length - 1;
		
		while (left < right) {
			let sum = a[i] + a[left] + a[right];
			utils.prettyPrint(a, i, left, right, sum.toString());
			if (sum < 0) left++;
			else if (sum > 0) right--;
			else {
				res.push([a[i], a[left], a[right]]);
				left++;
				right--;
				while(left < right && a[left] === a[left - 1]) left++;
				while(left < right && a[right] === a[right + 1]) right--;
			}
		}
	}

	return res;
}

const main = () => {
	// log(threeSum([-1,0,1,2,-1,-4]));
	log(threeSum([1,-1,-1,0]));
}
 
main();