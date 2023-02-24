// paired parentheses
const pairedParentheses = (s) => {
    let c = 0;
    
    for (let ch of s) {
      if (ch === '(') c++;
      else if (ch === ')') {
        c--;
        if (c < 0) return false;
      }
    }
    
    return c === 0;
  };


// befitting brackets
const befittingBrackets = (s) => {
    let hash = {
      '(': ')',
      '[': ']',
      '{': '}'
    }
    
    let st = [];
    
    for (let c of s) {
      if (c in hash) st.push(hash[c]);
      else {
        if (st.length > 0 && st[st.length - 1] === c) st.pop();
        else return false;
      }
    }
    
    return st.length === 0;
};


// nesting score
const nestingScore = (str) => {
    let st = [0];
    
    for (let c of str) {
      if (c === '[') st.push(0);
      else {
        let pop = st.pop();
        if (pop === 0) st[st.length - 1] += 1;
        else st[st.length - 1] += 2 * pop;
      }
    }
    
    return st[0];
  };
