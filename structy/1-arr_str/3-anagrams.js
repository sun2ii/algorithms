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

console.log(anagrams('restful', 'fluster')); // -> true
console.log(anagrams('cats', 'tocs')); // -> false
console.log(anagrams('monkeyswrite', 'newyorktimes')); // -> true
console.log(anagrams('paper', 'reapa')); // -> false
console.log(anagrams('elbow', 'below')); // -> true



