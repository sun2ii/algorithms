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

mostFrequentChar('bookeeper'); // -> 'e'
mostFrequentChar('abby'); // -> 'b'
mostFrequentChar('david'); // -> 'd'
mostFrequentChar('mississippi'); // -> 'i'
mostFrequentChar('potato'); // -> 'o'
mostFrequentChar('eleventennine'); // -> 'e'
mostFrequentChar("riverbed"); // -> 'r'

