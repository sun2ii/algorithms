// max path sum
const maxPathSum = (root) => {
    let dfs = node => {
      if (!node) return -Infinity;
      if (node && !node.left && !node.right) return node.val;

      let left  = dfs(root.left);
      let right = dfs(root.right);
    
      return node.val + Math.max(left, right);
    }

    return dfs(root);
};

// height of tree
const treeHeight = (root) => {
    let dfs = node => {
      if (!node) return -1;
    
      let left  = dfs(node.left);
      let right = dfs(node.right);
      
      return 1 + Math.max(left, right);
    }

    return dfs(root);
  };

// find x path
const pathFinder = (root, x) => {
    let dfs = node => {
      if (!node) return null ;
      if (node.val === x) return [ node.val ]
      
      let left  = dfs(node.left);
      let right = dfs(node.right);
      
      if (left) {
        left.push(node.val);
        return left;
      }
      
      if (right) {
        right.push(node.val);
        return right;
      }
      
      return null;
    }
    
    return dfs(root) ? dfs(root).reverse() : null;
};

// all tree paths
const allTreePaths = (root) => {
    let res = [];
    if (!root) return [];
    if (!root.right && !root.left) return [ [ root.val ] ];
    
    let left = allTreePaths(root.left);
    for (let sub of left) res.push([root.val, ...sub])
      
    let right = allTreePaths(root.right);
    for (let sub of right) res.push([root.val, ...sub])
    
    return res;
};