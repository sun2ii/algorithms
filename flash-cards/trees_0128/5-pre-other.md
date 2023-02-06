```javascript
# other (preorder)  
1. count-nodes  
  (!r) &= 0  
  &= main(r.l) + main(r.r) + 1  
  
2. merge-trees  
  dfs->  
    if (r1&r2):  
      r = new Node(r1 + r2)  
      rl|r = merge(r1lr, r2lr)  
      return r  
  
3. paths  
  dfs(r,path,ans)->  
    if (!rl&!rr) +ans(path+rv)  
    dfs(rl|rr, path+rv+->, ans)  
  
4. max-ancestor-diff  
  dfs(r,min,max)->  
    (!r) *= max-min  
    max=max(rv,max); min=min(rv,min)  
    rl=dfs(rl,min,max)  
    &=max(l,r)  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
```
