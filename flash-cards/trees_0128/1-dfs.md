```javascript
1. DFS Recursive      
  pre  X L R    
  in   L X R    
  post L R X    
    
2. DFS Stack    
  st = [r]    
  w-> st[0]    
    row[]    
    f-> stlen    
      +row(q.pop)    
      (rl) +st(rl)    
    +res(row)    
    
3. Bottom View    
  st = [r]    
  w-> st[0]    
    f-> stlen    
      +row(st.pop)    
      ?(!rl&!rr) +res(st.pop)    
      ?(rl) +st(rl)    
```
