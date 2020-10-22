const u = require('../../__common/utils');
const { Graph, cgraph } = require('../../__data_structures/5_graph');
 
// Time  o(v + e)
// Space o(v)
const topSort = a => {
	let stack = [];
	for (let val in a) {
		let node = a[val];
		if (node.state === "unvisited") dfs(node, stack);
	}

	console.log('stack', stack)
	return stack;
}

const dfs = (node, stack) => {
	node.state = "visiting";

	for (let i = 0; i < node.neighbors.length; i++) {
		let neighbor = node.neighbors[i];
		if (neighbor.state === "unvisited")
			dfs(neighbor, stack);
	}

	node.state = "visited";
	stack.push(node.val);
}
 
const main = () => {
	const graph = cgraph([1, 2, 3, 4, 5]);
	topSort(graph);
}
 
main();