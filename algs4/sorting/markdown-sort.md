## Sorting (N^2)

1. selection-sort
  a. black -> find min
     red   -> is min
     grey  -> final position
  b. i-f>  
       low=i
       j-f> (a.low > a.j) low=j
       swap(low, i)

2. insertion-sort
  a. good for partly sorted arraysd
  b. 1i-f> 
      j=i-f--> (&& a[j] < a[j - 1])
        swap(j, j-1)

3. shell-sort

