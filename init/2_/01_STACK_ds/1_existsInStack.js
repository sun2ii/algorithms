const u = require('../../__common/utils');
const { Stack, cstack } = require('../../__data_structures/2_stack');
 
// Time  o(n)
// Space o(1)
const existsInStack = (a, x) => {
	if (a === null) return false;

	let temp = new Stack();
	let found = false;

	while (!a.isEmpty()) {
		if (a.peek() === x) {
			return true;
			break;
		}
		temp.push(a.pop());
	}

	while (!temp.isEmpty()) {
		a.push(temp.pop());
	}

	return found;
}
 
const main = () => {
	console.log(existsInStack(cstack([1, 2, 3, 4, 5, 6]), 1));
}
 
main();