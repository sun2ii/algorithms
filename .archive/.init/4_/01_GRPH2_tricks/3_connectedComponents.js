const u = require('../../__common/utils');
const { cgraph } = require('../../__data_structures/5_graph');
 
// Time  o()
// Space o()
const connectedComponents = a => {
	let color = 0;

	for (let val in a) {
		let node = a[val];
		if (node.state === "unvisited") dfsVisit(node, color++);
	}
	console.log('a', a)
}

const dfsVisit = (node, color) => {
	node.state = "visiting";
	node.color = color;

	for (let i = 0; i < node.length; i++) {
		let neighbor = node[i].neighbors;
		if (neighbor.state === "unvisited") dfsVisit(neighbor, color);
	}

	node.state = "visited";
}
 
const main = () => {
	connectedComponents(cgraph([1, 2, 3, 4, 5]));
}
 
main();