# dual
1. same-tree
  if (!p &!q) return true
  if (pv != qv | !p | !q) return false

  same-tree(left) && same-tree(right)

2. symmetric-tree
  if (!p &!q) return true
  if (pv != qv | !p | !q) return false

  same-tree(l1, r2) && same-tree(l2, r1)
    
