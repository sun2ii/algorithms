// non adjacent sum
const nonAdjacentSum = (a) => {
  let save = {};

  let aux = (i = 0) => {
    if (i in save) return save[i];
    if (i >= a.length) return 0;
    
    const include = aux(i + 2) + a[i];
    const exclude = aux(i + 1);
    save[i] = Math.max(include, exclude);
    return save[i];
  }
  
  return aux();
};
