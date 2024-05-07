//######################################################################################################
// console.log("let's start");
// require('./main');
// const math = require('./math')
// const {add, sub} = math

// console.log(add(2,3));
// console.log(sub(2,3));



// var largestOddNumber = function(num) {
//     for(let i = num.length-1; i >= 0 ; i--) {
//         let n = num[i];
//         if(n%2 !== 0){
//             return num;
//         }
//         else {
//              num = num.slice(0, i);
//              res = num;
//         }
//     } 
//     return res;
// };

// console.log(largestOddNumber("4206"));

// var longestCommonPrefix = function(strs) {
//     let prefix = strs[0];
//     for(index = 1; index<strs.length; index++){
//         while (strs[index].indexOf(prefix) !== 0) {
//             prefix = prefix.substring(0, prefix.length - 1);
//             if (prefix === '') return '';
//         }
//     }
//     return prefix;
// };
// var strs = ["flower","flow","flight"]

// console.log(longestCommonPrefix(strs));


// const data = require("./data.json");

// console.log(data);
// console.log(data.name);
// console.log(data.address);

//PATH ######################################################################################################
// const path = require("path");
// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.parse(__filename));
// console.log(path.format(path.parse(__filename)));
// console.log(path.isAbsolute(__filename));

// console.log(path.join("folder1", "folder2", "index.html"));
// console.log(path.join("/folder1", "folder2", "index.html"));
// console.log(path.join("/folder1", "//folder2", "index.html"));
// console.log(path.join("/folder1", "//folder2", "../index.html"));
// console.log(path.join(__dirname, "data.json"));

// console.log(path.resolve("folder1", "folder2", "index.html"));
// console.log(path.resolve("/folder1", "folder2", "index.html"));
// console.log(path.resolve("/folder1", "//folder2", "index.html"));
// console.log(path.resolve("/folder1", "//folder2", "../index.html"));
// console.log(path.resolve(__dirname, "data.json"));

//CALLBACK ######################################################################################################
// A function pass as an argument in a function is called callback function

// function greet(name) {
//     console.log(`Hello ${name}`);
// }

// function higherOrderFn(callback) {
//     const name = 'Pradeep';
//     callback(name);
// }
// higherOrderFn(greet);

//Synchronous callback: A callback which is execute immediately is called a sysnchronous callback

// let numbers = [1, 2, 4, 7, 3, 5, 6];
// console.log(numbers.sort((a, b) => a-b));
// console.log(numbers.filter(n => n%2 === 0));
// console.log(numbers.map(n => n/2));

// let items = [
//     { name: 'Apple', quantity: 5 },
//     { name: 'Banana', quantity: 10 },
//     { name: 'Orange', quantity: 3 }
// ];

// items.sort((a, b) => {
//     // First, compare by name
//     let nameComparison = a.name. (b.name);
//     // If the names are equal, compare by quantity
//     if (nameComparison === 0) {  
//         return a.quantity - b.quantity;
//     }
//     return nameComparison;
// });
// console.log(items);

//Asynchronous callback: A callback that is often used to continue or resume code execution after an asynchronous operation has completed.
//callbacks aere used to delay the execution of function until a particular time or event has occurred
//In node.js have an asynchronous nature to prevent blocking of execution 
///Ex: reading data from a file, fetching data from a database or handling a network request.

//######################################################################################################

let arr = [20, 4, 5,  6, 7, 8, 10, 11, 12, 14, 16];

const result = arr.filter(evenNo => evenNo%2 == 0);

const result1 = arr.map(multiByTwo => multiByTwo*2);

const result2 = arr.reduce((sumOfNum, index) => sumOfNum+index);

console.log(result);
console.log(result1);
console.log(result2);