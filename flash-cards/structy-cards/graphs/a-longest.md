# Others
1. longest-path
  dist={}
    f->(n in graph): ?(!graph[n].len) dist[n] = 0
    f->(n in graph): dfs(n, dist)
    &= max(...dist.values)

  dfs(n,dist):
    ?(n in dist): &= dist[n]
    max=0
    f->(nb of graph[n]):
      att = dfs(nb,dist)
      ?(att > max) max = att
    dist[n] = 1+max
    &= dist[n]
    
2. semesters-required
  dist={}
    f->(n in graph): ?(!graph[n].len) dist[n] = 1
    f->(n in graph): dfs(n, dist)
    &= max(...dist.values)

  dfs(n,dist):
    ?(n in dist): &= dist[n]
    max=0
    f->(nb of graph[n]):
      nbDist = dfs(nb,dist)
      ?(nbDist > max) max = nbDist
    dist[n] = 1+max
    &= dist[n]
