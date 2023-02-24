// Two Product
const twoProduct = (numbers, targetProduct) => {
  let hash = {};
  
  for (let i = 0; i < numbers.length; i++) {
    let curr = numbers[i];
    let diff = targetProduct / curr;
    
    if (curr in hash) return [hash[curr], i];
    if (targetProduct % curr === 0) hash[diff] = i;
  }
  
  return;
};

// Two Sum
const twoSum = (numbers, targetProduct) => {
  let hash = {};
  
  for (let i = 0; i < numbers.length; i++) {
    let curr = numbers[i];
    let diff = targetProduct / curr;
    
    if (curr in hash) return [hash[curr], i];
    hash[diff] = i;
  }
  
  return;
};

console.log(pairProduct([3, 2, 5, 4, 1], 8)); // -> [1, 3]
console.log(pairProduct([3, 2, 5, 4, 1], 10)); // -> [1, 2]
console.log(pairProduct([4, 7, 9, 2, 5, 1], 5)); // -> [4, 5]
console.log(pairProduct([4, 7, 9, 2, 5, 1], 35)); // -> [1, 4]
console.log(pairProduct([3, 2, 5, 4, 1], 10)); // -> [1, 2]
console.log(pairProduct([4, 6, 8, 2], 16)); // -> [2, 3]
