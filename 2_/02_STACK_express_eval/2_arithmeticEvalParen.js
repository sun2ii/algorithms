const u = require('../../__common/utils');
const { Stack } = require('../../__data_structures/2_stack');
 
// Time  o(n)
// Space o(n)
const arithmeticEvalParens = a => {
	if (a === null || a.length <= 0) return null;

	let numStack = new Stack();
	let operatorStack = new Stack();
	
	for (let i = 0; i < a.length; i++) {
		let ch = a[i];
		if (isNum(ch)) {
			numStack.push(ch);
		} else if (isOperator(ch)) {
			while (!operatorStack.isEmpty() && priority(operatorStack.peek()) >= priority(ch))
				process(numStack, operatorStack);
			operatorStack.push(ch);
		} else if (ch === '(') operatorStack.push(ch);
		else if (ch === ')') {
			while (operatorStack.peek() !== '(')
				process(numStack, operatorStack);

			operatorStack.pop();
		}
	}

	while (!operatorStack.isEmpty()) process(numStack, operatorStack);

	console.log('numStack.pop()', numStack.pop())
	return numStack.pop();
}

const isNum = ch => (ch <= '9') && (ch >= '0');
const isOperator = ch => ch === '+' || ch === '-' || ch === '*' || ch === '/';

const priority = ch => {
	switch(ch) {
		case '+':
		case '-': return 1; break;
		case '*':
		case '/': return 2; break;
		default: return 'invalid operator';
	}
}

const process = (numStack, operatorStack) => {
	let num2 = parseInt(numStack.pop());
	let num1 = parseInt(numStack.pop());
	let operator = operatorStack.pop();

	let result = 0;

	switch (operator) {
		case '/': result = num1 / num2; break;
		case '*': result = num1 * num2; break;
		case '+': result = num1 + num2; break;
		case '-': result = num1 - num2; break;
	}

	numStack.push(result);
}
 
const main = () => {
	arithmeticEvalParens("1 + (1 + 3) * 2");
}
 
main();