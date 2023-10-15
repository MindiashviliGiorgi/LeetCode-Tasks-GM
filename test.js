// 1, 3, 5, 7, 9

// #1 reverse String (easy)

// let str = "Hello, World"; // Output: "!dlroW ,olleH"
// let str2 = "JavaScript"; // Output: "tpircSavaJ"

// #3 Palindrome Checker (easy)

// console.log(isPalindrome("racecar")); // Output: true
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
// console.log(isPalindrome("hello world")); // Output: false

//  #5 Two sum (medium)

// const nums = [2, 7, 11, 15];
// const target = 9;
// // console.log(twoSum(nums, target)); // Output: [1, 2] (indices of elements 2 and 7)

// #7 Merge Intervals (medium)

// const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
// // console.log(mergeIntervals(intervals));
// // Output: [[1, 6], [8, 10], [15, 18]]

// #9 Count the Number of Words in a String (easy)

// console.log(countWords("Hello, world!")); // Output: 2 (two words: "Hello" and "world")
// console.log(countWords("This is a simple task.")); // Output: 5 (five words)

/////////////////////////////////////////////////////////////////////////////////////////////

// #1 reverse String (easy)

// let str = "Hello, World"; // Output: "!dlroW ,olleH"
// let str2 = "JavaScript"; // Output: "tpircSavaJ"

// function reverseString(s) {
//   let strArray;
//   strArray = s.split('').reverse().join('')
//   return strArray;
// }

// console.log(reverseString(str))
// console.log(reverseString(str2))              +

//////////////////////////////////////////////////

// #3 Palindrome Checker (easy)

// console.log(isPalindrome("racecar")); // Output: true
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
// console.log(isPalindrome("hello world")); // Output: false

// function isPalindrome(str) {
//   str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//   return str === str.split('').reverse().join('');
// }

//  #5 Two sum (medium)

// const nums = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum(nums, target)); // Output: [1, 2] (indices of elements 2 and 7)

// function twoSum(nums, target) {
//   const numToIndexMap = {};

//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i]
    
//     if(numToIndexMap.hasOwnProperty(complement)) {
//       return [numToIndexMap[complement], i]
//     }
//     numToIndexMap[nums[i]] = i;
//   }
//   return null
// }                                            +

/////////////////////////////////////////////////

// #7 Merge Intervals (medium)

const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
// console.log(mergeIntervals(intervals));
// Output: [[1, 6], [8, 10], [15, 18]]



