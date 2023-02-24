// find max value in an array
const maxValue = nums => {
  let max = -Infinity;

  for (let num of nums)
    if (num > max) max = num;

  return max;
}

// is n a prime number
const isPrime = n => {
  if (n === 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (Number.isInteger(n / i) && i !== n) return false;
  }

  return true;
}

/* TESTING */
console.log(maxValue([4, 7, 2, 8, 10, 9])); // -> 10
console.log(maxValue([10, 5, 40, 40.3])); // -> 40.3
console.log(maxValue([-5, -2, -1, -11])); // -> -1
console.log(maxValue([42])); // -> 42
console.log(maxValue([1000, 8])); // -> 1000
console.log(maxValue([1000, 8, 9000])); // -> 9000
console.log(maxValue([2, 5, 1, 1, 4])); // -> 5

console.log(isPrime(2)); // -> true
console.log(isPrime(2)); // -> true
console.log(isPrime(3)); // -> true
console.log(isPrime(4)); // -> false
console.log(isPrime(5)); // -> true
console.log(isPrime(6)); // -> false
console.log(isPrime(7)); // -> true
console.log(isPrime(8)); // -> false
console.log(isPrime(25)); // -> false
console.log(isPrime(31)); // -> true
console.log(isPrime(2017)); // -> true
console.log(isPrime(2048)); // -> false
console.log(isPrime(1)); // -> false
console.log(isPrime(713)); // -> false

