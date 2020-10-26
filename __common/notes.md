### Initial Questions
1. Contents of Input (string/integers/bool?)
2. Sorted?
3. Contiguous? 
4. What to return? (Pair of indices? Number?)
5. What happens if null/empty?

### Every Problem think this way
1. Set variables
2. Null/exception Check
3. Begin problem

### ESTCV
1. Examples
2. Solution
3. Test Cases
4. Code
5. Verify

### Problems
1. Arrays and Strings 1
	* 1_reverseArr.js        | zigZag
	* 2_moveZeroes.js        | if a[i] === 0 swap
	* 3_cloneEvenNumbers.js  | getLastNum, a[--e] = a[i] 2x if even, i--
	* 4_reverseSentence.js   | while (e>=0) if empty, add to res+cw='', else add to cw
	* 5_sortedTwoSums.js     | elg (s< e) [.sum .s++ .e--]
	* 6_dutchNationalFlag.js | elg (i<=e) [.i++ .sw(is)is++ .sw(ie)e--]

2. Subarray Problems
	* 1_kadanes_brute.js         | 2loops+, isum=0, jsum+=a[j] max(maxSum, sum)
	* 2_kadanes.js               | kadanes
	* 3_subArraySum.js           | elg (s< len(a)) + if (s>e) reset [.ret(s,e) .if(e=end)break, e++,sum+=ae . sum-=se s+=]
	* 4_prefixSums.js            | prefixSum
	* 5_findLongestSubstring.js  | pullEnd, if str[e] in map, s+1, map[toAdd]=e, ret maxLen

3. Binary Search

### Tasks
1. Name your weapons
2. Write test cases for each problem
3. Write Time/Space complexity for each problem
4. Write a schedule/quiz/test or "spaced repetition"
5. Data Structures, create a "class_methods" folder (replace LINK_intro with LINK_class_methods)
6. Need to do Topological Graph + Implement Min + Max Heaps

### Object/Hash Maps
Hash maps typically have 3 components to it:
	1. current (a[i])
	2. key
	3. value
It's very important to know what goes where when you are using a hash map.

# arrays and strings
	1. reverseArr -> 2 (se)
	2. reverseSentence -> 1 (e)
	3. cloneEvenNumbers -> 2 (getLast, e)
	4. moveZeroes -> 0 
	5. sortedTwoSum -> 2 (se) + elg
	6. dutchNationalFlag -> 3 (sie) + elg

# Auxiliary Buffer
	1. Termination Cases
	2. Find Candidates that go into buffer
	3. Place candidates
	4. Recurse to next buffer

## Prefix and Sliding Window Sum
1. You can use 2 pointers to calculate +ve sum
2. You have to use {} to calculate +ve/-ve sum

## Quiz 
* Find the problems on leetcode and create a link to test yourself every week

## Stacks
Last In First Out (LIFO)
> Push
> Pop
> Peek

Similar to a Linked List,
assume that Stack data structure is there

Stack Data Structure is very similar to a LinkedList
Traversing a Stack ==> O(n)

### Process
10/26
Computer
	1. Go through all 19 lectures
	2. Log everything

Once everything is logged:

Art
	1. Draw diagrams of each problem
	2. Try and gather similar concepts/patterns and put them in an excel sheet or somewhere

Redo
	1. Redo EVERYTHING. Reformat items where it is similar to other problems

Then go through the next 100 leetcode problems.

## Queue
First In First Out (FIFO)
> Enqueue
> Dequeue

Queues are REALLY good for "Sliding Windows"

## DP
1. Any DFS Problem: Yes, Depth First Search uses DP! Who knew! When we check the state of each node, we are storing and re-using the same subproblem.
2. Subarray Sum Problems Question #1: Given an array of integers, find the contiguous subarray with the maximum sum. The array can contain both negative and positive integers.
3. Max Diff Homework #1:  How much money could you have made with 2 trades?
4. Backtracking Problems Question #2: Maze with 4 directional Movement
5. Topological Sort Homework #1: Diameter of Graph: Given a graph, find the length of the longest path among any two vertices.

Dynamic Programming is the act of breaking down the problem to smaller subproblems and storing the subproblem's solutions

* Optimal Substructure - Use Sub problems
* Overlapping Subproblems - Reuse Sub Problems
(Think Use/Reuse in DP)

- Identify Solution in terms of subproblems
- Use/Reuse subproblems

1. Top Down  - Recursion + Memoization
2. Bottom Up - Tabulation (DP)

DP(bottom-up): O(n) time and O(1) space (since we're only keeping the last 2 results)
DP(top-down): O(n) time and O(n) space

### Graphs
1. Adjacency List 
	A -> { B, C }
	C -> { B, D }
2. Adjacency Matrix
	  A  B  C  D
	A 0  1  1  0
	B 0  0  0  0
	C 0  1  0  1
	D 0  0  0  0

* Graphs are combinations of NODES and EDGES
* DIRECTED GRAPH -> 1 way
* UNDIRECTED GRAPH -> 2 ways
* CLIQUE is when each node has an edge to every other node

* Generate test cases for topological sort

## Heaps
Max Heap 
- Binary Tree
- Parent > Child
- Root is greatest element
- O(1) lookup of max element
- O(logn) for insertion
- O(logn) for deletion

# Sorting
1. O(n^2)  
	Insertion Sort 
	Bubble Sort
	Selection Sort 

2. O(n log n)
	Merge Sort - Stable sort (index is consistent)
	Quick Sort

3. O(n log n)
	Bucket Sort
	Radix Sort

Sort Stability -> Indexing
Fit large dataset if it doesn't fit in your ram

## Tries
* Useful for dictionary-like problems
* Implementing Auto-complete

# Questions
* Heap Implementation
* Skyline Problem
* Inspirational Youtubers
* Graph test case one-way examples

A	Data Structures
	1	Linked List
	2	Stack
	3	Queue
	4	Hash Table
	5	Heap
	6	Graphs
	7	BST/Trees
	8	Tries
	
B	Arrays
	1	Arrays and Strings
	2	Subarray Problems
	3	Binary Search
	4	Line Sweep
	
C	Recursion/DP
	1	Recursion and Backtracking
	2	Dynamic Programming
	
D	Sort/Selection
	1	Selection Algorithm
	2	Sorting Algorithms