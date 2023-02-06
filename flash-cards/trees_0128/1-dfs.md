```javascript
1. DFS Recursive      
  pre  XLR    
  in   LXR    
  post LRX    
    
2. DFS Stack    
  st = [r]    
  --> st[0]    
    row[]    
    -f> stlen    
      +row(q.pop)    
      if(rl) +st(rl)    
    +res(row)    
    
3. Bottom View    
  st = [r]    
  --> st[0]    
    -f> stlen    
      +row(st.pop)    
      if (!rl&!rr) +res(st.pop)    
      if(rl) +st(rl)    
```
