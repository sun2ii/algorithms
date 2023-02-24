const binarySearch = (numbers, target) => {
    let lo = 0;
    let hi = numbers.length - 1;
    while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (target < numbers[mid]) {
        hi = mid - 1;
      } else if (target > numbers[mid]) {
        lo = mid + 1;
      } else {
        return mid;
      }
    }
    return -1;
};

// bst 
const binarySearchTreeIncludes = (root, target) => {
    if (root === null) return false;
    
    if (root.val === target) return true;
    
    if (target < root.val) {
      return binarySearchTreeIncludes(root.left, target);
    } else {
      return binarySearchTreeIncludes(root.right, target);
    }
};

// is BST
const isBinarySearchTree = (root, target) => {
    const values = [];
    inOrderTraversal(root, values);
    return isSorted(values);
};
  
const inOrderTraversal = (root, values) => {
    if (root === null) return;
    inOrderTraversal(root.left, values);
    values.push(root.val);
    inOrderTraversal(root.right, values);
};
  
const isSorted = (numbers) => {
    for (let i = 0; i < numbers.length - 1; i += 1) {
      const current = numbers[i];
      const next = numbers[i + 1];
      if (next < current) return false;
    }
    
    return true;
};