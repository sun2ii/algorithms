const u = require("../../../__common/utils");

// Time  o(n!)
// Space o(n)
const printCombos = (a, x) => { 
	if (a === null || a.length <= 0) return null;
	printCombosHelper(a, new Array(x), 0, 0);
}

const printCombosHelper = (a, buffer, startIdx, bufferIdx) => {
	if (bufferIdx === buffer.length || startIdx === a.length) {
		console.log('buffer', buffer)
		return;
	}

	for (let i = startIdx; i < a.length; i++) {
		buffer[bufferIdx] = a[i];
		printCombosHelper(a, buffer, i + 1, bufferIdx + 1);
	}
}

const main = () => {
	u.p(printCombos([1, 2, 3, 4, 5, 6, 7], 3));
}

main();
