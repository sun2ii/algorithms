// Anagrams
const anagrams = (s1, s2) => {
  if (s1.length !== s2.length) return false;

  let hash = {};
  for (let i = 0; i < s1.length; i++) {
    if (hash[s1[i]]) hash[s1[i]] += 1;
    else hash[s1[i]] = 1;
  }

  for (let i = 0; i < s2.length; i++) {
    if (hash[s2[i]] > 0) hash[s2[i]]--;
    else return false;
  }

  return true;
};

// Most Frequenct Character
const mostFrequentChar = (s) => {
  let hash         = {};
  let mostFrequent = s[0];

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]]) hash[s[i]] += 1;
    else hash[s[i]] = 1;
  }

  for (let i = 1; i < s.length; i++) {
    if (hash[s[i]] > hash[mostFrequent]) mostFrequent = s[i];
  }

  return mostFrequent;
};

// Intersection
const intersection = (a, b) => {
  let hash = {};
  let res  = [];

  for (let i = 0; i < a.length; i++) hash[a[i]] = 1;

  for (let i = 0; i < b.length; i++) {
    if (hash[b[i]]) res.push(Number(b[i]));
  }

  return res;
};

/* Testing */
console.log(anagrams('restful', 'fluster')); // -> true
console.log(anagrams('cats', 'tocs')); // -> false
console.log(anagrams('monkeyswrite', 'newyorktimes')); // -> true
console.log(anagrams('paper', 'reapa')); // -> false
console.log(anagrams('elbow', 'below')); // -> true

mostFrequentChar('bookeeper'); // -> 'e'
mostFrequentChar('abby'); // -> 'b'
mostFrequentChar('david'); // -> 'd'
mostFrequentChar('mississippi'); // -> 'i'
mostFrequentChar('potato'); // -> 'o'
mostFrequentChar('eleventennine'); // -> 'e'
mostFrequentChar("riverbed"); // -> 'r'

console.log(intersection([4,2,1,6], [3,6,9,2,10])) // -> [2,6]
console.log(intersection([2,4,6], [4,2])) // -> [2,4]
console.log(intersection([4,2,1], [1,2,4,6])) // -> [1,2,4]
console.log(intersection([0,1,2], [10,11])) // -> []

