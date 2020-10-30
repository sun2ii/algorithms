/******************
 * BASIC PRINT
 ******************/
 const line = () => log("-------------------------------------");

/******************
 * ARRAY HELPER
 ******************/
const arrayHelper = {
	prettyPrint: (a, ...args) => {
		if (a === null) return;

		let x = args[0];
		let y = args[1];
		let z = args[2];

		if (typeof(x) === "number" || typeof(y) === "number" || typeof(z) === "number") write("|")
		if (x !== undefined && typeof(x) === "number") write(color(` ${x} `, "red"))
		if (y !== undefined && typeof(y) === "number") write(color(`${y} `, "green"))
		if (z !== undefined && typeof(z) === "number") write(color(`${z} `, "purple"))
		if (typeof(x) === "number" || typeof(y) === "number" || typeof(z) === "number") write("|")
		write(" [");
		for (let i = 0; i < a.length; i++) {
			let end = false;
			if (i === a.length - 1) end = true;

			if (i === x && i === a.length - 1) write(color(a[i], "red"))
			else if (i === y && i === a.length - 1) write(color(a[i], "green"))
			else if (i === z && i === a.length - 1) write(color(a[i], "purple"))
			else if (i === x) write(color(a[i], "red") + ", ")
			else if (i === y) write(color(a[i], "green") + ", ")
			else if (i === z) write(color(a[i], "purple") + ", ")
			else if (i === a.length - 1) write(color(a[i], "regular", end))
			else write(color(a[i], "regular", end) + ", ")

		}
		write('] ')
		if (x !== undefined && typeof(x) !== "number") {
			write(color(`- ${x} `, "red"))
		}
		if (y !== undefined && typeof(y) !== "number") {
			write(color(` ${y} `, "green"))
		}
		if (z !== undefined && typeof(z) !== "number") {
			write(color(` ${z} `, "purple"))
		} 
		// write(args[3])
		log();
	}
}

/******************
 * 2D ARRAY PRINT
 ******************/
const pm = (m, i, j) => {
	for (let row = 0; row < m.length; row++) {
		for (let col = 0; col < m[row].length; col++) {
			if (m[row][col] < 10 && m[row][col] >= 0) {
				if (i && j && row === i && col === j) {
					write(color(`${m[row][col]} `, "yellow"));
				} else {
					write(color(`${m[row][col]} `, "green"));
				}
			}
		}
		log('');
	}
}

/******************
 * LINKED LIST PRINT
 ******************/

const linkedListHelper = {
	print: (ll, label) => {
		if (ll === null) return;
		let list = listToArray(ll);

		if (!list.length) {
			log(color("empty list", "red"));
			return;
		}

		if (list.length === 1) {
			log(color(`${list[0].value}`, "blue"));
			pl();
			return;
		}

		if (label) write(label + ": ");

		for (let i = 0; i < list.length; i++)  {
			let value = list[i].value;
			if (list[i].head && list.length > 1) {
				write(color(`${value} > `, "red"))
			} else if (list[i].tail && i === list.length - 1)  {
				write(color(`${value}`, "green"), 1)
			} else if (list[i].tail && i !== list.length - 1)  {
				write(color(`${value} > `, "green"), 1)
			}  else if (!list[i].head && !list[i].tail && i === list.length - 1) {
				write(color(`${value} `, "blue"))
			} else {
				write(color(`${value} > `, "blue"))
			}
		}

		console.log('')
		pl()
	},
	pointers: (ll, x, y, label) => {
		if (ll === null) return;
		let list = listToArray(ll);

		if (!list.length) {
			log(color("empty list", "red"));
			return;
		}

		if (list.length === 1) {
			log(color(`${list[0].value}`, "blue"));
			pl();
			return;
		}

		if (label) write(label + ": ");

		for (let i = 0; i < list.length; i++)  {
			let value = list[i].value;
			if (x === i) write(color(`${value} > `, "red"))
			else if (y === i) write(color(`${value} > `, "green"), 1)
			else if (i === list.length - 1)
				write(color(`${value}`, "blue"), 1)
			else 
				write(color(`${value} > `, "blue"), 1)
		}
		log();
		pl();
	},
}

	const listToArray = list => {
		let a = [];
		let node = list.head;
		let i = 0;

		while (node !== null && i !== list.length) {
			a.push({
				value : node.value,
				next  : (node.next) ? node.next.value : null,
				head : node === list.head ? 1 : 0,
				tail : node === list.tail ? 1 : 0
			});
			node = node.next;
			i++;
		}

		return a;
	}

/******************
 * HELPER FUNCTIONS
 ******************/

 const helperFunctions = {
	 getLastNumber() {
		let i = a.length - 1;
		while (i >= 0 && a[i] === -1) i--;
		return i;
	 },
	 resizeWithZeroes(a, size) {
		if (size < a.length) return;

		let aIndex = a.length - 1;

		let result = Array(size).fill(0);
		let resultIndex = result.length - 1;

		while (aIndex >= 0) {
			result[resultIndex] = a[aIndex];
			resultIndex--;
			aIndex--;
		}

		return result;
	}, 
	trimBeginningZeroes(a) {
		let i = 0;
		while (i < a.length && a[i] === 0) i++;

		return (i === a.length) ? [0] : a.slice(i, a.length);
	},
	swap(a, i, j) {
		let temp = a[i];
		a[i] = a[j];
		a[j] = temp;
	}
}

/******************
 * DEBUG
 ******************/
 const color = (s, col, end = false) => {
	 let map = {
		 "regular": 00,
		 "dim": 02,
		 "whitebg": 07,
		 "underline": 21,
		 "red": 31,
		 "green": 32,
		 "yellow": 33,
		 "blue": 34,
		 "purple": 35,
		 "teal": 36,
	 }

	 return `\u001b[${map[col]}m${s}\u001b[0m`;
 }

 const cd = () => {
	 log('regular      :  hello,')
	 log("dim       02 : ", color("hello", "dim"))
	 log("white bg  07 : ", color("hello", "whitebg"))
	 log("underline 21 : ", color("hello", "underline"))
	 log("red       31 : ", color("hello", "red"))
	 log("green     32 : ", color("hello", "green"))
	 log("yellow    33 : ", color("hello", "yellow"))
	 log("blue      34 : ", color("hello", "blue"))
	 log("purple    35 : ", color("hello", "purple"))
	 log("teal      36 : ", color("hello", "teal"))
 }
 
const write = x => process.stdout.write(x);
const log = (...args) => args ? console.log(...args) : console.log('');

module.exports = {
	line,
	log,
	linkedListHelper,
	arrayHelper,
	helperFunctions,
}