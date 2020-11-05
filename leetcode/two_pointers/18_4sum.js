const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O()
// 🛰 O()
const fourSum = (a, k) => {
	let result = [];
	a.sort((a, b) => a - b);

	for (let i = 0; i < a.length - 2; i++) {
		if (i === 0 || a[i] === a[i - 1]) continue;
		utils.prettyPrint(a, i)
		
		let threeResult = threeSum(a.slice(i + 1), k - a[i]);

		threeResult.forEach(item => {
			result.push([a[i]] + item);
		})
	}

	return result;
}

const threeSum = (a, k) => {
	a.sort((a, b) => a - b);
	let result = [];

	for (let i = 0; i < a.length - 2; i++) {
		if (i === 0 || a[i] === a[i - 1]) continue;
		let left = i + 1;
		let right = a.length - 1;
		while (left < right) {
			let sum = a[i] + a[left] + a[right];
			utils.prettyPrint(a, i, left, right);

			if (sum === k) {
				result.push([a[i], a[left], a[right]]);
				left++;
				right--;
				while (left < right && a[left] === a[left - 1]) left++;
				while (left < right && a[right] === a[right + 1]) right--;
			} else if (sum > 0) left++;
			else right--;
		}
	}

	return result;
}
 
const main = () => {
	log(fourSum([1,0,-1,0,-2,2], 0));
}
 
main();