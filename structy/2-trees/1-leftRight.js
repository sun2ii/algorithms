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


// all tree paths
const allTreePaths = (root) => {
    if (!root) return [];
    if (!root.right && !root.left) return [ [ root.val ] ];
    
    let res = [];
    
    let left = allTreePaths(root.left);
    for (let sub of left) res.push([root.val, ...sub])
      
    
    let right = allTreePaths(root.right);
    for (let sub of right) res.push([root.val, ...sub])
    
    return res;
};

// find target path
const pathFinder = (root, target) => {
    let dfs = node => {
      if (!node) return null ;
      if (node.val === target) return [ node.val ]
      
      let leftPath  = dfs(node.left);
      let rightPath = dfs(node.right);
      
      if (leftPath) {
        left.push(node.val);
        return left;
      }
      
      if (rightPath) {
        rightPath.push(node.val);
        return rightPath;
      }
      
      return null;
    }
    
    return dfs(root) ? dfs(root).reverse() : null;
};