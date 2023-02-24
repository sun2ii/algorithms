// tree includes
const treeIncludes = (root) => {
  if (!root) return [];
  let res = [];

  let dfs = c => {
    if (!c) return;
    res.push(c.val);
    
    if (c.left) dfs(c.left);
    if (c.right) dfs(c.right);
  }
  
  dfs(root);
  return res;
};

// tree sum
const treeSum = (root) => {
  if (!root) return 0;
  let sum = 0;
  
  let dfs = c => {
    if (!c) return 0;
    sum += c.val;
    if (c.left) dfs(c.left);
    if (c.right) dfs(c.right);
  }
  
  dfs(root)
  return sum;
};

// tree min
const treeMinValue = (root) => {
  if (!root) return 0;
  let min = Infinity;
  
  let dfs = c => {
    if (!c) return min;
    if (c.val < min) min = c.val;

    if (c.left) dfs(c.left);
    if (c.right) dfs(c.right);
  }
  
  return min;
};

// leaf array
const leafList = (root) => {
  let res = [];
  
  let dfs = node => {
    if (!node) return;
    if (node && !node.left && !node.right) res.push(node.val);
    
    dfs(node.left);
    dfs(node.right);
  }
  
  dfs(root);
  return res;
};

// find target path
const pathFinder = (root, target) => {
    if (!root) return null;
    
    let dfs = curr => {
      if (!curr) return null ;
      if (curr.val === target) return [ curr.val ]
      
      let leftPath  = dfs(curr.left);
      let rightPath = dfs(curr.right);
      
      if (leftPath) {
        left.push(curr.val);
        return left;
      }
      
      if (rightPath) {
        rightPath.push(curr.val);
        return rightPath;
      }
      
      return null;
    }
    
    return dfs(root) ? dfs(root).reverse() : null;
};

// post order traversal
const postOrder = (root) => {
    const values = [];
    postOrderTraversal(root, values);
    return values;
};
  
const postOrderTraversal = (root, values) => {
    if (root === null) return;
    postOrderTraversal(root.left, values);
    postOrderTraversal(root.right, values);
    values.push(root.val);
};