```javascript
# sums (preorder)  
1. two-sum  
  dfs->  
      cd  
    dfs(rl|r, sum)  
    
2. range-sum  
  sum=0  
  dfs ->  
    ?(l <= rv <= r) sum+=rv  
    ?(rl) dfs(rl)  
  
3. path-sum  
  dfs(n,x)->  
    ?(!n) &=false  
    ?(!nl&!nr) &=x - nv  
    &= dfs(nl,x-nv) | dfs(nr,x-nv)  
  
4. leaf-sum   
  dfs(n,sum)->  
    if (!n) &= 0  
      sum = sum * 10 + nv  
      if (!rl&!rr) &= sum  
    &= dfs(rl) + dfs(rr)  
  
```
