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