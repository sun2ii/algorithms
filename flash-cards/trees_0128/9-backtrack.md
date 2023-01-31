1. path-sum-2  
  dfs(r,path[],x)->  
    +path(nv); x-=nv  
  
    if (!rl && !rr && x=0):  
      +ans(path.slice); bt  
  
    dfs(rl|r,path,x); bt  
  
