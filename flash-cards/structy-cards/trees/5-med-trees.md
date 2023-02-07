# DFS 2
1. max-root-to-leaf-path-sum
  a. dfs-> 
      if (!c) return Inf
      if (!cr&!cl) return cv
      return max(dfs(cl), dfs(cr)) + cv

2. tree-val-count
  dfs->
    if (!c) return 0
    l = dfs(cl); r = dfs(cr); c = cv = x ? 1 : 0
    return l + r + c

3. single-tree-path
  dfs->
      if (!c) return
      if (cv = x) return [ cv ]
      l = dfs(cl); r = dfs(cr)
      if rl: +rl(cv); return rl.rev()

4. all-tree-paths
  dfs->
    if (!c) return []
    if (cv = x) return [ [ cv ] ] 
    l = dfs(cl); r = dfs(cr)
    -f>rl : +res([cv, ...subpath)



