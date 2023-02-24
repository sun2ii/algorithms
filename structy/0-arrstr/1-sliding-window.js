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

// token replace
const tokenReplace = (s, tokens) => {
  let output = [];
  
  let i = 0;
  let j = 1;
  while (i < s.length) {
    if (s[i] !== '$') {
      output.push(s[i]);
      i += 1;
      j = i + 1;
    } else if (s[j] !== '$') {
      j += 1;
    } else {
      const key = s.slice(i, j + 1);
      output.push(tokens[key]);
      i = j + 1;
      j = i + 1;
    }
  }
  
  return output.join('');
};

// token transform
const tokenTransform = (s, tokens) => {
  let output = [];
  
  let i = 0;
  let j = 1;
  while (i < s.length) {
    if (s[i] !== '$') {
      output.push(s[i]);
      i += 1;
      j = i + 1;
    } else if (s[j] !== '$') {
      j += 1;
    } else {
      const key = s.slice(i, j + 1);
      const value = tokens[key];
      const evaluatedValue = tokenTransform(value, tokens);
      tokens[key] = evaluatedValue;
      output.push(evaluatedValue);
      i = j + 1;
      j = i + 1;
    }
  }
  
  return output.join('');
};