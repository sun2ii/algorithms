const u = require("../__common/utils");

class Graph {
	constructor() {
		this.nodes = {};
	}

	addVertex(vertex) {
		if (!this.nodes[vertex]) this.nodes[vertex] = {};
	}

	addEdge(a, dest) {
		if (!this.nodes[a]) this.addVertex(a);
		if (!this.nodes[dest]) this.addVertex(dest);

		if (this.nodes[a].neighbors === undefined) 
			this.nodes[a].neighbors = [this.nodes[dest]];
		else 
			this.nodes[a].neighbors.push(this.nodes[dest])

		if (this.nodes[dest].neighbors === undefined) 
			this.nodes[dest].neighbors = [this.nodes[a]];
		else 
			this.nodes[dest].neighbors.push(this.nodes[a]);
	}

	removeVertex(vertex) {
		while (this.nodes[vertex]) {
			const adjacentVertex = this.nodes[vertex].pop();
			this.removeEdge(vertex, adjacentVertex);
		}

		delete this.nodes[vertex];
	}

	removeEdge(a, dest) {
		this.nodes[a] = this.nodes[a].filter(vertex => vertex !== dest);
		this.nodes[dest] = this.nodes[dest].filter(vertex => vertex !== a);
	}

	checkNeighbors(vertex) {
		return this.nodes[vertex];
	}

	areNeighbors(a, b) {
		return this.nodes[a].includes(b);
	}
}

const createNode = val => {
	return {
		state: "unvisited",
		neighbors: [],
		val: val
	}
}

const cgraph = (a, top = false) => {
	let res = new Graph();

	for (let i = 0; i < a.length; i++) {
		res.addVertex(a[i]);
	}

	if (!top) {
		for (let i = 1; i < a.length; i++) {
			res.addEdge(a[i], a[i] - 1)
		}
	} else {
		res.addEdge(1, 2);
		res.addEdge(1, 4);
		res.addEdge(2, 4);
		res.addEdge(2, 3);
		res.addEdge(2, 5);
	}

	for (let key in res.nodes) {
		res.nodes[key].state = "unvisited";
		res.nodes[key].val = parseInt(key);
		if (top) res.nodes[key].longestPath = 0;
	}

	return res.nodes;
}


module.exports = {
	Graph,
	createNode,
	cgraph
}