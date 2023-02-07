# BFS
1. bot-right-val
  bfs-> return c 

2. tree-levels
  {n, lvl}
  bfs->
    if (res.len = lvl) res[lvl] = [cv] else +res[lvl](cv)
    if (rl) +q({n, lvl})

3. level-avgs
  {n, lvl}, res[], avg[]
  bfs->
    if (res.len = lvl) res[lvl] = [cv] else +res[lvl](cv)
    if (rl) +q({n, lvl})
  res-f>
    +avg(sum(res.i) / res.i.len)

