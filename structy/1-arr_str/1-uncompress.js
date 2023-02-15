const uncompress = (s) => {
  let i   = 0;
  let j   = 0;
  let res = "";
  let num = "123456789"
 
  while (j < s.length) {
    if (num.includes(s[j])) j++ 
    else {
      let n = Number(s.slice(i, j));
      for (let i = 0; i < n; i++) res += s[j];
      j++;
      i = j;
    }
  }
  
  return res;
};


console.log(uncompress("2c3a1t")); // -> 'ccaaat'
console.log(uncompress("4s2b")); // -> 'ssssbb'
console.log(uncompress("2p1o5p")); // -> 'ppoppppp'
console.log(uncompress("3n12e2z")); // -> 'nnneeeeeeeeeeeezz'
console.log(uncompress("127y")); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'

