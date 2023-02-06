1. lca-bst
  l|r = lca(l|r,a,b)
  (rv > pqv), (< pqv) &= l, r
  &=r

2. lca-bt
  (r=p|q) &=r
  l|r = lca(l|r,a,b)
  (l&r) &=r (!l|!r) &= r|l

3. lca-leaves
  md=-1,lca=0
  if (!r&!l):
    if d > md: md=d, lca=r
    &= d

  l|r = lca(l|r,d+1)
  (l = r = md) lca=r
  &= max(l OR -1, r OR -1)


