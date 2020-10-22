const u = require('../../__common/utils');
const { cgraph } = require('../../__data_structures/5_graph');
// Time  o()
// Space o()
const longestPath = start => {
	if (start === null) return 0;

	let topSort = topoSort(start);
	let diameter = 0;

	while (topSort.length) {
		let current = topSort.pop();
		diamater = Math.max(diameter, current.longestPath);

		for (let i = 0; i < current.neighbors.length; i++) {
			let neighbor = current.neighbors[i];
			if (current.longestPath + 1 > neighbor.longestPath) 
				neighbor.longestPath = current.longestPath + 1;
		}
	}

	console.log('diameter', diameter)
	return diameter;
}

const topoSort = start => {
	let stack = [];
	dfsVisit(start, stack);

	return stack;
}

const dfsVisit = (node, stack) => {
	node.state = "visiting";

	for (let i = 0; i < node.neighbors.length; i++) {
		let neighbor = node.neighbors[i];
		if (neighbor.state === "unvisited")
			dfsVisit(neighbor, stack);
	}

	node.state = "visited";

	stack.push(node);
}
 
const main = () => {
	const graph = cgraph([1, 2, 3, 4, 5], true);
	longestPath(graph[1]);
}
 
main();