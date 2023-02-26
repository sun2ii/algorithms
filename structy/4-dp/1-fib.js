// fibonacci 
const fib = (n) => {
  let memo = {}
  let aux = n => {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];
    
    memo[n] = aux(n - 2) + helper(n - 1);
    return memo[n];
  }
  
  return aux(n);
};

// tribonacci
const tribonacci = (n) => {
    let memo = {};
    let aux = n => {
      if (n <= 1) return 0;
      if (n === 2) return 1;
      if (memo[n]) return memo[n];
      
      memo[n] = aux(n - 1) + aux(n - 2) + aux(n - 3);
      return memo[n];
    }
    
    return aux(n);
  };