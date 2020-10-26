const u = require('../../__common/utils');
const { cgraph, createNode } = require('../../__data_structures/5_graph');
 
// Time  o(v + e)
// Space o(v)
const printLevelOrderQueues = root => {
	let currentQ = [];
	let nextQ = [];

	currentQ.push(root);
	root.state = "visiting";

	while (currentQ.length > 0) {
		let current = currentQ.shift();
		console.log('current', current.val)

		for (let key in current.neighbors) {
			let neighbor = current.neighbors[key];

			if (neighbor.state === "unvisited") {
				nextQ.push(neighbor);
				neighbor.state = "visiting";
			}
		}

		current.state = " visited";

		if (currentQ.length === 0) {
			u.pl();

			currentQ = nextQ;
			nextQ = [];
		}
	}
}

// Time  o(v + e)
// Space o(v)
const printLevelOrderMarker = root => {
	let q = [];

	q.push(root);
	root.state = "visiting";

	let marker = createNode(0);
	q.push(marker);

	while (q.length > 0) {
		let current = q.shift();
		if (current === marker) {
			if (q.length) q.push(marker);
			u.pl();
			continue;
		}
		console.log('current', current.val)

		for (let key in current.neighbors) {
			let neighbor = current.neighbors[key];

			if (neighbor.state === "unvisited") {
				q.push(neighbor);
				neighbor.state = "visiting";
			}
		}

		current.state = "visited";
	}
}
 
const main = () => {
	let graphToClone = cgraph([1, 2, 3, 4, 5]);
	// printLevelOrderQueues(graphToClone[3]);
	printLevelOrderMarker(graphToClone[1]);
}
 
main();