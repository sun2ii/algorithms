const { linkedListHelper: helper } = require("../../../../__common/utils");
const { createListFromArray, LinkedList } = require("../../../../__data_structures/1_linkedList");
const abc = require('../../../../__data_structures/1_linkedList copy')

// 🕑 O(n) - loop
// 🛰 O(1)
const oddEven = a => {
	if (a === null) return;
	
	let oddList = new LinkedList();
	let evenList = new LinkedList();

	let current = a.head;

	while (current !== null) {
		if (current.value % 2 === 0) 
			evenList.append(current);
		else if (current.value % 2 !== 0)
			oddList.append(current);
		current = current.next;
	}

	if (evenList.tail !== null) evenList.tail.next = null;
	if (oddList.tail !== null) oddList.tail.next = null;

	helper.print(evenList, 'evenList');
	helper.print(oddList, 'oddList');

	return [oddList, evenList]
}
 
const main = () => {
	let input = createListFromArray([1, 2, 3, 4, 5])
	oddEven(input);

	helper.print(input)
}
 
main();