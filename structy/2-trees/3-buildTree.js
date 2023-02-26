// inpre: think bfsQueue
var buildTreeInPre = function(pre, inorder) {
    let aux = {};
    for (let i = 0; i < inorder.length; i++) aux[inorder[i]] = i;

    let dfs = (left, right) => {
        if (left > right) return null;
        let node = new TreeNode(pre.shift());
        let mid  = aux[node.val];

        node.left  = dfs(left, mid - 1);
        node.right = dfs(mid + 1, right);

        return node;
    }

    return dfs(0, pre.length - 1);
};

// inpost: think dfsStack
var buildTreeInPost = function(post, inorder) {
    let aux = {};
    for(let i = 0; i < inorder.length; i++) aux[inorder[i]] = i;
    
    let dfs = (left, right) => {
        if (left > right) return null;
        let node = new TreeNode(post.pop());
        let mid  = aux[node.val];

        node.right = dfs(mid + 1, right);
        node.left  = dfs(left, mid - 1);

        return node;
    }

    return dfs(0, post.length - 1);
}