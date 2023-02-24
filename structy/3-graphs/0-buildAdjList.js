let buildGraph = edges => {
    let graph = {};
    
    for (let [a, b] of edges) {
      if (!(a in graph)) graph[a] = [];
      if (!(b in graph)) graph[b] = [];
      graph[a].push(b);
      graph[b].push(a);
    }
  
    return graph;
}

let buildPrereq = (numCourses, p) => {
  let graph = {};
  
  for (let i = 0; i < numCourses; i += 1) graph[i] = [];
  
  for (let prereq of p) {
    const [a, b] = prereq;
    graph[a].push(b);
  }
  
  return graph;
}

const buildGraph2 = (rivalries) => {
    const graph = {};
    for (let pair of rivalries) {
        const [a, b] = pair;
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push(b);
        graph[b].push(a);
    };

    return graph;
};

const buildGraph3 = (n, roads) => {
  const graph = {};
  for (let city = 0; city < n; city += 1) {
    graph[city] = [];
  }
  
  for (let road of roads) {
    const [a, b] = road;
    graph[a].push(String(b));
    graph[b].push(String(a));
  }
  
  return graph;
};