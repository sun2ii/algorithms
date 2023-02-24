// island count
const islandCount = (grid) => {
    let count = 0;
    
    let dfs = (x, y) => {
      let out = x < 0 || y < 0 || x >= grid.length || y >= grid[0].length;
      if (out || grid[x][y] === 'W') return;
      
      grid[x][y] = 'W';  
      dfs(x + 1, y);
      dfs(x - 1, y);
      dfs(x, y + 1);
      dfs(x, y - 1);
      
      return true;
    }
  
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (dfs(i, j)) count++
      }
    }
    
    return count; 
};

// minimum island
const minimumIsland = (grid) => {
    let min     = Infinity;
    let visited = new Set();
    
    let dfs = (x, y) => {
      let out = x < 0 || y < 0 || x >= grid.length || y >= grid[0].length;
      if (out || grid[x][y] === 'W') return 0;

      let p = x + ',' + y;
      if (visited.has(p)) return 0;
      visited.add(p);
      
      let count = 1;  
      count += dfs(x + 1, y)
      count += dfs(x - 1, y)
      count += dfs(x, y + 1)
      count += dfs(x, y - 1)
      
      return count;
    }
  
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        let size = dfs(i, j);
        if (size > 0 && size < min) min = size;
      }
    }
    
    return min;
};

// string search
const stringSearch = (grid, s) => {
  for (let r = 0; r < grid.length; r += 1) {
      for (let c = 0; c < grid[0].length; c += 1) {
          if (dfs(grid, s, r, c)) return true;
      }
  }
  return false;
};

const dfs = (grid, s, row, col) => {
  const rowInbounds = 0 <= row && row < grid.length;
  const colInbounds = 0 <= col && col < grid[0].length;
  if (s === '') return true;
  
  if (!rowInbounds || !colInbounds) return false;
  
  const char = grid[row][col];
  if (char !== s[0]) return false;
  
  const suffix = s.slice(1);
  grid[row][col] = '*';

  const result = dfs(grid, suffix, row + 1, col) ||
      dfs(grid, suffix, row - 1, col) ||
      dfs(grid, suffix, row, col + 1) ||
      dfs(grid, suffix, row, col - 1);

  grid[row][col] = char;
  return result;
};