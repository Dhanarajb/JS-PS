// ------------Reverse--------------
// const rever = (str) => {
//   const arr = str.split('');
//   arr.reverse();
//   str = arr.join('');
//   console.log(str);
// };
// rever('apple');
// ----------
// const rever = (str) => {
//   const arr = str.split('').reverse().join('')
//   console.log(arr);
// };
// rever("apple com");

// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev);
// }
// console.log(reverse('Dhanaraj'));
// ---------------

// (function (str) {
//   let rever = '';
//   for (let charavter of str) {
//     rever = charavter + rever;
//   }
//   console.log(rever);
// })('dhanaraj');
// -----------Reverse the integer-----------
// const reverInt=(n)=>{
//   return (n.toString().split('').reverse().join(''))
// }
// console.log({
//   testcase1:reverInt(51),
//   testcase2:reverInt(-342),
//   testcase2:reverInt(500)
// })
// -------------Max element in arr---------
// const MaxFind = (arr) => {
//   let max = arr.reduce((prev, curr) => (prev > curr ? prev : curr));
//   console.log(max);
// };
// MaxFind([1, 2, 3, 2, 223, 3, 4, 4, 555, 3]);

// --------------2nd largest-----------------
// const SecondLarge = (arr) => {
//   let FirstLarge = Math.max(...arr);
//   let index = arr.indexOf(FirstLarge);
//   arr.splice(index);
//   let SecondLargee = Math.max(...arr);
//   console.log(SecondLargee);
// };
// SecondLarge([1, 2, 3, 224, 223, 3, 4, 4, 555, 3]);

// // ----------------Min element in arr----------
// const MinFind=(arr)=>{
//   let max = arr.reduce((prev,curr)=>prev<curr ? prev : curr)
//   console.log(max)
// }
// MinFind([1,2,3,2,223,3,4,4,555,3])

// -----------Palindrome------
// const pali = (str) => {
//   const isPali = str.split('').reverse().join('');
//   console.log(str === isPali);
// };
// pali('naya');

// (function (str) {
//   let reversed = '';
//   for (let x of str) {
//     reversed = x + reversed;
//   }
//   console.log(str === reversed);
// })('nayan');

// ------------occurance-----------
// const maxChar=(str)=>{
//   let obj = {};
//   for(let char of str){
//     (!obj[char]) ? obj[char]=1:obj[char]++;
//   }
//   console.log(obj)
// }
// maxChar("Dhanaraj")

// const maxChar = (str) => {
//   let obj = {};
//   for (let char of str) {
//     !obj[char] ? (obj[char] = 1) : obj[char]++;
//   }

//   let maxNum = 0;
//   let maxNumChar = '';
//   for (let char in obj) {
//     if (obj[char] >= maxNum) {
//       maxNum = obj[char];
//       maxNumChar = char;
//     }
//   }
//   console.log(`${maxNumChar} appears ${maxNum} times`);
// };
// maxChar('Dhanarappppj');

// ---------------FizzBuzz--------------

// function fizbuz(n) {
//   for (var i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//       console.log('Fizz');
//     } else if (i % 5 === 0) {
//       console.log('Buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }
// fizbuz(15);
// -----------------chunked array----------
// const chucks = ((arr, n) => {
//   const chunked = [];
//   for (let ele of arr) {
//     let last = chunked[chunked.length - 1];
//     if (!last || last.length === n) {
//       chunked.push([ele]);
//     } else {
//       last.push(ele);
//     }
//   }
//   return chunked;
// })([1, 2, 3, 4, 5, 2, 1, 4], 5);
// console.log({
//   chucks,
// });
// --------------isUnique--------------
// const isUnique = (str) => {
//   const obj = {};
//   for (let i of str) {
//     !obj[i] ? (obj[i] = 1) : obj[i]++;
//   }
//   for (let i in obj) {
//     if (obj[i] > 1) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(isUnique('tomy'));
// -----------Anagram----------------
// const isAnagram = (str1, str2) => {
//   let sorted1 = str1.split('').sort().join("").toLowerCase();
//   let sorted2 = str2.split('').sort().join("").toLowerCase();

//   return (sorted1===sorted2)
// };
// console.log(isAnagram("listen","silent"))
// -----------Longest word-------
// function longest(str) {
//   let words = str.split(' ');
//   let longestword = '';
//   for (let word of words) {
//     if (word.length > longestword.length) {
//       longestword = word;
//     }
//   }
//   console.log(longestword);
// }
// longest('I am tommyyyy Dhanaraj');

// ---------Capitalize-------------
// const capitalize=(str)=>{
//   let words = str.split(" ").map(word=>{
//     return word.charAt(0).toUpperCase()+word.slice(1);
//   })
//   return words.join(" ")
// }
// console.log(capitalize("dhaanu"))

// -----------prime--------------
// const isPrime=(num)=>{
//   if(num<2){
//     return false
//   }
//   for(let i=2;i<num;i++){
//     if(num%i===0){
//       return false
//     }
//   }
//   return true
// }
// console.log(isPrime(11))
// ----------------Remove duplicate----------
// const dupl = (str) => {
//   var uniq = '';
//   for (const chr of str) {
//     if (uniq.includes(chr) == false) {
//       uniq += chr;
//     }
//   }
//   return uniq;
// };
// console.log(dupl('dhshsssm'));

// -------------duplicate array-----------
// const duplicatEl = (arr) => {
//   let sorted = arr.slice().sort(); //clone the array so orginal arr wont modified
//   let result = [];
//   for (let i = 0; i < sorted.length - 1; i++) {
//     if (sorted[i + 1] === sorted[i]) {
//       result.push(sorted[i]);
//     }
//   }
//   return result;
// };
// let arr = [1, 2, 3, 2, 1, 3, 2, 3, 4];
// console.log(`${duplicatEl(arr)}`);
// -------------------------- another

// const Dups = (arr) => {
//   let DupArr = arr.filter((val, index) => arr.indexOf(val) !== index);
//   console.log(DupArr);
// };
// Dups([1, 2, 3, 2, 1, 3, 2, 3, 4]);

// ---------age check--------
// const freinds = [
//   { name: 'Tingu', born: 1997 },
//   { name: 'Piu', born: 1996 },
//   { name: 'pandu', born: 1997 },
//   { name: 'Dhanu', born: 1997 },
// ];
// const currYear = new Date().getFullYear();

// for (let guys of freinds) {
//   guys.age = currYear - guys.born;
//   guys.salary = '15LPA';
// }
// console.log(freinds);

// ----------zeros one side--------
// const arr = [1, 2, 0, 4, 3, 0, 5, 0];
// const zero = 0;
// const result = [
//   arr.filter((e1) => e1 !== zero).arr.filter((e1) => e1 === zero),
// ].flat();
// console.log(result);
// ------>
// function movezeros(arr){
//   var k=0;
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]!==0){
//       let temp = arr[i];
//       arr[i]=arr[k]
//       arr[k]=temp
//       k++
//     }
//   }
//   return arr
// }
// console.log(movezeros([1, 2, 0, 4, 3, 0, 5, 0]))
// // -----------output shoulb be identical---------
// const input1={a:1,b:2,c:3,d:10,e:12}
// const input2={a:2,d:10,e:12,f:6}

// function fun(input1,inout2){
//   let obj = {}
//   for(let i in input1){
//     if(input1[i]==inout2[i]){
//       obj[i]=input1[i];
//     }
//   }
//   return obj;
// }
// console.log(fun(input1,input2))
// ---------second largest number------------
// const input = [1,2,-2,11,7,1]

// const Second=(input)=>{
//     let arr=[...new Set(input)].sort((a,b)=>a-b)
//     return arr[arr.length-2]
// }
// console.log(Second(input))
// -------------missing odd integer arr--------
// const arr = [5, 7, 9, 11, 15, 17];
// for (let i = 0; i < arr.length; i++) {
//   let current = arr[i];
//   let next = current + 2;
//   if (arr[i + 1] !== next) {
//     console.log(next);
//     break;
//   }
// }

// function findMissingNumber(array) {
//   let max = array.length;
//   let expectedSum = (max * (max + 1)) / 2;
//   let actualSum = array.reduce((sum, number) => sum + number);
//   return expectedSum - actualSum;
// }
// console.log(findMissingNumber([0, 6, 2, 3, 5, 1]));
//------------- find common char and print them. eg. "wellness","Awesome" javascript------------

// let str1 = 'wellness';
// let str2 = 'Awesome';
// const comm = (str1, str2) => {
//   let common = '';

//   for (let i = 0; i < str1.length; i++) {
//     if (str2.includes(str1[i])) {
//       common += str1[i];
//     }
//   }

//   console.log(common);
// };
// comm('wellness', 'Awesome');

// --------rotating by 2 position---------
// function rotateArray(arr, n) {
//   return arr.slice(n, arr.length).concat(arr.slice(0, n));
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(arr)
// let rotatedArray = rotateArray(arr, 2);
// console.log(rotatedArray); // [3, 4, 5, 1, 2]

//-------------fib nacii-----

// function fibonacci(n){
//   if(n<=1)
//     return n;
//   else
//     return fibonacci(n-1) + fibonacci (n-2);
// }
// console.log(fibonacci(4))

// ---------------gcd---------
// function greatestCommonDivisor(a, b){
//   if(b == 0)
//     return a;
//   else
//     return greatestCommonDivisor(b, a%b);
// }

// console.log(greatestCommonDivisor(12,23))

// ------------reverse in place-----------
// function reverseInPlace(str){
//   return str.split(' ').reverse().join(' ').split('').reverse().join('');
// }

// console.log(reverseInPlace('I am the good boy'));

// -----------Remove zero
// const arr = [1, 2, 0, 20, 0, 020, 0, 20, 4, 50];

// const rem = arr.filter(function(ele){
//   return ele!==0;
// });
// console.log(rem);
// ------------------removove duplicate-------
// let input = "my name is akash is";
// let words = input.split(" ");
// let uniqueWords = {};

// for (let i = 0; i < words.length; i++) {
//   uniqueWords[words[i]] = true;
// }

// let uniqueArray = Object.keys(uniqueWords);
// let reversedWords = uniqueArray.map(word => word.split("").reverse().join(""));
// let output = reversedWords.join(" ");

// console.log(output); // "hsaka si eman ym"

// ----------------

// let input = 'my name is akash is';
// let words = input.split(' ');
// let uniqueWords = words.filter((word, index) => words.indexOf(word) === index);
// let reversedWords = uniqueWords.map((word) =>
//   word.split('').reverse().join('')
// );
// let output = reversedWords.join(' ');

// console.log(output); // "hsaka si eman ym"
// // console.log(reversedWords)

// --------------anagram group-----------

// const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

// const map = new Map();

// for (const str of strs) {
//   const sortedStr = str.split('').sort().join('');
//   if (map.has(sortedStr)) {
//     map.get(sortedStr).push(str);
//   } else {
//     map.set(sortedStr, [str]);
//   }
// }

// const result = Array.from(map.values());

// console.log(result);
// Output: [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
// -----------two sum-------
// function twoSum(nums, target) {
//   const map = {};
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (complement in map) {
//       return [map[complement], i];
//     }
//     map[nums[i]] = i;
//   }
//   return null;
// }
// function twoSum(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   while (left < right) {
//     const sum = nums[left] + nums[right];
//     if (sum === target) {
//       return [left, right];
//     } else if (sum < target) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return null;
// }

// const nums = [2, 7, 11, 15];
// const target = 9;
// const indices = twoSum(nums, target);
// console.log(indices); // Output: [0, 1]
// // ---------------remove dups---------
// function findFirstRepeatingChar(str) {
//   // Create an empty object to store character counts
//   let charMap = {};

//   // Loop through each character of the string
//   for (let char of str) {
//     // If the current character has already been seen, return it
//     if (charMap[char]) {
//       return char;
//     } else {
//       // Otherwise, mark the character as seen in the charMap object
//       charMap[char] = true;
//     }
//   }

//   // If we reach the end of the string without finding a repeating character, return null
//   return null;
// }

// let str = "character";
// let firstRepeatingChar = findFirstRepeatingChar(str);

// console.log(firstRepeatingChar);
// -----Write a program that takes an array of numbers and returns the sum of the even numbers-----

// const EvenNum=(arr)=>{
//   let sum=0;
//   for(let ch of arr){
//     if(ch%2==0){
//       sum+=ch
//     }
//   }
//   console.log(sum)
// }
// EvenNum([1,2,3,4,5,6,7,8,9])
// ----------------------------------------------
// Write a function that takes a string and returns the first non-repeated character in the string

// const NonRepeat=(str)=>{
//   let nom={}
//   for(let char of str){
//     if(nom[char]){
//       nom[char]++
//     }else{
//       nom[char]=1
//     }
//   }
//   for(let char of str){
//     if(nom[char]===1){
//       return char
//     }
//   }
//  return null
// }
// let str ="dhaanrccj"
// let NonR = NonRepeat(str)
// console.log(NonR)
// ----------------------------------------------
// Write a program that takes a number as input and outputs a string of alternating "ping" and "pong" words, starting with "ping", until the count is reached. For example, if the input number is 4, the output should be "ping-pong-ping-pong".

// function pingPong(num) {
//   let output = '';
//   for (let i = 1; i <= num; i++) {
//     if (i % 2 === 1) {
//       output += ' ping ';
//     } else {
//       output += ' pong';
//     }
//     // if (i < num) {
//     //   output += "-";
//     // }
//   }
//   return output;
// }

// let num = 4;
// let pingPongStr = pingPong(num);
// console.log(pingPongStr);
// ----------------------------------------------
// Write a program that takes a number as input and outputs the Fibonacci sequence up to that number. For example, if the input is 8, the output should be "0 1 1 2 3 5 8".
// function fibonacci(num) {
//   let fibArr = [0, 1];
//   for (let i = 2; i <= num; i++) {
//     let nextNum = fibArr[i-1] + fibArr[i-2];
//     fibArr.push(nextNum);
//   }
//   return fibArr.slice(0, num+1).join(" ");
// }

// let num = 8;
// let fibSeq = fibonacci(num);
// console.log(fibSeq);
// ----------------------------------------------
// Write a function that takes two arrays of numbers and returns a new array containing only the unique elements from both arrays.
// const uniq = (arr1, arr2) => {
//   let newSet = new Set([...arr1, ...arr2]);
//   return Array.from(newSet);
// };
// const arr1 = [1, 2, 3, 4];
// const arr2 = [3, 4, 5, 6];
// const uniqueArr = uniq(arr1, arr2);
// console.log(uniqueArr); // Output: [1, 2, 3, 4, 5, 6]
// --------------------------------------------------
// Write a function that takes a string and returns the number of vowels in the string.
// function countVowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i].toLowerCase();
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }
// const str = 'Hello, world!';
// const numVowels = countVowels(str);
// console.log(numVowels); // Output: 3
// --------------------------------------------------
// Factorial

// const Fact = (n) => {
//   if (n == 1) {
//     return 1;
//   }
//   return n * Fact(n - 1);
// };
// const real = Fact(5);
// console.log(real);
// --------------------------------------------------

// --------------------------------------------------
// --------------------------------------------------

// --------------------------------------------------// --------------------------------------------------

// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------

// --------------------------------------------------

// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
