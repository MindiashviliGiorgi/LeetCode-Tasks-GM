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


// #1 reverse String (easy)

// let str = "Hello, World"; // Output: "!dlroW ,olleH"
// let str2 = "JavaScript"; // Output: "tpircSavaJ"

// function reserveString(newStr) {
//   let myarr = newStr.split('').reverse().join('');
//   return myarr;
// }

// done

// #2 Calculate Factorial (easy)

// console.log(calculateFactorial(5)); // Output: 120
// console.log(calculateFactorial(0)); // Output: 1
// console.log(calculateFactorial(7)); // Output: 5040

// function calculateFactorial(num) {
//   if(num === 0 || num === 1) {
//     return 1;
//   } else {
//     return num * calculateFactorial(num-1);
//   }
// }

// done

// #3 Palindrome Checker (easy)

// console.log(isPalindrome("racecar")); // Output: true
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
// console.log(isPalindrome("hello world")); // Output: false

// function isPalindrome(str) {
//   str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//   return str === str.split('').reverse().join('');
// }

// short circuit

// function glo(){
//   return 3
// }

// let result = true && glo();

// console.log(result)


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

// function FizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz')
//     } else if (i % 3 === 0) {
//       console.log('Fizz')
//     } else if (i % 5 === 0) {
//       console.log('Buzz')
//     } else {
//       console.log(i)
//     }
//   }
// }

// FizzBuzz(15)


//  #5 Two sum (medium)

// const nums = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum(nums, target));

// function twoSum(nums, target) {
//   const numToIndexMap = {};

//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i]

//     if (numToIndexMap.hasOwnProperty(complement)) {
//       return [numToIndexMap[complement], i]
//     }
//     numToIndexMap[nums[i]] = i;
//   }
//   return null
// }

// better way for twoSum

// function twoSum(nums, target) {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     let num1 = nums[i];
//     let num2 = target - num1;
//     if (map.has(num2)) {
//       return [i, map.get(num2)];
//     }
//     map.set(num1, i);
//   }
// }

// another explain

// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
// }


// #6  Longest Substring Without Repeating Characters (medium)

// console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 (the longest substring without repeating characters is "abc")
// console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1 (the longest substring without repeating characters is "b")
// console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3 (the longest substring without repeating characters is "wke")


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


// let k = 0;

// do {
//   console.log(k);
//   k++;
// } while (k > 1);


// function Currying

// function multiply(a, b) {
//   return a * b;
// }

// function curriedMultiply(a) {
//   return function (b) {
//     return a * b;
//   };
// }

// const double = curriedMultiply(2)
// console.log(double(5))

// const triple = curriedMultiply(3);
// console.log(triple(5))

//  call, apply and bind
let person = {
  name : "Giorgi"
}

function sayHello(message) {
  // console.log(`${message}, ${this.name}`)
}

// call
sayHello.call(person, 'Hello')

// apply
sayHello.apply(person, ['Hi'])

const res = sayHello.bind(person);
res('Gaumarjos')

// String

let str1 = 'Hello';
let str2 = 'World';
let result = str1 + ' ' + str2;

// concat 
result = str1.concat(" ", str2)

// substring
let subs = result.substring(0, 3);

// split
let splittedResult = result.split(' ');

// replace
let repl = result.replace("World", "Georgia");

// trim 
let trimStr = "  Giorgi   ";

// string immutability
// string are immutable if we change value memory adress will be changed

// Concatenate strings

// let s1 = 'Hello';
// let s2 = 'World';

// + operator, contact() method, template literals ${}, 
// join ()
// let stringsArray = [s1, s2];
// let s3 = stringsArray.join(' ');

////////////////////////////

// DOM ? difference HTML and DOM
// Document Object Model

// selectors
// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByTagName();
// document.querySelector();
// document.querySelectorAll();

// querySelector return first className if we have more than one

// innerHTML and textContent
// innerHTML return only inside p tag text
// textContent return <p>text</p>

// createElement cloneNode
// create div
// let newDiv = document.createElement('div');
// newDiv.textContent = 'New Div in HTML';
// add this div in body
// document.body.appendChild(newDiv)

// cloneNode()
// let existingElement = document.getElementById('element');
// let clonedElement = existingElement.cloneNode(true);
// clonedElement.textContent = 'Giorgi';
// document.body.appendChild(clonedElement)

// createTextNode()
// catch element
// let parentElement = document.getElementById('id');
// create text
// let newText = document.createTextNode('This is what it is');
// Append
// parentElement.appendChild(newText);

// Error handling

// try {
//   const result = somethingVar + 10;
//   console.log(result)
// } catch (error) {
//   console.log('Error: ', error.message)
// }
// finally {
//   console.log('Finally executed')
// }

// Type of Error

// typeError console.log('Girogi'
// ReferenceError console.log(somethingUndefinedVariable)
// typeError let num = 1; num.toUpperCase(); 
// rangeError const arr = [1, 2] console.log(arr[10])

// Objects create ways
// Object Literal
const user = {
  firstName : 'Giorgi',
  lastName : 'Mindiashvili'
}

// Object constructor
var user2 = new Object();
user2.name = 'Lasha';
user2.age = 19;

// Object.create() method
var userParent = {
  name : '',
  age : 0
}
var man = Object.create(userParent);
man.name = 'Zurab';
man.age = 47;

// Difference Array and Object

// Array are collections of values; []
// Objects are collections of key-value pairs; {}

// in array elements are ordered they have indexes 0, 1, 2
// in object propertys are unordered

// add, modify and delete
const player = {};
// add
player.name = "Giorgi";
player.age = 23;
// modify
player.age = 19;
// delete
delete player.age;



