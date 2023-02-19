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

const compress = (s) => {
  let i   = 0;
  let j   = 1;
  let res = [];

  while (j < s.length) {
    while (s[j] === s[i]) j++;
    let num = j - i;
    if (num <= 1) num = "";
    res.push(num + s[i]);
    i = j;
    j++;

    if (j === s.length && s[i] !== s[i - 1]) res.push(s[i])
  }

  return res.join('');
}


/* TESTING */
console.log(uncompress("2c3a1t")); // -> 'ccaaat'
console.log(uncompress("4s2b")); // -> 'ssssbb'
console.log(uncompress("2p1o5p")); // -> 'ppoppppp'
console.log(uncompress("3n12e2z")); // -> 'nnneeeeeeeeeeeezz'
console.log(uncompress("127y")); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'

compress('ccaaatsss'); // -> '2c3at3s'
compress('ssssbbz'); // -> '4s2bz'
compress('ppoppppp'); // -> '2po5p'
compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'
compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');


