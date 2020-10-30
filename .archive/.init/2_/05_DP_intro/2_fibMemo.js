const u = require('../../__common/utils');
 
// Time  o(n)
// Space o(n)
const fibMemo = x => { 
	return fibMemoHelper(x, {});
}

const fibMemoHelper = (x, memo) => {
	if (x <= 2) return 1;
	if (memo.hasOwnProperty(x)) return memo[x];
	let result = fibMemoHelper(x - 1, memo) + fibMemoHelper(x - 2, memo);
	
	memo[x] = result;
	return result;
}
 
const main = () => {
	console.log(fibMemo(8));
}
 
main();