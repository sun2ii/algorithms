const u = require('../../__common/utils');
const { Graph } = require('../../__data_structures/5_graph');
 
// Time  o(n) (find neighbors)
// Space o(v + e)
const graphClassMethods = a => {
	let g = new Graph();
	g.addVertex(1);
	g.addVertex(2);
	g.addVertex(3);
	g.addVertex(4);
	g.addVertex(5);

	g.addEdge(2, 3);
	g.addEdge(3, 4);
	g.addEdge(4, 5);
	console.log('g', g)

	console.log('g.checkNeighbors(3)', g.checkNeighbors(3))
	console.log('g.areNeighbors(2, 3)', g.areNeighbors(2, 3))
	console.log('g.areNeighbors(1, 5)', g.areNeighbors(1, 5))
}
 
const main = () => {
	graphClassMethods();
}
 
main();