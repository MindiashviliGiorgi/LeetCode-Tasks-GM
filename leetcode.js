// 1 Create Hello World Function

// const f = createHellWorld();
// console.log(f())

// function createHellWorld() {
//   return function(...args) {
//     return "Hello World";
//   }
// };



// 2 Counter

// let createCounter = function(n) {
//   return function() {
//     return n++
//   }
// }

// const counter = createCounter(10)
// console.log(
//   counter(),
//   counter()
// )


// 3 Counter II

// var createCounter = function(init) {
//   let count = init;

//   function increment() {
//     return count + 1;
//   };

//   function decrement() {
//     return count - 1;
//   };

//   function reset() {
//     count = init;
//     return count
//   }

//   return {
//     increment : increment,
//     decrement : decrement,
//     reset : reset
//   }
// }

// const counter = createCounter(5)

// console.log("increment: " + counter.increment())
// console.log("decrement: " + counter.decrement())
// console.log("reset: " + counter.reset())


// 4 Apply Transform Over Each Element in Array

// const numsArray = [1, 2, 3, 4]; // out: [2, 3, 4, 5]

// function returnedArray(arr) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArray.push(arr[i] + 1);
//   }
//   return newArray;
// }

// const resultArray = returnedArray(numsArray);
// console.log(resultArray);


// 5 Filter Elements from Array

// input 0, 10, 20, 30 , 40; output 20, 30, 40

// const numsArray = [0, 10, 20, 30, 40];

// function filterArray(arr) {
//   const newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 10) {
//       newArray.push(arr[i])
//     }
//   }
//   return newArray;
// }

// console.log(filterArray(numsArray))

