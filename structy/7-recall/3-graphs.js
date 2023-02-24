const canColor = (graph) => {
    const coloring = {};
    
    for (let node in graph) {
      if (!(node in coloring)) {
        if (!valid(graph, node, coloring, false)) {
          return false;
        }
      }
    }
    
    return true;
};
  
const valid = (graph, node, coloring, currentColor) => {
    if (node in coloring) return currentColor === coloring[node];

    coloring[node] = currentColor;

    for (let neighbor of graph[node]) {
        if (!valid(graph, neighbor, coloring, !currentColor)) {
        return false;
        }
    }

    return true;
};

// tolerant teams
const tolerantTeams = (rivalries) => {
    const graph = buildGraph(rivalries);
    
    const coloring = {};
    for (let node in graph) {
      if (!(node in coloring) && !isBipartite(graph, node, coloring, false)) {
        return false;
      }
    }
    
    return true;
};
  
const isBipartite = (graph, node, coloring, currentColor) => {
    if (node in coloring) return coloring[node] === currentColor;

    coloring[node] = currentColor;

    for (let neighbor of graph[node]) {
        if (!isBipartite(graph, neighbor, coloring, !currentColor)) {
        return false;
        }
    }

    return true;
};

// rare routing
const rareRouting = (n, roads) => {
  const graph = buildGraph3(n, roads);
  const visited = new Set();
  const valid = validate(graph, '0', visited, null);
  return valid && visited.size === n;
};

const validate = (graph, node, visited, lastNode) => {
  if (visited.has(node)) return false;
  
  visited.add(node);
  
  for (let neighbor of graph[node]) {
    if (neighbor !== lastNode) {
      if (!validate(graph, neighbor, visited, node)) {
        return false;
      }
    }
  }
  
  return true;
};
