const Node = require('./_nodeClass');

const linkedListValues = (head) => {
  let res  = [];
  let curr = head;
  while (curr) {
    res.push(curr.val);
    curr = curr.next;
  }

  return res;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const x = new Node("x");
const y = new Node("y");
const q = new Node("q");

a.next = b;
b.next = c;
c.next = d;
x.next = y;

console.log(linkedListValues(a)); // -> [ 'a', 'b', 'c', 'd' ]
console.log(linkedListValues(x)); // -> [ 'x', 'y' ]
console.log(linkedListValues(q)); // -> [ 'q' ]
console.log(linkedListValues(null)); // -> [ ]

