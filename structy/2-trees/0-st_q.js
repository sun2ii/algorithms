const dfsStack = (root) => {
  if (!root) return [];
  let ds = [root], res = [];

  while (ds[0]) {
    let curr = ds.pop();

    res.push(curr.val);

    if (curr.right) ds.push(curr.right);
    if (curr.left)  ds.push(curr.left);
  }

  return res;
};

const bfsQueue = (root) => {
  if (!root) return [];
  let ds = [root], res = [];

  while (ds[0]) {
    let curr = ds.shift();

    res.push(curr.val);

    if (curr.left)  ds.push(curr.left);
    if (curr.right) ds.push(curr.right);
  }

  return res;
};

