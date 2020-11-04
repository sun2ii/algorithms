## 6.6 Search Array of Unknown Length (01)
> You are given an array, but you don't know the length. Write a program to find a target element in the array.

* Actively catch exceptions and use them in the algorithm.   
* Most obvious solution is Linear Search O(n)

### Solution
1. query 1, 2, 4, 8, 16, 32.
2. When encountered an exception, we do a binary search to find the last index
3. When last index is found, do a binary search from 0, to last index to find x

ex: x = 30, do (01) between 16 and 32