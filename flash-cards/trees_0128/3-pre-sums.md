# sums (preorder)  
1. two-sum  
  dfs->  
      cd  
    dfs(rl|r, sum)  
    
2. range-sum  
  sum=0  
  dfs ->  
    if (l <= rv <= r) sum+=rv  
    if(rl) dfs(rl)  
  
3. path-sum  
  dfs(n,x)->  
    if(!n) return false  
    if(!nl&!nr) return x - nv  
    return dfs(nl,x-nv) | dfs(nr,x-nv)  
  
4. leaf-sum   
  dfs(n,sum)->  
    if (!n) return 0  
      sum = sum * 10 + nv  
      if (!rl&!rr) return sum  
    return dfs(rl) + dfs(rr)  
  
