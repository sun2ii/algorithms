```javascript
1. create-graph  
  dfs(n,par)->  
    nbr=[]  
    (nl) +nbr(nlv) dfs(nl,nv)  
    (nr) +nbr(nrv) dfs(nr,nv)  
    (par) +nbr(par)  
    adj[nv]=nbr  
  
2. nodes-distance-k  
  create-graph  
  q=[[xv,0]];visit={};res=[]  
  -->(q[0]):  
    [n, lvl]=q.shift  
    (visit[n]) cont  
    (lvl=k) +res(n)  
    (lvl>k) &= res  
    
    -f>node +q(node,lvl+1)  
    +visit(n)  
    
```
