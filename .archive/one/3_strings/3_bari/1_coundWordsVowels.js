// 🕑 O(n)
// 🛰 O(1)
const countVowelsConsonant = a => {
	let vowels = 0;
	let consonants = 0;
	a = a.toLowerCase();

	for (let i = 0; i < a.length; i++) {
		if (a[i] === "a" || a[i] === "e" || a[i] === "i" || a[i] === "o" || a[i] === "u") vowels++;
		else if (a[i] !== " ") consonants++;
	}

	console.log('vowels, consonants', vowels, consonants)
	return [vowels, consonants];
}

// 🕑 O(n)
// 🛰 O(1)
const countWords = a => {
	let word = 1;
	for (let i = 0; i < a.length; i++) {
		if (a[i] === " " && a[i - 1] !== " ") word++;
	}

	console.log('word', word)
	return word;
}
 
const main = () => {
	countVowelsConsonant("how are you");
	countWords("how   are  you asf eiagrh afn");
}
 
main();