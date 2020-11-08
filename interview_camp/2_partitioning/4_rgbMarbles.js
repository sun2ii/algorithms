const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const rgbMarbles = a => {
	utils.start(a);
	let red = 0;
	let i = 0;
	let blue = a.length - 1;

	log("\nlow + high boundaries -> Dutch National Flag");
	line();
	while (i <= blue) {
		utils.prettyPrint(a, red, i, blue);
		if (a[i] === 2) i++;
		else if (a[i] > 2) {
			[a[i], a[blue]] = [a[blue], a[i]];
			blue--;
		} else {
			[a[i], a[red]] = [a[red], a[i]];
			red++;
			i++;
		}
	}

	log(a)
	return a;
}
 
const main = () => {
	rgbMarbles([2,1,2,3,2,1,2,3]);
}
 
main();