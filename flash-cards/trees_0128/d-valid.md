
1. bst
  dfs(r,min,max)-> 
    (!r) &=t; (rv<=min,rv>=max) &=f
    &= dfs(rl, min, rv) & dfs(rr, rv, max)

2. bt
