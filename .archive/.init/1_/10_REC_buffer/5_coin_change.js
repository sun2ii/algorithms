const u = require("../../__common/utils");

// Time  o(n!)
// Space o(n)
const coinChange = (a, x) => { 
	if (a === null || a.length === 0) return null;
	coinChangeHelper(a, x, 0, [], 0);
}

const coinChangeHelper = (a, x, startIdx, buffer, sum) => { 
	// console.log('pushing, going down to node:', a, x, startIdx, buffer, sum);
	u.pl();
	process.stdout.write('pushing, going down to node:');
	u.par(a, x, startIdx);
	u.p(buffer, sum);
	if (sum > x) {
		return;
	}
	if (sum === x) {
		// console.log('buffer', buffer);
		return;
	}

	for (let i = startIdx; i < a.length; i++) {
		buffer.push(a[i]);
		coinChangeHelper(a, x, i, buffer, sum + a[i]);
		buffer.pop();
	}

	// console.log('going to go back up the node, this is what i am popping out:') // last pop print
	console.log('popping, going up from node:', a, x, startIdx, buffer, sum);
}

const main = () => {
	u.p(coinChange([1, 2, 5], 5));
}

main();
