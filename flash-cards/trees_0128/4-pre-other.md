# other (preorder)

1. count-nodes
  (!r) &= 0
  &= main(r.l) + main(r.r) + 1

2. merge-trees
  dfs->
    if (r1&r2):
      r = new Node(r1 + r2)
      rl|r = merge(r1lr, r2lr)
      return r

3. paths
  dfs(r,path,ans)->
    if (!rl&!rr) +ans(path+rv)
    dfs(rl|rr, path+rv+->, ans)

