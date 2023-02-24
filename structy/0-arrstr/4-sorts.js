// five sort
const fiveSort = (nums) => {
  let i = 0;
  let j = nums.length - 1;
  
  while (i <= j) {
    if (nums[j] === 5) j--;
    else if (nums[i] === 5) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
    } else i++;
  }
  
  return nums;
};

// merge sort 
const mergeSort = (nums) => {
  if (nums.length <= 1) return nums;
  const mid = Math.floor(nums.length / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
};
 
 const merge = (array1, array2) => {
  array1.reverse();
  array2.reverse();
  const merged = [];
  
  while (array1.length > 0 && array2.length > 0) {
   if (array1[array1.length - 1] < array2[array2.length - 1]) {
    merged.push(array1.pop());
   } else {
    merged.push(array2.pop());
   }
  }
 
  merged.push(...array1.reverse());
  merged.push(...array2.reverse());
 
  return merged;
};

// combine intervals
const combineIntervals = (intervals) => {
  const sortedIntervals = intervals.sort((intervalA, intervalB) => intervalA[0] - intervalB[0]);
  const combined = [ intervals[0] ];
  for (let currentInterval of sortedIntervals.slice(1)) {
    const lastInterval = combined[combined.length - 1];
    const [ lastStart, lastEnd ] = lastInterval;
    const [ currentStart, currentEnd ] = currentInterval;
    if (currentStart <= lastEnd) {
      if (currentEnd > lastEnd) {
        lastInterval[1] = currentEnd;
      }
    } else {
      combined.push(currentInterval);
    }
  }
  return combined;
};