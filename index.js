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

const path = require("node:path");

console.log(__filename);
console.log(__dirname);

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.extname(__filename));
console.log(path.extname(__dirname));