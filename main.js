// #1 reverse String

// let str = "Hello, World"; // Output: "!dlroW ,olleH"
// let str2 = "JavaScript"; // Output: "tpircSavaJ"

// 1 create array from strings and reserve it

// let myArr = str.split('').reverse();
// let myArr2 = str2.split('').reverse();

// 2 Create new string for this reserved array

// let reversedStr = myArr.join('');
// let reversedStr2 = myArr2.join('')
// console.log(reversedStr)
// console.log(reversedStr2)

//////////////////////////////////////////////////////////


// #2 Calculate Factorial

// console.log(calculateFactorial(5)); // Output: 120
// console.log(calculateFactorial(0)); // Output: 1
// console.log(calculateFactorial(7)); // Output: 5040

// 1 create function 

// const calculateFactorial = (x) => {
//   if(x === 0 || x === 1){
//     return 1;
//   } else {
//     return x * calculateFactorial(x - 1)
//   }
// }

// console.log(calculateFactorial(5))
// console.log(calculateFactorial(0))
// console.log(calculateFactorial(7))

//////////////////////////////////////////////////////////

// #3 Palindrome Checker

// console.log(isPalindrome("racecar")); // Output: true
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
// console.log(isPalindrome("hello world")); // Output: false

// 1 create function 

// function isPalindrome(str) {
//   // Remove non-alphanumeric characters and convert to lowercase
//   str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//   // Check if the string is equal to its reverse and return true or false
//   return str === str.split('').reverse().join('')
// }

////////////////////////////////////////////////////////////

// #4 FizzBuzz

// fizzBuzz(15);
// Output:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz

// function fizzBuzz(n) {
//   for(let i = 1; i <= n; i++){
//     if(i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzBuzz');
//     } else if (i % 3 === 0) {
//       console.log('fizz')
//     } else if (i % 5 === 0) {
//       console.log('Buzz')
//     } else {
//       console.log(i)
//     }
//   }
// }
// fizzBuzz(15);

////////////////////////////////////////////////////////////////

//  #5 Two sum

// const nums = [2, 7, 11, 15];
// const target = 9;
// // console.log(twoSum(nums, target)); // Output: [1, 2] (indices of elements 2 and 7)

// function  twoSum(nums, target) {
//   const numToIndexMap = {};

//   for(let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];

//     if(numToIndexMap.hasOwnProperty(complement)) {
//       return [numToIndexMap[complement], i]
//     }
//     numToIndexMap[nums[i]] = i;
//   }
//   return null;
// }

// console.log(twoSum(nums, target))

//////////////////////////////////////////////////////////////////////////////////////////////

// #5  Longest Substring Without Repeating Characters

// console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 (the longest substring without repeating characters is "abc")
// console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1 (the longest substring without repeating characters is "b")
// console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3 (the longest substring without repeating characters is "wke")



// // 1 create function

// function lengthOfLongestSubstring(str) {
//   if(str.length === 0) return 0;

//   let maxLength = 0;
//   let start = 0;
//   const charIndexMap = {};

//   for(let i = 0; i < str.length; i++) {
//     const currentChar = str[i]

//     if(charIndexMap.hasOwnProperty(currentChar) && charIndexMap[currentChar] >= start) {
//       start = charIndexMap[currentChar] + 1;
//     }
//     charIndexMap[currentChar] = i;
//     maxLength = Math.max(maxLength, i - start + 1)
//   }

//   return maxLength;
// }

//////////////////////////////////////////////////////////////////////////////////

// #6 Merge Intervals

const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(mergeIntervals(intervals));
// Output: [[1, 6], [8, 10], [15, 18]]
