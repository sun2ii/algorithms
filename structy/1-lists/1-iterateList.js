const { ListNode } = require('../data-structures/_nodeClass');

// find val in list
const findValInList = (head, x) => {
  let curr = head;

  while (curr) {
    if (curr.val === x) return true;
    curr = curr.next;
  }

  return false;
};

// sum list
const sumList = (head) => {
  let res = 0, curr = head;

  while (curr) {
    res += curr.val;
    curr = curr.next;
  }

  return res;
};


// get node val
const getNodeVal = (head, x) => {
  let curr = head;

  for (let i = 0; i < index; i++) {
    if (!curr) return null;
    curr = curr.next;
  }

  return curr.val;
};
