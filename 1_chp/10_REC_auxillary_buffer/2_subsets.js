const u = require("../../0_common/utils");

// Time  o(n!)
// Space o(n)
const printSubsets = a => { 
	if (a === null || a.length === 0) return null;
	return printSubsetsHelper(a, new Array(a.length), 0, 0)
}

const printSubsetsHelper = (a, buffer, startIdx, bufferIdx) => { 
	console.log('buffer', buffer, bufferIdx)
	// 1. Termination Cases
	if (bufferIdx === buffer.length || startIdx === a.length) {
		return;
	}


	// 2. Find Candidates
	for (let i = startIdx; i < a.length; i++) {
		// 3. Place Candidates
		buffer[bufferIdx] = a[i];

		// 4. Recurse
		printSubsetsHelper(a, buffer, i + 1, bufferIdx + 1);
	}
}


const main = () => {
	u.p(printSubsets([1, 2, 3]));
}

main();

