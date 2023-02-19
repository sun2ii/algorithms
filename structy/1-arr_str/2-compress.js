const compress = (s) => {
  let i   = 0;
  let j   = 0;
  let res = "";
  
  while (j <= s.length) {
    if (s[i] === s[j]) j++;
    else {
      let count = j - i === 1 ? "" : j - i;
      res += count + s[i];
      i = j;
    }
  }
    
  return res;
};

compress('ccaaatsss'); // -> '2c3at3s'
compress('ssssbbz'); // -> '4s2bz'
compress('ppoppppp'); // -> '2po5p'
compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'
compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');


