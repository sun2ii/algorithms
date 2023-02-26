// lowest common ancestor
const lowestCommonAncestor = (root, val1, val2) => {
    const findPath = (root, targetVal) => {
        if (root === null) return null;
        if (root.val === targetVal) return [ root.val ];

        const leftPath = findPath(root.left, targetVal);
        if (leftPath !== null) {
            leftPath.push(root.val);
            return leftPath;
        }

        const rightPath = findPath(root.right, targetVal);
        if (rightPath !== null) {
            rightPath.push(root.val);
            return rightPath;
        }  

        return null;
    };

    const path1 = findPath(root, val1);
    const path2 = findPath(root, val2);
    const set2 = new Set(path2);

    for (let val of path1) {
        if (set2.has(val)) return val;
    }
};
  

// flip tree
const flipTree = (root) => {
    if (root === null) return null;
    const left = flipTree(root.left);
    const right = flipTree(root.right);
    root.right = left;
    root.left = right;
    return root;
};

// lefty nodes
const leftyNodes = (root) => {
    const values = [];
    
    const traverse = (node, level) => {
      if (node === null) return;
      
      if (values[level] === undefined) values.push(node.val);
      
      traverse(node.left, level + 1);
      traverse(node.right, level + 1);
    };
    
    traverse(root, 0);
    return values;
};