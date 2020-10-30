// 🕑 O(n^2)
// 🛰 O(1)
const isAnagram = (a,  b) => {
	if (a.length !== b.length) return false;
	a = Object.assign([], a);
	let count = 0;

	for (let i = 0; i < a.length; i++) {
		for (let j = 0; j < b.length; j++) {
			if (a[i] === b[j]) {
				a[i] = "-1"
				count++;
			}
		}
	}

	return count === a.length;
}

// 🕑 O(n)
// 🛰 O(n)
const isAnagram2 = (a, b) => {
	if (a.length !== b.length) return false;

	let obj = {};

	for (let i = 0; i < a.length; i++) {
		let e = a[i];
		if (!obj[e]) obj[e] = 1;
		else obj[e]++;
	}

	for (let i = 0; i < b.length; i++) {
		let e = b[i];
		if (!obj.hasOwnProperty(e)|| obj[e] < 0) return false;
		obj[e]--;
	}

	return true;
}
 
const main = () => {
	console.log(isAnagram("medical", "decimal"));
	console.log(isAnagram("medical", "decimaa"));
	console.log(isAnagram2("medical", "maldeci"));
	console.log(isAnagram2("medical", "issfasf"));
}
 
main();