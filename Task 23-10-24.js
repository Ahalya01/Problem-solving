//1.Check if all elements in an array are unique.
function isAllElementsUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return false;
            }
        }
    }
    return true;
}
const sampleArray = [1, 2, 3, 4, 5];
console.log(isAllElementsUnique(sampleArray)); 
//2. Find the Missing Number in an Array
function findMissingNumber(arr, n) {
    let totalSum = 0;
    let arrSum = 0;
    for (let i = 1; i <= n; i++) {
        totalSum += i;
    }
    for (let j = 0; j < arr.length; j++) {
        arrSum += arr[j];
    }
    return totalSum - arrSum;
}
const Array = [1, 2, 4, 5];
const n = 5;
console.log(findMissingNumber(Array, n)); 

//3. Find the Longest Word in an Array
function findLongestWord(arr) {
    let longestWord = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i];
        }
    }
    return longestWord;
}
const sample = ["apple", "banana", "cherry", "blueberry"];
console.log(findLongestWord(sample)); 

