```javascript
# Binary Search Tree  
1. search-bst  
  ?(x = rv) return r  
  ?(x < rv) dfs(rl)   
  ?(x > rv) dfs(rr)  
  
2. insert-node  
  ?(!r) return new node(x)  
  ?(x < rv): rl = dfs(rl,x)  
  ?(x > rv): rr = dfs(rr,x)  
    
3. delete-node  
  insert-node  
  ?(else):   
    ?(!rl) return rr  
    ?(!rr) return rl  
  
    rv=minVal(rr)  
    rr=dfs(rr,rv)  
      
```
