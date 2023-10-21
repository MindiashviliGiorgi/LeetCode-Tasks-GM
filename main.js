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
// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   push(item) {
//     this.items.push(item)
//   }

//   pop() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     return this.items.pop();
//   }

//   peek() {
//     if(this.isEmpty()) {
//       return null;
//     }
//     return this.items[this.items.length - 1]
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }
// }

// const stack = new Stack();

// stack.push(1);
// stack.push(2);
// stack.push(3);

// console.log(stack.pop()); // Output: 3
// console.log(stack.peek()); // Output: 2
// console.log(stack.isEmpty()); // Output: false

//////////////////////////////////////////////////////////////////////////////////

// #11 Sum of Array Elements(easy)

// console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
// console.log(sumArray([10, -5, 7, 3])); // Output: 15
// console.log(sumArray([])); // Output: 0

// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
//   }
//   return sum;
// }                                                          

// #12 Factorial Calculator

// console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
// console.log(factorial(0)); // Output: 1 (0! is defined as 1)
// console.log(factorial(10)); // Output: 3628800 (10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 3628800)


// function factorial(x) {
//   if(x === 0 || x === 1) {
//     return 1;
//   } else {
//     return x * factorial(x - 1)
//   }
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////

// #13 Find the Largest Element in an Array(easy)

// console.log(findLargestElement([5, 8, 2, 10, 3])); // Output: 10
// console.log(findLargestElement([1, 0, -1, -5, -2])); // Output: 1
// console.log(findLargestElement([42, 42, 42, 42])); // Output: 42

// function findLargestElement(arr) {
//   let maxNumber = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxNumber) {
//       maxNumber = arr[i]
//     }
//   }
//   return maxNumber;
// }

////////////////////////////////////////////////////////////////////////////////////////

// #14 Remove Duplicates from an Array(medium)

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
// console.log(removeDuplicates(["apple", "banana", "apple", "cherry"])); // Output: ["apple", "banana", "cherry"]
// console.log(removeDuplicates([])); // Output: []

// function removeDuplicates(arr) {
//   const arrObjectMode = {};
//   let newArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     if(!arrObjectMode[arr[i]]) {
//       arrObjectMode[arr[i]] = true;
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// }

///////////////////////////////////////////////////////////////////////////////////////////////////

// #15 Implement a Queue

// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(element) {
//     // Add an element to the back of the queue.
//     this.items.push(element)
//   }

//   dequeue() {
//     // Remove and return the element at the front of the queue
//     const frontElement = this.items.shift();
//     return frontElement;
//   }

//   peek() {
//     // Return the element at the front of the queue without removing it.
//     return this.items[0]
//   }

//   isEmpty() {
//     // Return true if the queue is empty, otherwise return false.
//     return this.items.length === 0;
//   }

//   size() {
//     // Return the number of elements in the queue.
//     return this.items.length;
//   }
// }

// console.log(Queue)

//////////////////////////////////////////////////////////////////////////////////////////////

// #16 Merge Sorted Arrays(medium)

// console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
// console.log(mergeSortedArrays([10, 20, 30], [5, 15, 25])); // Output: [5, 10, 15, 20, 25, 30]

// function mergeSortedArrays(arr1, arr2) {
//   let merged = [];
//   let index1 = 0;
//   let index2 = 0;

//   while (index1 < arr1.length && index2 < arr2.length) {
//     if (arr1[index1] < arr2[index2]) {
//       merged.push(arr1[index1])
//       index1++;
//     } else {
//       merged.push(arr2[index2])
//       index2++;
//     }
//   }
//   return merged;
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// #17 Find the Smallest Element in an Array(easy)

// console.log(findSmallestElement([5, 8, 2, 10, 3])); // Output: 2
// console.log(findSmallestElement([1, 0, -1, -5, -2])); // Output: -5
// console.log(findSmallestElement([42, 42, 42, 42])); // Output: 42

// function findSmallestElement(arr) {
//   let smallestElement = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (smallestElement > arr[i]) {
//       smallestElement = arr[i]
//     }
//   }
//   return smallestElement
// }

///////////////////////////////////////////////////////////////////////////////////////////////////

// #18 Count the Occurrences of a Specific Element in an Array(easy)

// console.log(countOccurrences([1, 2, 3, 4, 2, 5, 2], 2)); // Output: 3 (2 appears 3 times)
// console.log(countOccurrences(["apple", "banana", "apple", "cherry"], "apple")); // Output: 2 ("apple" appears 2 times)
// console.log(countOccurrences([1, 2, 3, 4, 5], 6)); // Output: 0 (6 does not appear in the array)

// function countOccurrences(arr, value) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//       count++;
//     }
//   }
//   return count;
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// #19 Reverse Words in a String(easy)

// console.log(reverseWords("Hello, World")); // Output: "World Hello,"
// console.log(reverseWords("JavaScript is fun")); // Output: "fun is JavaScript"
// console.log(reverseWords("Coding is awesome!")); // Output: "awesome! is Coding"

// function reverseWords(str) {
//   str = str.split(' ').reverse().join(' ')
//   return str
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// #20 Implement a Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  delete(value) {
    if (!this.head) {
      return;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
}

// Example usage:
const list = new LinkedList();
list.append(1);
list.append(2);
list.prepend(0);
list.append(3);
list.delete(2);
console.log(list.toArray()); // Output: [0, 1, 3]
console.log(list.size());   // Output: 3
