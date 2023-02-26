// bottom right value
const bottomRightValue = (root) => {
    if (!root) return null;
    let q = [ root ];
    
    while (q[0]) {
      let node = q.shift();
      
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    
    return node.val;
  };

// array of tree levels
 const treeLevels = (root) => {
    if (!root) return [];
    let q   = [ { node : root, lvl : 0 } ];
    let res = [];
    
    while (q.length > 0) {
      let { node, lvl } = q.shift();
      
      if (res.length === lvl) res[lvl] = [node.val];
      else res[lvl].push(node.val);
      
      if (node.left)  q.push({node : node.left, lvl: lvl + 1}) 
      if (node.right) q.push({node : node.right, lvl: lvl + 1}) 
    }
    
    return res;
  };

  // level averages
  const levelAverages = (root) => {
    if (!root) return [];
    let q = [ {node: root, level: 0} ];
    let res = [];
    let avg = [];
    
    while (q[0]) {
      let { node, level } = q.shift();
      
      if (res.length === level) res.push([node.val]);
      else res[level].push(node.val);
      
      if (node.left) q.push({ node: node.left, level: level + 1})
      if (node.right)  q.push({ node: node.right, level: level + 1})
    }
  
    let sum = arr => {
      let sum = 0;
      for (let item of arr) sum += item;
      return sum;
    }

    for (let i = 0; i < res.length; i++) {
      avg.push(sum(res[i]) / res[i].length);
    }
  
    return avg;
  };
  