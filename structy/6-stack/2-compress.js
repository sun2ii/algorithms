// decompress braces
const decompressBraces = (s) => {
    let st   = [];
    let nums = '123456789'
    
    for (let c of s) {
      if (nums.includes(c)) st.push(Number(c));
      else {
        if (c === '}') {
          let segment = '';
          while (!Number.isInteger(st[st.length - 1])) {
            let popped = st.pop();
            segment = popped + segment;
          }
          let num = st.pop();
          st.push(repeat(num, segment));
        }
        else if (c !== '{') st.push(c);
      }
    }
    
    return st.join('');
};
  
let repeat = (num, segment) => {
    let res = '';
    for (let i = 0; i < num; i++) {
        res += segment;
    }

    return res;
}

