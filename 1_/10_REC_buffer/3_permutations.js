const u = require("../__common/utils");

// Time  o(n!)
// Space o(n)
const permutations = (a, x) => { 
	if (a === null || a.length === 0 || x > a.length) return null;
	permutationsHelper(a, new Array(x), 0, {});
}

const permutationsHelper = (a, buffer, bufferIdx, isInBuffer) => { 
	if (bufferIdx === buffer.length) {
		console.log('buffer', buffer)
		return;
	}

	for( let i = 0; i < a.length; i++) {
		if (!isInBuffer[i]) {
			buffer[bufferIdx] = a[i];

			isInBuffer[i] = true;
			permutationsHelper(a, buffer, bufferIdx + 1, isInBuffer)
			isInBuffer[i] = false;
		}
	}
}


const main = () => {
	u.p(permutations([1, 2, 3, 4, 5], 3));
}

main();


