const u = require('../../__common/utils');
const { HashTable } = require('../../__data_structures/4_hashTable');

const main = () => {
	//create object of type hash table
	const ht = new HashTable()

	//add data to the hash table ht
	ht.add("Canada", "300");
	ht.add("Germany", "100");
	ht.add("Italy", "50");

	//search
	console.log(ht.search("Italy"));
}
 
main();
