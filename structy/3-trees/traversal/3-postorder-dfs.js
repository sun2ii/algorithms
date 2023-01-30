const postOrderRecurse = root => {
  let res = [];

  let dfs = c => {
      if (!c) return;

      dfs(c.left);
      dfs(c.right);
      res.push(c.val);
  }

  dfs(root);
  return res;
}

const postOrderStack = root => {
  let res = [];
  let st  = [ root ];

  while (st.length > 0) {
    let c = st.pop();

    if (c.right) st.push(c);
    if (c.left) st.push(c);
    res.push(c.val);
  }

  return res;
}
