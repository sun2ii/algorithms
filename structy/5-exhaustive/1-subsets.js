// subsets
const subsets = a => {
    if (a.length === 0) return [[]];
    let wFirst  = [];
    let other = subsets(a.slice(1));
    
    for (let sub of other) {
      wFirst.push([a[0], ...sub]);
    }
    
    return [...wFirst, ...other];
};
  
  
// permutations
const permutations = (items) => {
    if (items.length === 0) return [[]];
    const fullPermutations = [];
    const other = permutations(items.slice(1));

    for (let perm of other) {
        for (let i = 0; i <= perm.length; i += 1) {
            fullPermutations.push([ ...perm.slice(0, i), a[0], ...perm.slice(i) ]);
        } 
    }
    return fullPermutations;
};

// create combinations
const createCombinations = (items, k) => {
    if (items.length < k) return [];
  
    if (k === 0) return [[]];
  
    const first = items[0];
    const combosWithFirst = [];
    for (let combo of createCombinations(items.slice(1), k - 1)) {
      combosWithFirst.push([first, ...combo]);
    }
  
    const combosWithoutFirst = createCombinations(items.slice(1), k);
    return [...combosWithFirst, ...combosWithoutFirst];
  };