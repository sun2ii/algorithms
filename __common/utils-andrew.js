require('colors');

/*
 * Logging with colors.js
 */

const start = (array, target) => {
	console.log('-----START-----'.bgGreen.black);
	if (array) {
		console.log('input:  ', array);
	}
	if (target) {
		console.log('target: ', target);
	}
};

const end = () => {
	console.log('------END------\n'.bgRed.black);
};

const recursiveStep = (isStart, functionName, variableList, result) => {
	var msg = '';
	if (isStart) {
		msg += `START:`.bgGreen.black + ' ';
	} else {
		msg += `END:`.bgRed.black + ' ';
	}

	msg += `${functionName}(`.bold;

	for (var i = 0; i < variableList.length; i++) {
		let variable = variableList[i];
		if (Array.isArray(variable)) {
			msg += '[' + variable + ']';
		} else {
			msg += variable;
		}
		if (i !== variableList.length - 1) {
			msg += ', ';
		}
	}

	if (isStart || !result) msg += `)`.bold;
	else if (result) {
		msg += `)`.bold + ` = ` + `${result}`.bgGreen.black.bold;
	}

	console.log(msg);
};

const baseCaseHit = (stringBaseCase) => {
	var msg =
		`BASE CASE:`.bgYellow.bold.black + ` ${stringBaseCase}; returning`;

	console.log(msg);
};

const it = (a, iteration) => {
	var msg = '[';

	for (var i = 0; i < a.length; i++) {
		if (i === iteration && i === a.length - 1) {
			msg += `${a[i]}`.bgGreen.black;
		} else if (i === iteration && i !== a.length - 1) {
			msg += `${a[i]}`.bgGreen.black + ', ';
		} else if (i === a.length - 1) {
			msg += `${a[i]}`;
		} else {
			msg += `${a[i]}, `;
		}
	}

	msg += ']';

	console.log(msg);
};

const itDouble = (a, iteration1, iteration2) => {
	var msg = '[';

	for (var i = 0; i < a.length; i++) {
		if (i === iteration1 && i === a.length - 1) {
			msg += `${a[i]}`.bgGreen.black;
		} else if (i === iteration2 && i === a.length - 1) {
			msg += `${a[i]}`.bgWhite.black;
		} else if (i === iteration1 && i !== a.length - 1) {
			msg += `${a[i]}`.bgGreen.black + ', ';
		} else if (i === iteration2 && i !== a.length - 1) {
			msg += `${a[i]}`.bgWhite.black + ', ';
		} else if (i === a.length - 1) {
			msg += `${a[i]}`;
		} else {
			msg += `${a[i]}, `;
		}
	}

	msg += ']';

	console.log(msg);
};

const subarray = (s, start, end) => {
	if (typeof s === 'string') {
		var msg = '';
	} else if (typeof s === 'object') {
		var msg = '[';
	}

	for (var i = 0; i < s.length; i++) {
		if (i >= start && i < end) {
			if (typeof s === 'string') {
				msg += `${s[i]}`.bgCyan.black;
			} else if (typeof s === 'object') {
				if (i === s.length - 1) {
					msg += `${s[i]}`.bgCyan.black;
				} else {
					msg += `${s[i]}`.bgCyan.black + ', ';
				}
			}
		} else {
			if (typeof s === 'string') {
				msg += `${s[i]}`;
			} else if (typeof s === 'object') {
				if (i === s.length - 1) {
					msg += `${s[i]}`;
				} else {
					msg += `${s[i]}, `;
				}
			}
		}
	}

	if (typeof s === 'object') {
		msg += ']';
	}

	console.log(msg);
};

const binarySearch = (a, start, end) => {
	let mid = start + (((end - start) / 2) | 0), // floor
		msg = '[ ';

	for (var i = 0; i < a.length; i++) {
		if (i === mid && i === start && i === end) {
			msg += `${a[i]}`.bold.italic.underline.bgGrey;
		} else if (i === mid && i === start) {
			msg += `${a[i]}`.bold.italic.underline.bgGrey;
		} else if (i === mid && i === end) {
			msg += `${a[i]}`.bold.italic.underline.bgGrey;
		} else if (i === mid) {
			msg += `${a[i]}`.bold.italic.underline;
		} else if (i === start) {
			msg += `${a[i]}`.bgGrey;
		} else if (i === end) {
			msg += `${a[i]}`.bgGray;
		} else if (i < start) {
			msg += `${a[i]}`.hidden;
		} else if (i > end) {
			msg += `${a[i]}`.hidden;
		} else {
			msg += `${a[i]}`;
		}

		if (i !== a.length - 1) {
			msg += ', ';
		}
	}
	msg += ' ]';
	console.log(msg);
};

const midAndTarget = (a, mid, target) => {
	let msg = '';

	msg += `a[${mid}] = ${a[mid]}\n`;

	if (target < a[mid]) {
		msg += 'target is less than a[mid]'.red;
	} else if (target > a[mid]) {
		msg += 'target is greather than a[mid]'.red;
	} else {
		msg += 'target is a[mid]'.green;
	}

	console.log(msg);
};

const printHash = (hash) => {
	var msg = `   key  `.bold + `|`.bold + `   val  \n`.bold;
	msg += `--------|--------\n`.bold;

	let keys = Object.keys(hash);

	for (var i = 0; i < keys.length; i++) {
		let key = keys[i],
			value = hash[key],
			keyString = String(key),
			valueString = String(value);

		while (keyString.length <= 8) {
			keyString = ' ' + keyString;

			if (keyString.length === 8) break;

			keyString += ' ';
		}

		while (keyString.length <= 8) {
			valueString = ' ' + valueString;

			if (valueString.length === 8) break;

			valueString += ' ';
		}

		msg += keyString + '|'.bold + valueString;
		if (i !== keys.length - 1) msg += '\n';
	}

	console.log(msg);
	hl();
};

const arrayValue = (a, iteration) => {
	console.log(`array[${iteration}] = ${a[iteration]}`.bgYellow.black);
};

const stringValue = (a, iteration) => {
	console.log(`string[${iteration}] = ${a[iteration]}`.bgYellow.black);
};

const notFound = () => {
	console.log('not found\n'.bgRed);
};

const found = (msg) => {
	if (typeof msg === 'object') {
		console.log(`found: [ ${msg} ]\n`.bgGreen.black);
	} else {
		console.log(`found: ${msg}\n`.bgGreen.black);
	}
};

// horizontal line (hl)
const hl = () => {
	console.log('---------------'.green);
};

const log = (msg) => {
	console.log(msg);
};

/*
 *	Helper Functions
 */
const swap = (a, x, y) => {
	var temp = a[x];

	a[x] = a[y];
	a[y] = temp;
};

const findLastNumber = (a) => {
	for (var i = 0; i < a.length; i++) {
		if (a[i] === null) break;
	}

	return i - 1;
};

const record = (a, mid, result, target) => {
	if (result == null || diff(a[mid], target) < diff(a[result], target)) {
		return mid;
	}
	return result;
};

const diff = (x, y) => {
	return Math.abs(x - y);
};

module.exports = {
	start,
	end,
	it,
	itDouble,
	subarray,
	binarySearch,
	midAndTarget,
	stringValue,
	arrayValue,
	printHash,
	recursiveStep,
	baseCaseHit,
	notFound,
	found,
	hl,
	log,
	swap,
	findLastNumber,
	record,
	diff,
};