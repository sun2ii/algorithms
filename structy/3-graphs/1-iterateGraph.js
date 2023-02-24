// Has Path
const hasPath = (graph, src, dst) => {
    let visited = new Set();

    let dfs = () => {
        if (src === dst) return true;
        if (visited.has(src)) return false;
        visited.add(src);
        
        for (let nb of graph[src]) {
            if (hasPath(graph, nb, dst, visited)) return true; 
        }
        
        return false;
    }

    return dfs();
};

// count connected components
const connectedComponentsCount = (graph) => {
    let count   = 0;
    let visited = new Set();
    
    let dfs = n => {
      if (visited.has(String(n))) return false
      visited.add(String(n));
      
      for (let nb of graph[n]) dfs(nb);
      
      return true;
    }
  
    for (let node in graph) 
      if (dfs(node)) count++;
    
    return count;
};

// largest connected component
const largestComponent = (graph) => {
  let largest = 0;
  let visited = new Set();
  
  let dfs = n => {
    if (visited.has(String(n))) return 0;
    visited.add(String(n));
    
    let size = 1;
    for (let nb of graph[n]) size += dfs(nb);

    return size;
  }

  for (let node in graph) {
    let size = dfs(node);
    if (size > largest) largest = size;
  }
  
  return largest;
};

// longest path
const longestPath = (graph) => {
    let distance = {};
  
    for (let n in graph) {
      if (graph[n].length === 0) distance[n] = 0;
    }

    let dfs = (graph, node, distance) => {
        if (node in distance) return distance[node];
        
        let max = 0;
        for (let nb of graph[node]) {
            let attempt = dfs(graph, nb, distance);
            if (attempt > max) max = attempt;
        }
        
        distance[node] = 1 + max;
        return distance[node];
    }
    
    for (let n in graph) {
      dfs(graph, n, distance);
    }
    
    return Math.max(...Object.values(distance));
};
  
// semesters required
const semestersRequired = (numCourses, prereqs) => {
    let graph = build(numCourses, prereqs);
    let dist  = {};
    
    let dfs = (node, dist) => {
      if (node in dist) return dist[node];
      let maxDist = 0;
      for (let nb of graph[node]) {
        let nbDist = dfs(nb, dist);
        if (nbDist > maxDist) maxDist = nbDist;
      }
      
      dist[node] = maxDist + 1;
      return dist[node];
    }
    
    for (let i = 0; i < numCourses; i++) {
      if (graph[i].length === 0) dist[i] = 1;
    }
    
    for (let i = 0; i < numCourses; i++) {
      dfs(i, dist);
    }
    
    return Math.max(...Object.values(dist));
  };
