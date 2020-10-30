const u = require('../../__common/utils');
 
// Time  o()
// Space o()
const coinChangePrintCount = (coins, amount) => {
	let a = Array(amount + 1).fill(0);
	a[0] = 1;

	for (let i = 0; i < coins.length; i++) {
		let coin = coins[i];
		for (let j = coin; j <= amount; j++) {
			a[j] = a[j] + a[j - coin]
		}
	}

	console.log('a[amount]', a[amount])
	return a[amount];
}
 
const main = () => {
	coinChangePrintCount([1, 2, 5], 5);
}
 
main();