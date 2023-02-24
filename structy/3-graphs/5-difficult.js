const bestBridge = (grid) => {
    let out = (grid, x, y) => x < 0 || y < 0 || x >= grid.length || y >= grid[0].length;
    
    let dfs = (grid, x, y, v) => {
        let pos = x + ',' + y;
        
        if (out(grid, x, y) || grid[x][y] === 'W' || v.has(pos)) return v; 
        v.add(pos);
        
        dfs(grid, x + 1, y, v);
        dfs(grid, x - 1, y, v);
        dfs(grid, x, y + 1, v);
        dfs(grid, x, y - 1, v);
        
        return v;
    }

    // find first island
    let one;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === 'L')  {
          one = dfs(grid, i, j, new Set());
        }
      }
    }
    
    // add first island to q
    let q = []
    let v = new Set(one);
    for (let pos of one) {
      let [x, y] = pos.split(',').map(Number);
      q.push([x, y, 0]);
    }
    
    // bfs
    while (q[0]) {
      let [r, c, dist] = q.shift();
      let pos    = r + ',' + c;
      if (grid[r][c] === 'L' && !one.has(pos)) return dist - 1;
      let deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  
      for (let delta of deltas) {
        let [dr, dc] = delta;
        let newRow = dr + r;
        let newCol = dc + c;
        let newPos = newRow + ',' + newCol;
        if (!out(grid, newRow, newCol) && !v.has(newPos)) {
          v.add(newPos);
          q.push([newRow, newCol, dist + 1])
        }
      }
    }
    
    return;
};

// safe cracking
const safeCracking = (hints) => {
  const graph = buildGraph(hints);
  return topologicalOrder(graph);
};

// topological order
const topologicalOrder = (graph) => {
  const numParents = {};
  for (let node in graph) {
      numParents[node] = 0;
  }
  for (let node in graph) {
    for (let child of graph[node]) {
      numParents[child] += 1;
    }
  }
    
  const ready = [];
  for (let node in numParents) {
      if (numParents[node] === 0) {
          ready.push(node);
      }
  }
    
  const order = [];
  while (ready.length > 0) {
    const node = ready.pop();  
    order.push(node);
    for (let child of graph[node]) {
      numParents[child] -= 1;
      if (numParents[child] === 0) {
        ready.push(child);
      }
    }
  }
  return order;
};