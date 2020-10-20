const { StackWithMax } = require('../../__data_structures/2_stack');

const main = () => {
	let s = new StackWithMax();

	s.push(1)
	s.push(5)
	s.push(3)
	s.push(2)
	s.push(4)
	console.log('s.getMax()', s.getMax())

}

main();

