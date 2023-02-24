// parenthical possibilities
const parentheticalPossibilities = (s) => {
    if (s === "") return [""];
  
    const { remaining, chars } = getOptions(s);
    const suffixes = parentheticalPossibilities(remaining);
    const possibilities = [];
  
    for (let char of chars) {
      for (let suffix of suffixes) {
        possibilities.push(char + suffix);
      }
    }
  
    return possibilities;
  };
  
// get options
const getOptions = (s) => {
    if (s[0] === "(") {
        const endIdx = s.indexOf(")");
        const remaining = s.slice(endIdx + 1);
        const chars = s.slice(1, endIdx).split("");
        return { remaining, chars };
    } else {
        const remaining = s.slice(1);
        const chars = [s[0]];
        return { remaining, chars };
    }
};

// substitute synonyms
const substituteSynonyms = (sentence, synonyms) => {
    const words = sentence.split(' ');
    const arrays = generate(words, synonyms);
    return arrays.map(subarray => subarray.join(' '));
};
  
const generate = (words, synonyms) => {
    if (words.length === 0) return [[]];

    const firstWord = words[0];
    const remainingWords = words.slice(1);
    if (firstWord in synonyms) {
        const result = [];
        const subarrays = generate(remainingWords, synonyms);
        for (let synonym of synonyms[firstWord]) {
        result.push(...subarrays.map(subarray => [ synonym, ...subarray ]));
        }
        return result;
    } else {
        const subarrays = generate(remainingWords, synonyms);
        return subarrays.map(subarray => [ firstWord, ...subarray ]);
    };
};
