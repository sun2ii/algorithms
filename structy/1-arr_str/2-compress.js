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

compress('ccaaatsss'); // -> '2c3at3s'
compress('ssssbbz'); // -> '4s2bz'
compress('ppoppppp'); // -> '2po5p'
compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'
compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');


