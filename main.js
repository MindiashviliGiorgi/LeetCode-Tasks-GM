// #1 reverse String (easy)

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


// #2 Calculate Factorial (easy)

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

// #3 Palindrome Checker (easy)

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

// #4 FizzBuzz (easy)

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

//  #5 Two sum (medium)

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

// #6  Longest Substring Without Repeating Characters (medium)

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

// #7 Merge Intervals (medium)

// const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
// // console.log(mergeIntervals(intervals));
// // Output: [[1, 6], [8, 10], [15, 18]]

// function mergeIntervals(intervals) {
//   if (intervals.length <= 1) {
//     return intervals;
//   }

//   intervals.sort((a, b) => a[0] - b[0]);
//   const merged = [intervals[0]];

//   for (let i = 1; i < intervals.length; i++) {
//     const currentInterval = intervals[i];
//     const lastMergedInterval = merged[merged.length - 1];

//     if (currentInterval[0] <= lastMergedInterval[1]) {
//       lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
//     } else {
//       merged.push(currentInterval);
//     }
//   }

//   return merged;
// }

// console.log(mergeIntervals(intervals));

///////////////////////////////////////////////////////////////////////////////////////////////

// #8 Find the Maximum Number in an Array (easy)

// const numbers = [3, 7, 1, 9, 4];
// console.log(findMax(numbers)); // Output: 9

// function findMax(numbers) {
//   let maxNumber = numbers[0]

//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > maxNumber) {
//       maxNumber = numbers[i]
//     }
//   }
//   return maxNumber;
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////

// #9 Count the Number of Words in a String (easy)

// console.log(countWords("Hello, world!")); // Output: 2 (two words: "Hello" and "world")
// console.log(countWords("This is a simple task.")); // Output: 5 (five words)

// function countWords(str) {
//   let strCut = str.split(' ')
//   return strCut.length;
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////

// #10 Implement a Stack

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2
console.log(stack.isEmpty()); // Output: false
