// BruteForce
// 🕑 O(n^2)
// 🛰 O(1)
const findingDuplicatesString = a => {
	let result = [];

	for (let i = 0; i < a.length; i++) {
		for (let j = i + 1; j < a.length; j++) {
			if (a[i] === a[j] && !result.includes(a[i])) {
				result.push(a[j]);
				a[j] = "-1";
				break;
			}
		}
	}

	return result;
}

// Using HashMap
// 🕑 O(n)
// 🛰 O(n)
const findingDuplicatesString2 = a => {
	let obj = {};
	let result = [];

	for (let i = 0; i < a.length; i++) {
		if (!obj[a[i]]) obj[a[i]] = 1;
		else obj[a[i]]++;
	}

	for (let i = 0; i < a.length; i++) {
		if (obj[a[i]] > 1 && !result.includes(a[i])) result.push(a[i]);
	}

	return result;
}

const main = () => {
	console.log(findingDuplicatesString("findinng"));
	console.log(findingDuplicatesString2("findinnng"));
}
 
main();