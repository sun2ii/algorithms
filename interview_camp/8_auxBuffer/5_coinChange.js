const { helper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n!)
// 🛰 O(n)
const coinChange = (a, x) => {
	utils.start(a, x);
	return coinChangeHelper(a, x, 0, [], 0);
}

const coinChangeHelper = (a, x, startIdx, buf, sum) => {
	line();
	if (sum > x) {
		utils.baseCase('sum > x');
		return;
	}
	
	if (sum === x) {
		utils.baseCase('sum == x ' + buf);
		return;
	}

	for (let i = startIdx; i < a.length; i++) {
		buf.push(a[i]);
		utils.recursiveStep(true, '', [ buf ]);
		coinChangeHelper(a, x, i, buf, sum + a[i]);
		buf.pop();
		utils.recursiveStep(false, 'pop', [ buf ]);
	}
}
 
const main = () => {
	coinChange([1, 2, 5], 5);
}
 
main();