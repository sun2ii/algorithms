# DFS Graphs
1. build-graph
  {} f->(a,b):
      ?(!a in g) g[a] = []
      ?(!b in g) g[b] = []
      +g[a] = b
      +g[b] = a
    
2. undirected-path
  dfs(g, a, b, v):
    ?(a=b)      &=t
    ?(v.has(a)) &=f
    +v(a)
    f(n of g[a]): if (dfs(g, n, b, v)) &=t
  
3. connected-components
  c=0;v=set
    f->(n in graph): 
      ?(dfs(n)) c++

  dfs(n)->
    ?(v.has(n)) &=f
    +v(n)
    f->(nb of graph[n]): dfs(nb)
    &=t

4. largest-component
  big=0;v=set
    f->(n in graph):
      size = dfs(n)
      ?(size > big) big = size

  dfs(n)->
    ?(v.has(n)) &=0
    +v(n)
    size=1
    f->(nb of graph[n]): size+=dfs(nb)
    &=size

