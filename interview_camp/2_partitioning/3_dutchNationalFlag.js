const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const dutchNationalFlag = (a, p) => {
	let low = 0;
	let high = a.length - 1;
	let i = 0;

	log('\n1. Put lows in low, Put eye/highs in high')
	log('2. i++ if p= and put low')
	line();

	while (i <= high) {
		utils.prettyPrint(a, low, i, high);
		if (a[i] === p) i++ 
		else if (a[i] > p) {
			[a[i], a[high]] = [a[high], a[i]];
			high--;
		} else {
			[a[i], a[low]] = [a[low], a[i]];
			low++;
			i++;
		}
	}

	log(a);
	return a;
}
 
const main = () => {
	dutchNationalFlag([5, 2, 4, 4, 6, 4, 4, 3], 4);
}
 
main();