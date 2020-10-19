/*
* 1_reverseArr.js        | zigZag
* 2_cloneEvenNumbers.js  | getLastNum, a[--e] = a[i] 2x if even, i--
* 3_reverseSentence.js   | while (e>=0) if empty, add to res+cw='', else add to cw
* 4_sortedTwoSums.js     | elg (s< e) [.sum .s++ .e--]
* 5_moveZeroes.js        | if a[i] === 0 swap
* 6_dutchNationalFlag.js | elg (i<=e) [.i++ .sw(is)is++ .sw(ie)e--]
*/

const u = require("../../0_common/utils")

const reverseArr = a => {

}

const cloneEvenNumbers = a => {

}

const reverseSentence = str => {
	
}

const sortedTwoSum = (a, x) => {
	
}

const moveZeroes = (a, movement) => {
	
}

const dutchNationalFlag = (a, x) => {

}

const main = () => {
	u.p(cloneEvenNumbers([1, 2, 5, 6, 8, -1, -1, -1]));
    u.p(reverseSentence("i live in a house"));
	u.p(reverseArr([1, 2, 3, 4, 5, 6]));
	u.p(sortedTwoSum([1, 2, 4, 5, 6], 9))
	u.p(moveZeroes([2,4,0,3,0,1,0], 'begin'));
	u.p(moveZeroes([2,4,0,3,0,1,0], 'end'));
	u.p(dutchNationalFlag([1,4,5,4,4,6,2,3], 4));
}

main();
