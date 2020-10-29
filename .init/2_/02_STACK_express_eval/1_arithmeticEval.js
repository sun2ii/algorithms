const u = require('../../__common/utils');
const { Stack } = require('../../__data_structures/2_stack');
 
// Time  o(n)
// Space o(n)
const arithmeticEval = a => {
	if (a === null || a.length <= 0) return null;

	let numStack = new Stack();
	let operatorStack = new Stack();

	for (let i = 0; i < a.length; i++) {
		let char = a[i];
		if (isNum(char)) numStack.push(char);
		else if (isOperator(char)) {
			while (!operatorStack.isEmpty() && priority(operatorStack.peek()) >= priority(char)) {
				process(numStack, operatorStack)
			}
			operatorStack.push(char);
		}
	}

	while (!operatorStack.isEmpty()) process(numStack, operatorStack);

	console.log('numStack.pop()', numStack.pop())
	return numStack.pop();
}

const isNum = ch => (ch >= '0') && (ch <= '9');
const isOperator = ch => ch === '+' || ch === '-' || ch === '*' || ch === '/';

const priority = char => {
	switch (char) {
		case '/':
		case '*': return 2;
		case '+':
		case '-': return 1;
		default: return 'invalid operator';
	}
}

const process = (numStack, operatorStack) => {
	let num2 = parseInt(numStack.pop());
	let num1 = parseInt(numStack.pop());
	let operator = operatorStack.pop();

	let result = 0;

	switch (operator) {
		case '/': result = num1 / num2;
		break;
		case '*': result = num1 * num2;
		break;
		case '-': result = num1 - num2;
		break;
		case '+': result = num1 + num2;
		break;
	}

	numStack.push(result);
}


 
const main = () => {
	arithmeticEval("1+2/1+3*2");
}
 
main();