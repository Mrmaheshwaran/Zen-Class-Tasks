//   Do the below programs in arrow functions.


// 1. Print odd numbers in an array

const array1 = [1, 2, 3, 4, 5];

const oddNumbers = array1.filter(num => num % 2 !== 0);

console.log(oddNumbers);


// 2. Convert all the strings to title caps in a string array

const array2 = ["apple", "orange", "grape"];

const titleCaseArray = array2.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

console.log(titleCaseArray);


// 3. Sum of all numbers in an array

const array3 = [1, 2, 3, 4, 5];

const sum = array3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);


// 4. Return all the prime numbers in an array

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function getPrimeNumbers(array) {
    return array.filter(num => isPrime(num));
}

const array4 = [1, 2, 3, 4, 5, 6, 7, 8];
const primeNumbers = getPrimeNumbers(array4);

console.log(primeNumbers);


// 5. Return all the palindromes in an array

function isPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

function getPalindromes(array) {
    return array.filter(word => isPalindrome(word));
}

const array = ["madam", "hello", "level", "world", "racecar"];
const palindromes = getPalindromes(array);

console.log(palindromes);