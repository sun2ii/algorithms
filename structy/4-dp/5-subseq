// max palindrome subsequence
const maxPalinSubsequence = s => {
  let save = {};

  let aux = (i = 0, j = s.length - 1) => {
    let key = i + ',' + j;
    if (key in save) return save[key];
    if (i === j) return 1;
    if (i > j) return 0;
    if (s[i] === s[j]) save[key] = aux(i + 1, j - 1) + 2;
    else {
      save[key] = Math.max(
        aux(i + 1, j),
        aux(i, j - 1)
      )
    }
    
    return save[key];
  }
  
  return aux();
};

// overlap subsequence
const overlapSubsequence = (s1, s2) => {
    let save = {};
    
    let aux = (i = 0, j = 0) => {
      let key = i + ',' + j;
      if (key in save) return save[key];
      if (i === s1.length || j === s2.length) return 0;
      if (s1[i] === s2[j]) save[key] = aux(i + 1, j + 1) + 1;
      else {
        save[key] = Math.max(
          aux(i + 1, j),
          aux(i, j + 1)
        )
      }
      
      return save[key];
    }
    
    return aux();
};

// max increasing subseq
const maxIncreasingSubseq = (numbers, i = 0, previous = -Infinity, memo = {}) => {
    const key = i + ',' + previous;
    if (key in memo) return memo[key];
    if (i === numbers.length) return 0;
  
    const options = [];
    const dontTakeCurrent = maxIncreasingSubseq(numbers, i + 1, previous, memo);
    options.push(dontTakeCurrent);
    
    const current = numbers[i];
    if (current > previous) {
      const takeCurrent = 1 + maxIncreasingSubseq(numbers, i + 1, current, memo);
      options.push(takeCurrent);
    }
    
    memo[key] = Math.max(...options);
    return memo[key];
};
