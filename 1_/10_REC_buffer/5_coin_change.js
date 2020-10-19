const u = require("../__common/utils");

// Time  o(n!)
// Space o(n)
const coinChange = (a, x) => { 
	if (a === null || a.length === 0) return null;
	coinChangeHelper(a, x, 0, [], 0);
}

const coinChangeHelper = (a, x, startIdx, buffer, sum) => { 
	console.log('here') // only need to do once
	if (sum > x) {
		console.log('going to go back up the node, this is what i am popping out:')
		return;
	}
	if (sum === x) {
		console.log('going to go back up the node, this is what i am popping out:')
		// console.log('buffer', buffer);
		return;
	}

	for (let i = startIdx; i < a.length; i++) {
		buffer.push(a[i]);
		console.log('here'); // will need to call every time it branches out if recursive call gets called out 
		coinChangeHelper(a, x, i, buffer, sum + a[i]);
		buffer.pop();
	}

	console.log('going to go back up the node, this is what i am popping out:') // last pop print
}

const main = () => {
	u.p(coinChange([1, 2, 5], 5));
}

main();
