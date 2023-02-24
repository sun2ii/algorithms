const dfsStack = (root) => {
  if (!root) return [];
  let st  = [root];
  let res = [];

  while (st[0]) {
    let curr = st.pop();

    res.push(curr.val);

    if (curr.right) st.push(curr.right);
    if (curr.left) st.push(curr.left);
  }

  return res;
};

const bfsQueue = (root) => {
  if (!root) return [];
  let q   = [root];
  let res = [];

  while (q[0]) {
    let curr = q.shift();

    res.push(curr.val);

    if (curr.left) q.push(curr.left);
    if (curr.right) q.push(curr.right);
  }

  return res;
};

