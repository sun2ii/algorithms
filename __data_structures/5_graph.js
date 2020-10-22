class Graph {
	constructor() {
		this.nodes = {};
	}

	addVertex(vertex) {
		if (!this.nodes[vertex]) this.nodes[vertex] = [];
	}

	addEdge(a, dest) {
		if (!this.nodes[a]) this.addVertex(a);
		if (!this.nodes[dest]) this.addVertex(dest);

		this.nodes[a].push(dest);
		this.nodes[dest].push(a);
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

module.exports = {
	Graph
}