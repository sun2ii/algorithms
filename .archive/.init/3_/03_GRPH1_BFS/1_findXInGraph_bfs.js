const u = require('../../__common/utils');
const { cgraph } = require('../../__data_structures/5_graph');
 
// Time  o(v + e)
// Space o(v)
const findXBFS = (a, x) => {
	for (let val in a) {
		let node = a[val];
		if (node.state === "unvisited" && bfs(a, node, x)) return true;

		return false;
	}
}

const bfs = (a, node, x) => {
	let q = [];
	q.push(node);
	node.state = "visiting";

	while (q.length > 0) {
		let current = q.shift();
		if (current.val === x) return true;

		for (let key in current.neighbors) {
			let neighbor = current.neighbors[key];
			
			if (neighbor.state === "unvisited") {
				q.push(neighbor);
				neighbor.state === "visiting";
			}
		}

		current.state = "visited";
	}
	
	return false;
}
 
const main = () => {
	console.log(findXBFS(cgraph([1, 2, 3, 4, 5]), 2));
}
 
main();