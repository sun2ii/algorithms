// has cycle
const hasCycle = (graph) => {
    let visited  = new Set();
    let currVisit = new Set();
    
    let dfs = n => {
      if (visited.has(n)) return false;
      if (currVisit.has(n)) return true;
      
      currVisit.add(n);
      
      for (let nb of graph[n]) {
        if (dfs(nb)) return true;
      }
      
      currVisit.delete(n);
      visited.add(n);
      
      return false;
    }
    
    for (let n in graph) {
      if (dfs(n)) return true;
    }
    
    return false;
  };

// prereqs possible
const prereqsPossible = (numCourses, prereqs) => {
  let graph       = buildGraph(numCourses, prereqs);
  let visited     = new Set();
  let currVisited = new Set();
  
  let dfs = n => {
    if (visited.has(n)) return false;
    if (currVisited.has(n)) return true;
    
    cv.add(n);
    for (let nb of graph[n]) {
      if (dfs(nb)) return true;
    }
    
    currVisited.delete(n);
    visited.add(n);
    
    return false;
  }
  
  for (let n in graph) {
    if (dfs(n)) return false;
  }
  
  return true;
};
