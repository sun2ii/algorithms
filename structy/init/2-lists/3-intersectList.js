// zipper lists
const zipperLists = (head1, head2) => {
  let cnt = 0;
  let c   = head1;
  let c1  = head1.next;
  let c2  = head2;

  while (c1 && c2) {
    if (cnt % 2 !== 0) {
      c.next = c1;
      c1 = c1.next;
    } else {
      c.next = c2;
      c2 = c2.next;
    }
    c = c.next;
    cnt++;
  }
  
  if (c1 && !c2) c.next = c1;
  if (c2 && !c1) c.next = c2;
  
  return head1;
};

// merge lists
const mergeLists = (head1, head2) => {
  let c = head1.val <= head2.val ? head1 : head2;
  let c1, c2;
  if (c === head1) {
    c1 = head1.next;
    c2 = head2;
  } else {
    c1 = head1;
    c2 = head2.next;
  }

  while (c1 && c2) {
    if (c1.val <= c2.val) {
      c.next = c1;
      c1 = c1.next;
    } else {
      c.next = c2;
      c2 = c2.next;
    }
    c = c.next;
  }

  if (c1 && !c2) c.next = c1;
  if (c2 && !c1) c.next = c2;

  return head1.val <= head2.val ? head1 : head2;
};

// add lists
const addLists = (head1, head2) => {
  let res   = new Node(-1);
  let curr  = res;
  let c1    = head1;
  let c2    = head2;
  let carry = 0;

  while (c1 || c2 || carry === 1) {
    let val1 = c1 ? c1.val : 0;
    let val2 = c2 ? c2.val : 0;
    let sum = val1 + val2 + carry;
    carry = sum >= 10 ? 1 : 0;

    curr.next = new Node(sum % 10);
    curr      = curr.next;

    if (c1) c1 = c1.next;
    if (c2) c2 = c2.next;
  }

  return res.next;
};
