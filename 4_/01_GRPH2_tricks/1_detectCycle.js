const u = require('../../__common/utils');
const { cgraph } = require('../../__data_structures/5_graph');
 
// Are Courses Valid / Can software compile?

// Time  o(v + e)
// Space o(v)
const detectCycle = a => {
	for (let val in a) {
		let node = a[val];
		if (node.state === "unvisited" && hasCycleDFSVisit(a, node)) return true;

		return false;
	}
}

const hasCycleDFSVisit = (a, node) => {
	node.state = "visiting";

	for (let i = 0; i < a.length; i++) {
		let neighbor = a[node.neighbors[i]];
		if (neighbor.state === "unvisited" && hasCycleDFSVisit(a, neighbor)) return true;
		else if (neighbor.state === "visiting") return true;
	}

	node.state = "visited";
	return false;
}
 
const main = () => {
	console.log(detectCycle(cgraph([1, 2, 3, 4, 5])));
}
 
main();