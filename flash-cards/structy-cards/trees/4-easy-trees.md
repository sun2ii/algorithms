# DFS
1. tree-sum
  any-> sum += cv

2. tree-includes
  any-> (cv = x) return true

3. tree-min-val
  any-> (cv < min) min = cv

4. leaf-list
  dfs->
    if(!n) return
    if(n&!nr&!nl) +res(nv)

5. how-high
  dfs->
    if (!c) return -1
    l = dfs(cl); r = dfs(cr)
    return max(l, r) + 1

