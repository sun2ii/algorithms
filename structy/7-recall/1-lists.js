// linked list palindrome
const linkedPalindrome = (head) => {
  const values = [];
  let current = head;
  
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  
  return values.join(',') === values.reverse().join(',');
};

// middle value
const middleValue = (head) => {
    const values = [];
  
    let current = head;
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }
    
    return values[Math.floor(values.length / 2)];
};

// list cycle
const linkedListCycle = (head) => {
    const nodes = new Set();
    
    let current = head;
    while (current !== null) {
      if (nodes.has(current)) return true;
      nodes.add(current);
      current = current.next;
    }
    
    return false;
};