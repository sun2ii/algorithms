# construct
1. sorted-to-bst
  dfs(l,r)->
    (l > r) return null
    r  = node(nums[m])
    rl = dfs(l, m-1) ; rr = dfs(m+1, r)

2. pre-to-bst
  dfs(l-inf,r+inf)->
    if (pre.0 < l | > r || !pre) return null
    r  = pre.shift()
    rl = dfs(l, rv); rr = dfs(rv, r)

3. in-pre
  {in.i: i}
  dfs(l.0,r.end)->
    (l > r) return null
    r = pre.shift()  ; m  = ino[rv]
    rl = dfs(l, m-1) ; rr = dfs(m+1, r)

4. in-post
  {in.i: i}
  dfs(l.0,r.end)->
    (l > r) return null
    r = post.pop()   ; m  = ino[rv]
    rr = dfs(m+1, r) ; rl = dfs(l, m-1) 

5. pre-post
  preIdx,postIdx=0
  dfs(pre, post)->
    r = pre[preIdx++]
    if(rv!=post[postIdx]) rl = dfs(pre, post)
    if(rv!=post[postIdx]) rr = dfs(pre, post)
    postIdx++
  
