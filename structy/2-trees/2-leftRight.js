// max path sum
const maxPathSum = (root) => {
    if (!root) return -Infinity;
    if (!root.left && !root.right) return root.val;

    let left  = maxPathSum(root.left);
    let right = maxPathSum(root.right);
  
    return root.val + Math.max(left, right);
};

// height of tree
const treeHeight = (node) => {
    if (!node) return -1;
  
    let left  = howHigh(node.left);
    let right = howHigh(node.right);
    
    return Math.max(left, right) + 1;
  };

// x occurs in tree
const treeValueCount = (root, target) => {
  if (!root) return 0;
  
  let match = root.val === target ? 1 : 0;
  let left  = treeValueCount(root.left, target);
  let right = treeValueCount(root.right, target);
  
  return match + left + right;
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