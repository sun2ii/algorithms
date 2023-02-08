# Two Sets (visit)
1. has-cycle
  v,cv=set()
    f->(n in graph): ?(dfs(n)) &=t
    &=f

  dfs(n)->
    ?(v.has(n)) &=f; ?(cv.has(n)) &=t; 
    +cv(n)
    f->(nb of g[n]): ?(dfs(nb)) &=t
    -cv(n)
    +v(n)
    &= f

2. prereqs-possible
  v,cv=set()
    f->(n in graph): ?(dfs(n)) &=f
    &=t

  dfs(n)->
    ?(v.has(n)) &=f; ?(cv.has(n)) &=t; 
    +cv(n)
    f->(nb of g[n]): ?(dfs(nb)) &=t
    -cv(n)
    +v(n)
    &= f
