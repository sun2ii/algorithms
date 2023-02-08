## Num Islands

1. num-islands  
  f->(i):
    f->(j):
      ?(dfs(i,j)) c++
  &= c
  
  dfs(x,y):
    ?(out|g.x.y='w') &=
    g.x.y='w'
    4dfs(x,y)
    &=t
 
2. min-island
  min=-inf,v=set()
    f->(i):
      f->(j):
        size=dfs(i,j)
        ?(size > 0 & size < min): min = size
    &= size

    dfs(x,y):
      ?(out|g.x.y='w'|v.has(pos)): &= 0
      +v(pos)
      c=1; c+=4dfs(x,y)
      &=c
  
3. best-bridge
