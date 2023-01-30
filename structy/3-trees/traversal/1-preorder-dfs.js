const preOrderRecurse = root => {
  let res = [];

  let dfs = c => {
      if (!c) return;

      res.push(c.val);
      dfs(c.left);
      dfs(c.right);
  }

  dfs(root);
  return res;
}

const preOrderStack = root => {
  let res = [];
  let st  = [ root ];

  while (st.length > 0) {
    let c = st.pop();

    res.push(c.val);
    if (c.right) st.push(c);
    if (c.left) st.push(c);
  }

  return res;
}

