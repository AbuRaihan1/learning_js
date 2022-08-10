/* প্রাকটিস প্রব্লেম- ৫ খানা 

১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 

২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।  

৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা। 

৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 

৫. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 

**/

// problem 1: write a programme which will return smaller number in array's.

let numberArray = [32, 34, 53, 12, 43];
let min = Math.min(...numberArray);
console.log(min);
// solved.

// function smallNmbr(smallNumberArray) {
//   for (let i = 0; i < smallNumberArray.length; i++) {
//     let arrayElement = smallNumberArray[i];

//   }
// }
// let callSmallFunction = smallNmbr(numberArray);
// console.log(callSmallFunction);

// write a programme which will be return of smaller number, in three numbers.

let num1 = 125;
let num2 = 145;
let num3 = 14;

if (num1 > num2 && num1 > num3) {
  console.log(num1, "is bigger number.");
} else if (num2 > num1 && num2 > num3) {
  console.log(num2, "is bigger number.");
} else {
  console.log(num3, "is bigger numebr");
}
// solved

// problem 3:  write a function, which recive array, as a input. which can store many numbers. you have to find out avarage all numbers. and finally return this array.

function addAllArray(total, value) {
  return total + value;
}
let arrayNumbers = [12, 42, 12, 46, 33, 53,];
let addingArray = arrayNumbers.reduce(addAllArray);

let makeAvarage = addingArray / arrayNumbers.length;
let finalMakeAvarage = makeAvarage.toFixed(2);
console.log("Avarage of", addingArray, "=", finalMakeAvarage);
// solved.



// problem 5: write a programme, which will return second largest number from array.

let get2ndLargestArray = [1, 2, 3, 53, 35];
let maxs = Math.max(...get2ndLargestArray);
console.log(maxs);

function withoutBigNumArray(arrayReciver) {
  let setArray = [];
  let withoutBigNum = arrayReciver < maxs;
  setArray.push(withoutBigNum);
  return setArray;
}

let callBigFunc = get2ndLargestArray.filter(withoutBigNumArray);
console.log(callBigFunc);

// let x = get2ndLargestArray.find(maxs);
// console.log(x);
// console.log(maxs);
// console.log(get2ndLargestArray);
