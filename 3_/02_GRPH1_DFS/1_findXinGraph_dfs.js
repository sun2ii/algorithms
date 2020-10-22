const u = require('../../__common/utils');
const { cgraph } = require('../../__data_structures/5_graph');
 
// Time  o(v + e)
// Space o(v) - storing state takes space
const findXDFS = (a, x) => {
	for (let val in a) {
		let node = a[val];
		if (node.state === "unvisited" && dfs(a, node, x)) return true;

		return false;
	}
}

const dfs = (a, node, x) => {
	node.state = "visiting";

	if (node.val === x) return true;
	
	for (let i = 0; i < node.neighbors.length; i++) {
		let neighbor = a[node.neighbors[i]];
		if (neighbor.state === "unvisited" && dfs(a, neighbor, x)) return true;
	}

	node.state = "visited";
	return false;
}
 
const main = () => {
	console.log(findXDFS(cgraph([1, 2, 3, 4, 5]), 2));
}
 
main();