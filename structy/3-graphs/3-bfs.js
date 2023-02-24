// closest carrot
const closestCarrot = (g, r, c) => {
    const q = [ [r, c, 0] ];
    const v = new Set([ r + ',' + c ]);
    
    while (q[0]) {
      const [ row, col, dist ] = q.shift();
      
      if (g[row][col] === 'C') return dist;
      
      const chgs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      for (let chg of chgs)  {
        const [chgRow, chgCol] = chg;
        const newRow = row + chgRow;
        const newCol = col + chgCol;
        const newPos = newRow + ',' + newCol;
        const out    = newRow < 0 || newCol < 0 || newRow >= g.length || newCol >= g[0].length;
        if (!out && !v.has(newPos) && g[newRow][newCol] !== 'X') {
          v.add(newPos);
          q.push([ newRow, newCol, dist + 1 ]);
        }
      }
    }
    
    return -1;
  };

  // knight attack
  const knightAttack = (n, kr, kc, pr, pc) => {
    let q = [[kr, kc, 0]];
    let visited = new Set();
    visited.add(kr + ',' + kc);
    
    let getKnightMoves = (r, c) => {
      let valid = [];
      let moves = [
        [r + 2, c + 1],
        [r + 2, c - 1],
        [r - 2, c + 1],
        [r - 2, c - 1],
        [r + 1, c + 2],
        [r + 1, c - 2],
        [r - 1, c + 2],
        [r - 1, c - 2],
      ];
      for (let m of moves) {
        let [cr, cc] = m;
        if (!out(n, cr, cc)) valid.push(m);
      }
      return valid;
    }
    
    while (q[0]) {
      let [r, c, step] = q.shift();
      if (r === pr && c === pc) return step;  
      let knightMoves = getKnightMoves(r, c);
      
      for (let moves of knightMoves) {
        let [nr, nc] = moves;
        let nKey = nr + ',' + nc;
        if (!visited.has(nKey)) {
          visited.add(nKey);
          q.push([nr, nc, step + 1]);
        }
      }
    }
    
    return null;
  };