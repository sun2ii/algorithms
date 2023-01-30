const inOrderRecurse = root => {
  let res = [];

  let dfs = c => {
      if (!c) return;

      dfs(c.left);
      res.push(c.val);
      dfs(c.right);
  }

  dfs(root);
  return res;
}

const inOrderStack = root => {
  let res = [];
  let st  = [ root ];

  while (st.length > 0) {
    let c = st.pop();

    if (c.right) st.push(c);
    res.push(c.val);
    if (c.left) st.push(c);
  }

  return res;
}
