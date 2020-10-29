const u = require("../0_common/utils");

// Time  o(log n)
// Space o(1)
const power = (x, n) => { 
	if (n === 0) return 1;
    
    let pow = Math.abs(n);
	let result = (pow % 2 === 0) ? 
		power(x * x, pow / 2) : 
		power(x * x, (pow - 1) / 2) * x;
    
    return n < 0 ? 1 / result : result;
}

const main = () => {
	u.p(power(4, 4));
}

main();
