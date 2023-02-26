// can concat
const canConcat = (s, words) => {
  let save = {};

  let aux = s => {
    if (s in save) return save[s];
    if (s.length === 0) return true;

    for (let word of words) {
      if (s.startsWith(word)) {
        if (aux(s.slice(word.length))) {
          save[s] = true;
          return true;
        }
      }
    }
    
    save[s] = false;
    return false;
  }
  
  return aux(s);
};

// quickest concat
const quickestConcat = (s, words) => {
    let save = {};
  
    let aux = s => {
      if (s in save) return save[s];
      if (s.length === 0) return 0;
  
      let min = Infinity;
      for (let word of words) {
        if (s.startsWith(word)) {
          min = Math.min(min, 1 + aux(s.slice(word.length)));
        }
      }
      
      return save[s] = min;
    }
    
    let res = aux(s);
    return res === Infinity ? -1 : res;
};
