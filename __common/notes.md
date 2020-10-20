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
