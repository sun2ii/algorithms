## Post Order
1. invert-tree
  dfs-> lr = dfs(lr)
    swap[rr, rl]

2. trim-tree
  dfs-> lr = dfs(lr)
    if (rv < x) return r.right
    if (rv > x) return r.left

3. tilt
  dfs-> lr = dfs(lr)
    tilt += abs(l - r)
    return rv + left + right

4. max-path-x
  dfs-> lr = dfs(lr);
    -inf res = max(l+r+rv, res)
      return   max(rv+l,rv+r, 0)
    
5. path-sum-3
  pathSum->
    if (!n) return 0
    return dfs(r,x) + pathSum(rl,x) + pathSum(rr,x)

  dfs(r, x)->
    return (rv=x ? 1:0) + dfs(rl, x-rv) + dfs(rr, x-rv)

