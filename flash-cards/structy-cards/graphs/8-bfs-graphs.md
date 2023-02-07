# BFS Graphs
1. shortest-path
  v=set([a])
  q=[[a,0]]
  w->(q.0):
    [n,d]=q.shift
    ?(n===b) &=t
    f->(nb of g[n]):
      ?(!v.has(nb))
        +v(nb); +q([nb, d+1])

2. shortest-carrot
  q=[[r,c,0]]
  v=set([r,c])
    w->(q.0):
      [r,c,d] =q.shift
      ?(g.r.c='c') &=d
      f->(dir of dirs):
        [dr, dc]=dir
        nR = r + dr; nC = c + dc; nP = nR,nC
        ?(!out & !v.has(nP) & g.nR.nC != 'X'):
          +v(nP); +q([nR,nC,d+1])
