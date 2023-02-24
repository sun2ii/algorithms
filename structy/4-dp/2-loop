// sum possible
const sumPossible = (x, a) => {
  let save = {}
  let flag = false;
  
  let aux = x => {
    if (x in save) return save[x];
    if (x === 0) {
      flag = true; 
      return;
    }
    
    if (x < 0) return false;
    
    for (let i = 0; i < a.length; i++) {
      save[x] = aux(x - a[i])
    }
  }
  
  aux(x);
  return flag;
};

// min change
const minChange = (x, a) => {
    let save = {};
    
    let aux = x => {
      if (x in save) return save[x];
      if (x === 0) return 0;
      if (x < 0) return Infinity;
      
      let min = Infinity;
      for (let coin of a) {
        min = Math.min(min, 1 + aux(x - coin));
      }
      save[x] = min;

      return save[x];
    }
    
    return aux(x) === Infinity ? -1 : aux(x);
};

// summing squares
const summingSquares = (n) => {
    let save = {};
    let squares = [1];
    let x = 2;

    while (x * x <= n) {
        squares.push(x * x)
        x++;
    }

    let aux = n => {
        if (n in save) return save[n];
        if (n === 0) return 0;
        if (n < 0) return Infinity;  
        
        let min = Infinity;
        for (let i = 0; i < squares.length; i++) {
        let curr = 1 + aux(n - squares[i]);
        min = Math.min(curr, min);
        }
        
        save[n] = min;
        return save[n];
    }

    return aux(n);
};

// counting change
const countingChange = (x, a) => {
    let save = {};
  
    let aux = (x, i = 0) => {
      let key  = x + ',' + i;
      let coin = a[i];
      
      if (key in save) return save[key];
      if (x === 0) return 1;
      if (i === a.length) return 0;
      
      let count = 0;  
      for (let q = 0; (q * coin) <= x; q++) {
        let remainder = x - (q * coin);
        count += aux(remainder, i + 1);
      }
      
      save[key] = count;
      return count;
    }
    
    return aux(x);
};

// knightly number
const knightlyNumber = (n, m, kr, kc, pr, pc) => {
    let save = {};
  
    let aux = (x, y, m) => {
      // cache
      let key = m + ',' + x + ',' + y;
      if (key in save) return save[key];
  
      let out = x < 0 || y < 0 || x >= n || y >= n;
      let knightMoves = getKnightMoves(x, y);
      
      // base case
      if (out) return 0;
      if (m === 0) return x === pr && y === pc ? 1 : 0;
      
      // recursive case 
      let count = 0;
      for (let move of knightMoves) {
        let [ xD, yD ] = move;
        count += aux(xD, yD, m - 1);
      }
      
      save[key] = count;
      return count;
    }
    
    return aux(kr, kc, m);
};
  
let getKnightMoves = (x, y) => {
    return [
      [x + 2, y + 1],
      [x + 2, y - 1],
      [x - 2, y + 1],
      [x - 2, y - 1],
      [x + 1, y + 2],
      [x + 1, y - 2],
      [x - 1, y + 2],
      [x - 1, y - 2],
    ];
}

// positioning plants
const positioningPlants = (costs, pos=0, lastPlant=null, memo={}) => {
    const key = pos + ',' + lastPlant;
    if (key in memo) return memo[key];
    
    if (pos === costs.length) return 0;
    
    let min = Infinity;
    for (let plant = 0; plant < costs[pos].length; plant += 1) {
      if (plant !== lastPlant) {      
        const candidate = costs[pos][plant] + positioningPlants(costs, pos + 1, plant, memo);
        min = Math.min(min, candidate);
      }
    }
    
    memo[key] = min;
    return min;
};