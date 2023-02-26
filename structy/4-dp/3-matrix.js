// count paths
const countPaths = (grid) => {
  let save   = {};
  let finalX = grid.length - 1;
  let finalY = grid[0].length - 1;

  let aux = (x = 0, y = 0) => {
    let key = x + ',' + y;
    let out = x > finalX || y > finalY;
    
    if (key in save) return save[key];
    if (out || grid[x][y] === 'X') return 0;
    if (x === finalX && y === finalY) return 1;
    
    let right = aux(x + 1, y);
    let down  = aux(x, y + 1);
    
    save[key] = right + down;
    return save[key];
  }
  
  return aux();
};

// max pathSum
const maxPathSum = (grid) => {
    let save = {};
    let endX = grid.length - 1;
    let endY = grid[0].length - 1;
    
    let aux = (x = 0, y = 0) =>{
      let key = x + ',' + y;
      let out = x > endX || y > endY;
  
      if (key in save) return save[key];  
      if (out) return -Infinity;
      if (x === endX && y === endY) return grid[x][y];  
       
      let right = aux(x + 1, y)
      let down  = aux(x, y + 1)
      
      save[key] = grid[x][y] + Math.max(right, down);
      return save[key];
    }
    
    return aux();
  };

  // breaking boundaries
  const breakingBoundaries = (m, n, k, r, c, memo={}) => {
    const key = `${k},${r},${c}`;
    if (key in memo) return memo[key];
    
    const rowInbounds = 0 <= r && r < m;
    const colInbounds = 0 <= c && c < n;
    if (!rowInbounds || !colInbounds) return 1;
    
    if (k === 0) return 0;
    
    let count = 0;
    const deltas = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    for (let delta of deltas) {
      const [ dRow, dCol ] = delta;
      count += breakingBoundaries(m, n, k - 1, r + dRow, c + dCol, memo);
    }
    
    memo[key] = count;
    return count;
};