const selectionSort = a => {
  for (let i = 0; i < a.length; i++) {
    let low = i;
    for (let j = i + 1; j < a.length; j++) 
      if (a[low] > a[j]) low = j;
    [a[i], a[low]] = [a[low], a[i]]
  }

  console.log(a);
}

const insertionSort = a => {
  for (let i = 1; i < a.length; i++) {
    for (let j = i; j > 0 && a[j] < a[j - 1]; j--) 
      [a[j], a[j-1]] = [a[j-1], a[j]]
  }

  console.log(a);
}

const shellSort = a => {
  let n = a.length;
  for (let interval = n / 2; interval > 0; interval /= 2) {
    for (let i = interval; i < n; i += 1) {
      let temp = a[i];
      let j;
      for (j = i; j >= interval && a[j - interval] > temp; j -= interval) {
        a[j] = a[j - interval];
      }
      a[j] = temp;
    }
  }

  console.log(a);
}

selectionSort([4,3,5,1,2,8]);
insertionSort([4,8,3,5,1,2]);
shellSort([4,8,3,5,1,2]);
