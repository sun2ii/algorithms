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

// jump game
const jumpGame = a => {
  let max = -Infinity;

  for (let i = 0; i < a.length; i++) {
    max = Math.max(a[i] + i, max);
    if (max >= a.length - 1) return true;
    if (a[i] === 0 && max <= i) return false;
  }
  
  return false;
};

// lexical order
const lexicalOrder = (word1, word2, alphabet) => {
  const length = Math.max(word1.length, word2.length);
  for (let i = 0; i < length; i += 1) {
    const char1 = word1[i];
    const char2 = word2[i];
    const value1 = alphabet.indexOf(char1);
    const value2 = alphabet.indexOf(char2);
    if (value1 < value2) {
      return true;
    } else if (value1 > value2) {
      return false;
    }
  }
  return true;
};

// detect dictionary
const detectDictionary = (dictionary, alphabet) => {
  for (let i = 0; i < dictionary.length - 1; i += 1) {
    const current = dictionary[i];
    const next = dictionary[i + 1];
    if (!lexicalOrder(current, next, alphabet)) return false;
  }
  
  return true;
};