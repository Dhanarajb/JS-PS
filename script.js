------------Reverse--------------
const rever = (str) => {
  const arr = str.split('');
  arr.reverse();
  str = arr.join('');
  console.log(str);
};
rever('apple');
----------
const rever = (str) => {
  const arr = str.split('').reverse().join('');
  console.log(arr);
};
rever('apple');
---------------

(function (str) {
  let rever = '';
  for (let charavter of str) {
    rever = charavter + rever;
  }
  console.log({rever
  });
})('dhanaraj');
-------------Max element in arr---------
const MaxFind = (arr) => {
  let max = arr.reduce((prev, curr) => (prev > curr ? prev : curr));
  console.log(max);
};
MaxFind([1, 2, 3, 2, 223, 3, 4, 4, 555, 3]);

--------------2nd largest-----------------
const SecondLarge=(arr)=>{
  let FirstLarge=Math.max(...arr)
  let index = arr.indexOf(FirstLarge)
  arr.splice(index,1)
  let SecondLargee=Math.max(...arr)
  console.log(SecondLargee)
}
SecondLarge([1, 2, 3, 2, 223, 3, 4, 4, 555, 3])

// ----------------Min element in arr----------
const MinFind=(arr)=>{
  let max = arr.reduce((prev,curr)=>prev<curr ? prev : curr)
  console.log(max)
}
MinFind([1,2,3,2,223,3,4,4,555,3])

-----------Palindrome------
const pali = (str) => {
  const isPali = str.split('').reverse().join('');
  console.log(str === isPali);
};
pali('naya');

(function (str) {
  let reversed = '';
  for (let x of str) {
    reversed = x + reversed;
  }
  console.log(str === reversed);
})('nayan');

------------occurance-----------
const maxChar=(str)=>{
  let obj = {};
  for(let char of str){
    (!obj[char]) ? obj[char]=1:obj[char]++;
  }
  console.log(obj)
}
maxChar("Dhanaraj")

const maxChar = (str) => {
  let obj = {};
  for (let char of str) {
    !obj[char] ? (obj[char] = 1) : obj[char]++;
  }

  let maxNum = 0;
  let maxNumChar = '';
  for (let char in obj) {
    if (obj[char] >= maxNum) {
      maxNum = obj[char];
      maxNumChar = char;
    }
  }
  console.log(`${maxNumChar} appears ${maxNum} times`);
};
maxChar('Dhanarappppj');

-----------Reverse the integer-----------
const reverInt=(n)=>{
  return (n.toString().split('').reverse().join(''))
}
console.log({
  testcase1:reverInt(51),
  testcase2:reverInt(-342),
  testcase2:reverInt(500)
})
---------------FizzBuzz--------------
((num) => {
  for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
      i++;
    }
    if (i % 3 === 0) {
      console.log('fizz');
      i++;
    }
    if (i % 5 === 0) {
      console.log('buzz');
      i++;
    }
    if (i > num) break;
    else {
      console.log(i);
    }
  }
})(15);
-----------------chunked array----------
const chucks = ((arr, n) => {
  const chunked = [];
  for (let ele of arr) {
    let last = chunked[chunked.length - 1];
    if (!last || last.length === n) {
      chunked.push([ele]);
    } else {
      last.push(ele);
    }
  }
  return chunked;
})([1, 2, 3, 4, 5, 2, 1, 4], 5);
console.log({
  chucks,
});
--------------isUnique--------------
const isUnique = (str) => {
  const obj = {};
  for (let i of str) {
    !obj[i] ? (obj[i] = 1) : obj[i]++;
  }
  for (let i in obj) {
    if (obj[i] > 1) {
      return false;
    }
  }
  return true
};
console.log({
  isUnique: isUnique('tomy'),
});
-----------Anagram----------------
const isAnagram = (str1, str2) => {
  let sorted1 = str1.split('').sort().join("").toLowerCase();
  let sorted2 = str2.split('').sort().join("").toLowerCase();

  return (sorted1===sorted2)
};
console.log(isAnagram("listen","silent"))
-----------Longest word-------
function longest(str) {
  let words = str.split(' ');
  let longestword = '';
  for (let word of words) {
    if (word.length > longestword.length) {
      longestword = word;
    }
  }
  return longestword;
}
console.log(longest('I am tommyyyy Dhanaraj'));

---------Capitalize-------------
const capitalize=(str)=>{
  let words = str.split(" ").map(word=>{
    return word.charAt(0).toUpperCase()+word.slice(1);
  })
  return words.join(" ")
}
console.log(capitalize("dhaanu"))

-----------prime--------------
const isPrime=(num)=>{
  if(num<2){
    return false
  }
  for(let i=2;i<num;i++){
    if(num%i===0){
      return false
    }
  }
  return true
}
console.log(isPrime(2))
----------------Remove duplicate----------
const dupl = (str) => {
  var uniq = '';
  for (const chr of str) {
    if (uniq.includes(chr) == false) {
      uniq += chr;
    }
  }
  return uniq;
};
console.log(dupl('dhshsssm'));

-------------duplicate array-----------
const duplicatEl = (arr) => {
  let sorted = arr.slice().sort(); //clone the array so orginal arr wont modified
  let result = [];
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i + 1] === sorted[i]) {
      result.push(sorted[i]);
    }
  }
  return result;
};
let arr = [1, 2, 3, 2, 1, 3, 2, 3, 4];
console.log(`${duplicatEl(arr)}`);
-------------------------- another

const Dups=(arr)=>{
      let DupArr = arr.filter((val,index,arr)=>arr.indexOf(val)!==index)
      console.log(DupArr);
}
Dups([1, 2, 3, 2, 1, 3, 2, 3, 4])

---------age check--------
const freinds = [
  { name: 'Tingu', born: 1997 },
  { name: 'Piu', born: 1996 },
  { name: 'pandu', born: 1997 },
  { name: 'Dhanu', born: 1997 },
];
const currYear = new Date().getFullYear();

for (let guys of freinds) {
  guys.age = currYear - guys.born;
  guys.salary = '15LPA';
}
console.log(freinds);

----------zeros one side--------
const arr = [1, 2, 0, 4, 3, 0, 5, 0];
const zero = 0;
const result = [
  arr.filter((e1) => e1 !== zero).arr.filter((e1) => e1 === zero),
].flat();
console.log(result);
------>
function movezeros(arr){
  var k=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
      let temp = arr[i];
      arr[i]=arr[k]
      arr[k]=temp
      k++
    }
  }
  return arr
}
console.log(movezeros([1, 2, 0, 4, 3, 0, 5, 0]))
-----------output shoulb be identical---------
const input1={a:1,b:2,c:3,d:10,e:12}
const input2={a:2,d:10,e:12,f:6}

function fun(input1,inout2){
  let obj = {}
  for(let i in input1){
    if(input1[i]==inout2[i]){
      obj[i]=input1[i];
    }
  }
  return obj;
}
console.log(fun(input1,input2))
---------second largest number------------
const input = [1,2,-2,11,7,1]

const Second=(input)=>{
    let arr=[...new Set(input)].sort((a,b)=>a-b)
    return arr[arr.length-2]
}
console.log(Second(input))
-------------missing odd integer arr--------
const arr = [5, 7, 9, 11, 15, 17];
for (let i = 0; i < arr.length; i++) {
  let current = arr[i];
  let next = current + 2;
  if (arr[i + 1] !== next) {
    console.log(next);
    break;
  }
}
--------rotating by 2 position---------

---------arow Functions----------
without parameter
const fun=()=>console.log('ihi')
fun()

return the value
const fun=()=>{
  return "hello"
}
console.log(fun())

One parameter
let greet = (name) => `hi ${name}`;
console.log(greet('Dhanu'));

Regular fun vs arrowfun
let add=(a,b)=>a+b
console.log('1+2=',add(1,2))

// Regular function expresssion
let add2=function(a,b){
  return a+b
}

// Regular function declaration
function add3(a,b){
  return a+b
}
add()
console.log(add2(1,2))
console.log(add3(1,2))

const text = 'a1';

if(isNaN(text)){
  console.log('not a number')
}else{
  console.log("it is a number")
}

for(let i=0;i<10;i++){
  setTimeout(()=>{
    console.log(i)
  },1000)
}

console.log('hi')
setTimeout(()=>console.log('theree'),5000)
console.log('hello')

function fun1(a){
  return function fun2(b){
     return a*b
  }
}
console.log(fun1(4)(5))
