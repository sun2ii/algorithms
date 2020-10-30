const { arrayHelper: utils, log, line } = require('../../__common/utils');
 
// 🕑 O(n)
// 🛰 O(1)
const subArrayToX = (a, x) => {
	let leader = 0;
	let follower = 0;
	let food = a[0];

	log('\n1. If the leader is too slow, he becomes a follower');
	log('2. If the leader reaches the end, then its game over');
	log('3. if you need more food, set the leader in charge');
	log('4. if you need less food, tell the follower to drop his and move forward')
	line();

	while (follower <= a.length) {
		utils.prettyPrint(a, follower, leader, food.toString());
		if (follower > leader) {
			leader = follower;
			food = a[follower];
		}

		if (food < x) {
			if (leader === a.length - 1) break;

			leader++;
			food += a[leader];
		} else if (food > x) {
			food -= a[follower];
			follower++;
		} else {
			log([follower, leader], x);
			return [follower, leader];
		}
	}
}
 
const main = () => {
	subArrayToX([1,2,3,5,2], 8);
}
 
main();