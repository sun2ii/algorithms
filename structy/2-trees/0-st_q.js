// dfs stack
const dfsStack = (root) => {
  if (!root) return [];
  let ds = [root], res = [];

  while (ds[0]) {
    let node = ds.pop();

    res.push(node.val);

    if (node.right) ds.push(node.right);
    if (node.left)  ds.push(node.left);
  }

  return res;
};

// bfs queue
const bfsQueue = (root) => {
  if (!root) return [];
  let ds = [root], res = [];

  while (ds[0]) {
    let node = ds.shift();

    res.push(node.val);

    if (node.left)  ds.push(node.left);
    if (node.right) ds.push(node.right);
  }

  return res;
};

// x occurs in tree
const treeValueCount = (root, x) => {
  let ds = [ root ], count = 0;

  while (ds[0]) {
    let node = ds.pop();
    if (node.val === x) count++;

    if (node.left) ds.push(node.left);
    if (node.right) ds.push(node.right);
  }

  return count;
};

// tree includes
const treeIncludes = (root, x) => {
  if (!root) return [];

  let dfs = node => {
    if (!node) return;
    if (node.val === x) return true;
    
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  }
  
  dfs(root);

  return false;
};

// tree min
const treeMinValue = (root) => {
  if (!root) return 0;
  let min = Infinity;
  
  let dfs = node => {
    if (!node) return min; 
    if (node.val < min) min = node.val;

    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  }
  
  return min;
};

// tree sum
const treeSum = (root) => {
  if (!root) return 0;
  let sum = 0;
  
  let dfs = node => {
    if (!node) return 0;
    sum += node.val;
    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  }
  
  dfs(root)
  return sum;
}

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

// post order traversal
const postOrder = (root) => {
    const values = [];
    let dfs = node => {
      if (!node) return;

      dfs(node.left);
      dfs(node.right);
      values.push(node.val);
    }

    dfs(root);
    return values;
};