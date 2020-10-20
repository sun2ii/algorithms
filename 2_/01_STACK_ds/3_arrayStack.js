const { ArrayStack } = require('../../__data_structures/2_stack');

const main = () => {
	let s = new ArrayStack(10);

	s.push(1, 1);
	s.push(1, 2);
	s.push(1, 3);
	s.push(1, 4);
	s.push(1, 5);
	s.push(2, 6);
	s.push(2, 7);
	s.push(2, 8);
	s.push(2, 9);
	s.push(2, 10);
	s.pop(1);
	s.pop(1);
	s.pop(1);
	console.log('s', s)
}

main();
