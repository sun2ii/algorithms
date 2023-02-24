const { ListNode } = require('../data-structures/_nodeClass');

// reverse list
const reverseList = (head) => {
  let prev = null, curr = head, next;

  while (curr) {
    next      = curr.next;
    curr.next = prev;
    prev      = curr;
    curr      = next;
  }

  return prev;
}

// is univalue list
const isUnivalueList = (head) => {
  let prev = null, curr = head;

  while (curr) {
    if (prev && curr.val !== prev.val) return false;
    prev = curr;
    curr = curr.next;
  }

  return true;
};


// longest streak
const longestStreak = (head) => {
  let max = 0, count = 0;
  let prev = null, curr = head;

  while (curr) {
    if (prev && prev.val === curr.val) count++;
    else count = 1;

    if (count > max) max = count;

    prev = curr;
    curr = curr.next;
  }

  return max;
};

// insert node
const insertNode = (head, value, index) => {
  let n = new Node(value); 
  let p = head;

  if (index === 0) {
    n.next = head;
    return n;
  }
  
  for (let i = 0; i < index - 1; i++) p = p.next;
  
  if (!p.next) {
    p.next = n;
    return head;
  }
  
  let x  = p.next;
  p.next = n;
  n.next = x;
  
  return head;
};

// remove node
const removeNode = (head, targetVal) => {
  if (head.val === targetVal) return head.next;
  let prev = head, curr = head.next;

  while (curr) {
    if (curr.val === targetVal) {
      prev.next = curr.next;
      break;
    }

    prev = curr;
    curr = curr.next;
  }

  return head;
};

// create list 
const createLinkedList = (values) => {
  if (!values.length) return null;
  let curr = new Node(-1);
  let res  = c;

  for (let num of values) {
    c.next = new Node(num);
    curr   = c.next;
  }

  return res.next;
};

