const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(n)
const findLongestSubstring = a => {
	if (a === null || a.length <= 0) return null;

	let leader = 0;
	let follower = 0;
	let storage = {};
	storage[a[0]] = 0;

	let res = 1;

	line()
	log('\tFind Longest Substring')
	line();
	log('\n1. Advance the leader and grab item');
	log('2. If item exists in storage and is ahead of follower, follower + 1');
	log('3. Save item to storage');
	log('4. Check if storage is biggest l-f+1');
	line();

	while (leader < a.length) {
		utils.prettyPrint(a, follower, leader, res.toString());
		leader++;
		let item = a[leader];

		if (storage.hasOwnProperty(item) && storage[item] >= follower)
			follower = storage[item] + 1;

		storage[item] = leader;

		if (leader - follower + 1 > res) res = leader - follower + 1;
	}

	console.log('res', res)
	return res;
}
 
const main = () => {
	findLongestSubstring("whatwhywhere");
}
 
main();