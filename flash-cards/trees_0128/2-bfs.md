```javascript
1. BFS Queue  
  q = [r]  
  w-> q[0]  
    row[]  
    f-> qlen  
      +row(q.shift)  
      if(lr) +q(lr)  
    +res(row)  
  
2. Right View  
  q = [r]  
  w-> q[0]  
    f-> qlen  
      ?(i = qlen-1) +row(q.shift)  
      ?(lr) +q(lr)  
  
3. Left View  
  q = [r]  
  w-> q[0]  
    f-> qlen  
      ?(i = 0) +row(q.shift)  
      ?(lr) +q(lr)  
  
4. is-complete-tree  
  p=root  
  bfs->  
    (c) : (!prev) &=f  
    p=c  
  
5. is-cousins  
  w-> q[0]  
    fx,fy=f  
    f-> qlen  
      ?(cl&cr) (clv=x|y & crv=x|y) &=f  
      ?(cv=x|y) fx|y=t  
      ?(cl|cr) +q(cl|cr)  
  ?(fx&fy) &=t  
  
```
