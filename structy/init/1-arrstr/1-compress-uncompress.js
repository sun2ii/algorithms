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


