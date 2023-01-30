const uncompress = s => {
  let res     = '';
  let currNum = '';
  let i       = 0;

  while (i < s.length) {
    while (Number.isInteger(Number(s[i]))) {
      currNum += s[i];
      i++;
    }

    for (let j = 0; j < Number(currNum); j++) res += s[i];

    currNum = '';
    i++;
  }

  return res;
}

console.log(uncompress("2c3a1t")); // -> 'ccaaat'
console.log(uncompress("4s2b")); // -> 'ssssbb'
console.log(uncompress("2p1o5p")); // -> 'ppoppppp'
console.log(uncompress("3n12e2z")); // -> 'nnneeeeeeeeeeeezz'
console.log(uncompress("127y")); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'

