1. min-abs-diff
  min=inf,p=-inf
    t->
      t(l)
        min = min(min, nv - p)
        p   = nv
      t(r)

2. kth-smallest
  t->
    t(l)
      count--
      if (count=0): res = count; return
    t(r)

3. sort-nodes-in-2-bst
  r1r2-inOrder
  merge(r1,r2)
    --> (r1.i<r2.j) ? +res[a.i++] : +res[b.j++]
    --> (i < a.len) +res[a.i++] 
    --> (j < b.len) +res[b.j++] 

