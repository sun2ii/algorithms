const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n^2)
// 🛰 O(1)
const threeSumClosest = (a, k) => {
	a.sort((a, b) => a - b);
	let closest = a[0] + a[1] + a[2];

	for (let i = 0; i < a.length - 2; i++) {
		let left = i + 1;
		let right = a.length - 1;
		while (left < right) {
			let sum = a[i] + a[left] + a[right];
			if (Math.abs(sum - k) < Math.abs(closest - k)) closest = sum;
			utils.prettyPrint(a, i, left, right, sum.toString(), k.toString(), closest.toString());
			if (sum === k) return sum;
			else if (sum > k) left++;
			else right--;
		}
	}

	return closest;
}
 
const main = () => {
	log(threeSumClosest([-1, 2, 1, -4], 1));
	log(threeSumClosest([0, 1, 2], 3));
}
 
main();