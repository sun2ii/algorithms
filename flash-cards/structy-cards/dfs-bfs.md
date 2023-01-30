# DFS Tree
dfs-recursive
  dfs->
    if (!n)
    dfs(LR)

dfs-iterative
  arr = [ r ]
  arr-->
    c=arr.pop
    push(RL)

# BFS Tree
bfs
  arr = [ r ]
  arr-->
    c=arr.shift
    push(LR)

# DFS Graph
dfs-recursive
  dfs->
    if(!n)
    -f>graph.c dfs(n)

dfs-iterative
  a. arr = [ r ]
  b. arr-->
      c=arr.pop
      -f>graph.c +arr(n)

# BFS Graph
  a. arr = [ r ]
  b. arr-->
      c=st.shift
      -f>graph.c +arr(n)
