//Do the below programs in anonymous function & IIFE

//    1. Print odd numbers in an array

let Mahesh = [1, 2, 3, 4, 5];

for (const element of Mahesh) 
    if (element % 2 !== 0) {

        console.log(element) }


//    2. Convert all the strings to title caps in a string array

const array = ["apple", "orange", "grape"];

const titleCaseArray = array.map(word => {
    return word.replace(/\b\w/g, char => char.toUpperCase());
});

console.log(titleCaseArray);

//    3. Sum of all numbers in an array


const maheshhh = [1, 2, 3, 4, 5];

let sum = 0;

for (const element of maheshhh) {
    sum += element;
}

//   4. Return all the prime numbers in an array

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

const Maheshh = [1, 2, 3, 4, 5, 6, 7, 8];
const primeNumbers = getPrimeNumbers(Maheshh);

console.log(primeNumbers);

//   5. Return all the palindromes in an array

function isPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

function getPalindromes(array) {
    return array.filter(word => isPalindrome(word));
}

const Mahesh4 = ["Madam", "God", "racecar", "level", "hello"];
const palindromes = getPalindromes(Mahesh4);

console.log(palindromes);

//   6. Return median of two sorted arrays of the same size

function findMedianSortedArrays(nums1, nums2) {
    const mergedArray = mergeSortedArrays(nums1, nums2);
    const length = mergedArray.length;
    const mid = Math.floor(length / 2);

    if (length % 2 === 0) {
        // If there are even elements, return the average of the middle two elements
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        // If there are odd elements, return the middle element
        return mergedArray[mid];
    }
}

function mergeSortedArrays(nums1, nums2) {
    const mergedArray = [];
    let i = 0, j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            mergedArray.push(nums1[i]);
            i++;
        } else {
            mergedArray.push(nums2[j]);
            j++;
        }
    }

    while (i < nums1.length) {
        mergedArray.push(nums1[i]);
        i++;
    }

    while (j < nums2.length) {
        mergedArray.push(nums2[j]);
        j++;
    }

    return mergedArray;
}

// Example usage:
const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];

console.log(findMedianSortedArrays(nums1, nums2));



//   7. Remove duplicates from an array

function removeDuplicates(array) {
    return [...new Set(array)];
}

const Mahesh5 = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(Mahesh5);

console.log(uniqueArray);


//   8. Rotate an array by k times

function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; // If k is greater than array length, take modulo to get the effective rotations

    // Rotate the array by k times
    const rotatedPart = arr.slice(n - k);
    const remainingPart = arr.slice(0, n - k);
    
    return rotatedPart.concat(remainingPart);
}

const Mahesh6 = [1, 2, 3, 4, 5];
const k = 3;
const rotatedArray = rotateArray(Mahesh6, k);

console.log(rotatedArray);