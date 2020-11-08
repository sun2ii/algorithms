## 6.6 Search Array of Unknown Length (01)
> You are given an array, but you don't know the length. Write a program to find a target element in the array.

* Actively catch exceptions and use them in the algorithm.   
* Most obvious solution is Linear Search O(n)

### Solution
1. query 1, 2, 4, 8, 16, 32.
2. When encountered an exception, we do a binary search to find the last index
3. When last index is found, do a binary search from 0, to last index to find x

ex: x = 30, do (01) between 16 and 32

## 8.1 Combinations

* There are 3 pointers you need to pay attention to:
	> aIndex
	> bIndex
	> i

* Whatever goes into i is what goes into the buffer
* aIndex is a placeholder for where you are at in your array
* bIndex keeps track of your bufferIndex

i + 1 => right
i - 1 => left
j + 1 => up
j - 1 => down