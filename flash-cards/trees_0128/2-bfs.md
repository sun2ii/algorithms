```javascript
1. BFS Queue  
  q = [r]  
  --> q[0]  
    row[]  
    -f> qlen  
      +row(q.shift)  
      if(lr) +q(lr)  
    +res(row)  
  
2. Right View  
  q = [r]  
  --> q[0]  
    -f> qlen  
      if(i = qlen-1) +row(q.shift)  
      if(lr) +q(lr)  
  
3. Left View  
  q = [r]  
  --> q[0]  
    -f> qlen  
      if(i = 0) +row(q.shift)  
      if(lr) +q(lr)  
  
4. is-complete-tree  
  p=root  
  bfs->  
    (c) : (!prev) &=f  
    p=c  
  
5. is-cousins  
  --> q[0]  
    fx,fy=f  
    -f> qlen  
      (cl&cr) (clv=x|y & crv=x|y) &=f  
      (cv=x|y) fx|y=t  
      (cl|cr) +q(cl|cr)  
  (fx&fy) &=t  
  
```
