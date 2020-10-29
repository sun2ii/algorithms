const u = require('../../__common/utils');
const { cgraph, createNode } = require('../../__data_structures/5_graph');
 
// Time  o(v + e)
// Space o(v + e)
const cloneGraph = root => {
	if (root === null) return;
	let obj = {};
	let rootCopy = createNode(root.val);
	obj[root.val] = rootCopy;

	dfsVisit(root, obj);

	console.log('root', root)
	return root;
}

const dfsVisit = (root, obj) => {
	root.state = "visiting";

	for (let key in root.neighbors) {
		let neighbor = root.neighbors[key];

		if (!obj.hasOwnProperty(neighbor.val)) {
			obj[neighbor.val] = createNode(neighbor.val);
		}

		rootCopy = obj[root.val];
		let neighborCopy = obj[neighbor.val];

		rootCopy.neighbors.push(neighborCopy);

		if (neighbor.state === "unvisited") dfsVisit(neighbor, obj);
	}
	
	root.state = "visited";
}
 
const main = () => {
	let graphToClone = cgraph([1, 2, 3, 4, 5]);
	cloneGraph(graphToClone[1]);
}
 
main();