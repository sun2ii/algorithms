const u = require('../../__common/utils');
const { cgraph } = require('../../__data_structures/5_graph');
 
// Time  o(v + e)
// Space o(v)
const isBipartite = a => {
	for (let val in a) {
		let node = a[val];
		node.level = -1;
	}

	let group1 = [];
	let group2 = [];

	for (let val in a) {
		let node = a[val];
		if (node.state === "unvisited") {
			let groups = isBipartiteHelper(node);

			if (groups === null) return null;

			group1.push(groups[0]);
			group2.push(groups[1]);
		}
	}

	console.log('group1', group1)
	console.log('group2', group2)
	
	return [group1, group2];
}

const isBipartiteHelper = (node) => {
	let q = [];
	let oddNodes = [];
	let evenNodes = [];

	q.push(node); 
	node.level = 0;
	node.state = "visiting";

	while (q.length) {
		let current = q.shift();

		if (current.level % 2 === 0) evenNodes.push(current);
		else oddNodes.push(current);

		for (let i = 0; i < current.length; i++) {
			let neighbor = a[node.neighbors[i]];
			if (neighbor.state === "unvisited") {
				neighbor.level = current.level + 1;
				q.push(neighbor);
				neighbor.state = "visiting";
			} else if (neighbor.level === current.level) return null;
		}

		current.state = "visited";
	}

	return [oddNodes, evenNodes];
}

const main = () => {
	isBipartite(cgraph([1, 2, 3, 4, 5, 6]));
}
 
main();