function evaluate(str) {
  const ops  = [];
  const vals = [];
  const items = "+-*/)"
  const arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    const s = arr[i];
    if (s === "(") continue;
    else if (s === "+") ops.push(s);
    else if (s === "-") ops.push(s);
    else if (s === "*") ops.push(s);
    else if (s === "/") ops.push(s);
    else if (s === ")") {
      const op = ops.pop();
      let v = vals.pop();
      if (op === "+") v = vals.pop() + v;
      else if (op === "-") v = vals.pop() - v;
      else if (op === "*") v = vals.pop() * v;
      else if (op === "/") v = vals.pop() / v;
      vals.push(v);
    } else vals.push(parseInt(s, 10));
  }
  return vals.pop();
}
