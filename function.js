// here i will learn all about javaScript function

/****************************
                    // funcion overview
 * javaScript ekta functional programming la nguagae.
 
 * function dynamicallly kaj korte pare. jemon ekhane nicher udhahoron a "name" & "time" holo dynamic. etate jekno value use kora jabe. jeta onno vabe kora jeto na.

 * funcion declare kore rekhe dewa jaay, jokhon iccha setake call kore jekono jaygay use kora jay.
  
 * funciton ke chaile ekta variable er moddheo store kore rakha jay.

 * kono function call korar somoy jodi function er namer seshe () ei bracket na dewa hoy, tahole seta puro funciton ta kei return kroe dey.

 * function er vitore jodi kono variable use kora hoy tahole seta baire theke acces kora jabena.

* kintu function er baire kono variabl decalre korle seta use kora jabe. tobe seta function ta call korar agei thakte hobe./ declare kora thakte hobe.

*****************************/

// function myFunc(name, time) {
//   console.log(name + " vai ar koto khabi sei " + time + " ta theke khaitasos");
// }

// myFunc("shiblu,", 10);
// myFunc("babul,", 12);
// myFunc("raihan,", 1);

// parameters, and arguments.
// parameters holo funcion er moddhe () ei bracket er moddhe jeta dewa hoy, ba jeta value gulu recive kore.

// ar argumetns holo function call korar somoy, () ei bracket er moddhe jeta dewa hoy, jeta ke value o bola jay.

//return.
// return ekta keyword jeta function a use kora hoy. ar ei return keyword ta jokhon use kora hobe, tokhon function ta kaj kora bondho kore dibe. return er nicher line a jodi kichu code o lekha thake, tahole seta print hobe na. ba oi code ta kaj o korbe na. amra chaile kono functiona  return use na korlew pari. eteo kono somossa hobe na. kintu return use na korle, setar default return thake undefinde. tobe use korle, ekdom sobar seshe use korbo. jemon ekhane "return" er pore ekta console.log kora hoyece. kintu seta browser a print hoyni. karon return er pore kichu thakle seta ar print hoyna.

// function returnFunc() {
//   console.log("amr sonar bangla");
//   return;
//   console.log("raihan");
// }
// returnFunc();

// function store in variable.
// function inVarFunc(a, b) {
//   return a * b;
// }

// let inVarOutput = inVarFunc(4, 5);
// console.log(inVarOutput);

// using variable as a return

/**
 function varReturnFunc(a , b){
  var sum = a + b;
  return sum;
}

let oneNum = 3;
let twoNum = 4;
let totalNum = varReturnFunc(oneNum, twoNum)
console.log(totalNum);
 */

// problem solving one. avarges of three numbers
// function make_avg(a,b,c){
//   var sum = a + b + c;
//   let avarage = sum / make_avg.length;
//   return avarage;
// }

// problem : make a function which return all number addition in array's
// let allNumerInArray = [23, 42, 53, 25];
// function arrayFunction(total, value) {
//   return total + value;
// }

// let storeAllValue = allNumerInArray.reduce(arrayFunction);
// console.log(storeAllValue);

// same problem solivng without reduce() method, using loop.

// function sumOfArray(arrayReciver) {
//   let increaseArray = 0;
//   for (let i = 0; i < arrayReciver.length; i++) {
//     let arraSingleElement = arrayReciver[i];
//     increaseArray += arraSingleElement;
//   }

//   return increaseArray;
// }

// let numberOfArray = [3, 53, 55, 63];
// let callFunction = sumOfArray(numberOfArray);
// console.log(callFunction);

// write a function called odd_even() which takes and integer value and tells wheather this value is even or odd. you need to do it in 4 ways.

// function odd_even(getArgument) {
//   if (getArgument % 2 == 0) {
//     return getArgument + " is even numebr";
//   } else {
//     return getArgument + " is odd number";
//   }
// }

// let userNumber = prompt('enter a number here');
// let userNumber = 34.34;
// let integerUserNumber = parseInt(userNumber);
// let arguments = odd_even(integerUserNumber);
// console.log(arguments);

// function checking() {
//   let number = 3;
//   if (number % 2 == 0) {
//     console.log(number + " is even numebr");
//   } else {
//     console.log(number + " is odd number");
//   }
// }
// checking();

// print out all odd number using function.

function oddNumber(oddArray) {
  let makeOddArray = [];

  for (let i = 0; i < oddArray.length; i++) {
    let allArrayLoopingNumber = oddArray[i];
    if (allArrayLoopingNumber % 2 != 0) {
      // console.log(allArrayLoopingNumber);
      makeOddArray.push(allArrayLoopingNumber);
    }
  }

  let sumOddArray = 0;
  for (let i = 0; i < makeOddArray.length; i++) {
    let newOddNumbersArray = makeOddArray[i];
    sumOddArray += newOddNumbersArray;
  }
  return sumOddArray;
}
let allNumbers = [22, 32, 53, 64, 67];
let callOddFunction = oddNumber(allNumbers);
console.log(callOddFunction);
