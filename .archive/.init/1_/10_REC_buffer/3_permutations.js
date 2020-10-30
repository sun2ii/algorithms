const u = require("../../__common/utils");

// Time  o(n!)
// Space o(n)
const permutations = (a, x) => { 
	if (a === null || a.length === 0 || x > a.length) return null;
	permutationsHelper(a, new Array(x), 0, {});
}

const permutationsHelper = (a, buffer, bufferIdx, isInBuffer) => { 
	u.pl();
	console.log('pushing going down to node:', 'a, buffer, bufferIdx, isInBuffer', buffer, bufferIdx, isInBuffer)
	if (bufferIdx === buffer.length) {
		console.log('buffer', buffer)
		console.log('1popping going up from node:', 'a, buffer, bufferIdx, isInBuffer', buffer, bufferIdx, isInBuffer)
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

	console.log('2popping going up from node:', 'a, buffer, bufferIdx, isInBuffer', a, buffer, bufferIdx, isInBuffer)
}


const main = () => {
	u.p(permutations([1, 2, 3, 4, 5], 3));
}

main();


