// bottom right value
const bottomRightValue = (root) => {
    if (!root) return null;
    let q = [ root ];
    let c;
    
    while (q.length > 0) {
      c = q.shift();
      
      if (c.left) q.push(c.left);
      if (c.right) q.push(c.right);
    }
    
    return c.val;
  };

// array of tree levels
 const treeLevels = (root) => {
    if (!root) return [];
    let q   = [ { n : root, lvl : 0 } ];
    let res = [];
    
    while (q.length > 0) {
      let { n, lvl } = q.shift();
      
      if (res.length === lvl) res[lvl] = [n.val];
      else res[lvl].push(n.val);
      
      if (n.left)  q.push({n : n.left, lvl: lvl + 1}) 
      if (n.right) q.push({n : n.right, lvl: lvl + 1}) 
    }
    
    return res;
  };

  // level averages
  const levelAverages = (root) => {
    if (!root) return [];
    let q = [ {node: root, level: 0} ];
    let res = [];
    let avg = [];

    let sum = arr => {
      let sum = 0;
      for (let item of arr) sum += item;
      return sum;
    }
    
    while (q.length) {
      let { node, level } = q.shift();
      
      if (res.length === level) res.push([node.val]);
      else res[level].push(node.val);
      
      if (node.left) q.push({ node: node.left, level: level + 1})
      if (node.right)  q.push({ node: node.right, level: level + 1})
    }
  
    for (let i = 0; i < res.length; i++) {
      avg.push(sum(res[i]) / res[i].length);
    }
  
    return avg;
  };
  