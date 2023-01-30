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

3. BFS Queue
  q = [r]
  --> q[0]
    row[]
    -f> qlen
      +row(q.shift)
      if(lr) +q(lr)
    +res(row)

4. Right View
  q = [r]
  --> q[0]
    -f> qlen
      if(i = qlen-1) +row(q.shift)
      if(lr) +q(lr)

5. Left View
  q = [r]
  --> q[0]
    -f> qlen
      if(i = 0) +row(q.shift)
      if(lr) +q(lr)

6. Bottom View
  st = [r]
  --> st[0]
    -f> stlen
      +row(st.pop)
      if (!rl&!rr) +res(st.pop)
      if(rl) +st(rl)


7. is-complete-tree
  bfs->
    (c) : (!prev) &=f
