# Max Min (post)  
1. max-depth-tree  
  dfs-> lr = dfs(lr)  
    return max(l,r) + 1  
  
2. is-balanced  
  dfs-> lr = dfs(lr);   
    if (l = -1 | r = -1 | l - r > 1) return -1  
    return max(l,r) + 1  
  
3. diameter-tree  
  dfs-> lr = dfs(lr);   
    diameter = max(diameter, l+r)  
    return max(l,r) + 1  
  
4. min-depth-tree  
  dfs-> lr=dfs(lr)  
    if (!rl|!rr) return rl + 1  
    return min(l, r) + 1  
  
