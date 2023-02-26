// inpre: think bfsQueue
var buildTreeInPre = function(pre, inorder) {
    let aux = {};
    for (let i = 0; i < inorder.length; i++) aux[inorder[i]] = i;

    let dfs = (left, right) => {
        if (left > right) return null;
        let r = new TreeNode(pre.shift());
        let m = aux[r.val];
        r.left  = dfs(left, m - 1);
        r.right = dfs(m + 1, right);

        return r;
    }

    return dfs(0, pre.length - 1);
};

// inpost: think dfsStack
var buildTreeInPost = function(inorder, post) {
    let aux = {};
    for(let i = 0; i < inorder.length; i++) aux[inorder[i]] = i;
    
    let dfs = (left, right) => {
        if (left > right) return null;
        let r = new TreeNode(post.pop());
        let m = aux[r.val];
        r.right = dfs(m + 1, right);
        r.left  = dfs(left, m - 1);
        return r;
    }

    return dfs(0, post.length - 1);
}