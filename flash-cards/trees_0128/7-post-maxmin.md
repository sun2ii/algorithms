```javascript
# Max Min (post)  
1. max-depth-tree  
  dfs-> lr = dfs(lr)  
    &= max(l,r) + 1  
  
2. is-balanced  
  dfs-> lr = dfs(lr);   
    if (l = -1 | r = -1 | l - r > 1) &= -1  
    &= max(l,r) + 1  
  
3. diameter-tree  
  dfs-> lr = dfs(lr);   
    diameter = max(diameter, l+r)  
    &= max(l,r) + 1  
  
4. min-depth-tree  
  dfs-> lr=dfs(lr)  
    if (!rl|!rr) &= rl + 1  
    &= min(l, r) + 1  
  
```
