//Task 1

//let arr = [2,3,4,5]
// let total = 1

// for(let i = 0; i< arr.length; i++) {
//     total *=arr[i]
// }

// console.log(total);

// let stotal = 1;
// let i = 0;
// while (i < array2.length) {
//     stotal *= array2[i]; 
//   i++; 
// };
// console.log(stotal);



//Task 2

// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log([i] + " is odd");
//     }
//     else {
//         console.log([i] + " is even");
//     }
// };



//Task 3

// function randArray (a) {
//     let arr = [];
//     for (i = 0; i<a; i++)
//     arr [i] = Math.floor(Math.random ()* 500) +1;
//     consolex.log (arr);

// }

// randArray (5);



//Task 4

// function raiseToDegree (a,b){

//     return Math.pow (a,b);
// }

// let a = prompt ("Enter number a");
// let b = prompt ("Enter number b");

// console.log(raiseToDegree (a,b));



//Task 5

// function findMin() {
//     let i = 0,
//         min = arguments[0];
  
//     for (i = 1; i < arguments.length; i++) {
//         if (min > arguments[i]) {
//             min = arguments[i];
//         }
//     }
//     return min;
//   }
//   console.log(findMin(12, 14, 4, -4, 0.2));



//Task 6

// const notUniqueArr = [1, 2, 3, 5, 3];
// const uniqueArr = [1, 2, 3, 5, 11];

// function findUnique(someArr) {
//     return new Set(someArr).size == someArr.length;
//     }
// console.log(findUnique(notUniqueArr));
// console.log(findUnique(uniqueArr));


//Task 7


// function returnLastElement(arr1, count) {
//     if (count == null) {
//       console.log(arr1.pop());
//     } else {
//       console.log(arr1.slice(-count));
//     }
//   }
  
//   console.log( returnLastElement([3, 4, 10, -5]));
//   console.log( returnLastElement([3, 4, 10, -5],2));
//   console.log( returnLastElement([3, 4, 10, -5],8));



//Task 8
//   function changeFirstLetter(str) {
//     let array = str.split(' ');
//     let newArray = [];
  
//     for(let i = 0; i < array.length; i++) {
//       newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
//     }
//     return newArray.join(' ');
//   }
//   console.log( changeFirstLetter("i love java script"));