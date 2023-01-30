const bfs = root => {
  let q   = [ root ];
  let res = [];

  while (q[0]) {
    let qLen = q.length;
    let row  = [];

    for (let i = 0; i < qLen; i++) {
      let c = q.shift();
      row.push(c.val);
      if (c.left) q.push(c.left);
      if (c.right) q.push(c.right);
    }
  }

  return res;
}

const bfsReverse = root => {
  let q   = [ root ]
  let res = [];

  while (q[0]) {
    let qLen = q.length;
    let row  = [];

    for (let i = 0; i < qLen; i++) {
      let c = q.shift();
      row.push(c.val);
      if (c.left) q.push(c.left);
      if (c.right) q.push(c.right);
    }
  }

  return res.reverse();
}

var zigZag = function(root) {
    let res  = [];
    let q    = [root]
    let even = 0;

    while (q[0]) {
        let qLen = q.length;
        let row  = [];

        for (let i = 0; i < qLen; i++) {
            let c = q.shift();
            if (even % 2 === 0) row.push(c.val);
            else row.unshift(c.val);
            if (c.left) q.push(c.left);
            if (c.right) q.push(c.right);
        }

        res.push(row);
        even++;
    }

    return res;
};
