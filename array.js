// her i will learn all about array



var manName = ["ojufa", "raihan", "ruhan", "snigdha"];
var girlName = ["rima", "snigdha", "jalajontrona"];

// 1. arra concatination
// var arrOutPut = manName.concat(girlName);
// console.log(arrOutPut);



// 2. change the arary value
// manName[1] = "Abu Raihan";
// manName[2] = "mizan";
// console.log(manName);



// 3. delete array index using delete
// delete manName[0];



// 4. kono array'r sorbosesh element ke change korar jonno use korte hobe...
// Array.length -1
// example :

var newArray = ["amar", "sonar", "bangla"];
newArray[3] = "add new";
newArray[4] = "add new 4 ";
newArray[5] = "add new 5 ";
var addNewArrayAtLast = newArray[newArray.length - 1];
// console.log(addNewArrayAtLast);




// 5. loop in Array

// for (i = 0; i < newArray.length; i++) {
//   console.log(newArray[i]);
// }
 
// function myFunction(value) {
//   console.log(value);
// }

// newArray.forEach(myFunction);



// array'r data type check korte gele dekhabe eta ekta object. thaole amra kivabe bujhbo je, eta array kingba object?

// its have two solution. number 1 is.
// Array.isArray(arrayName); tahole ta bole dibe true or false.

// number 2 solluiton is

// arrayName instanceof Array; // jodi array hoy, thaole true dibe. ar array na hole false dibe.

// instanceof object er khetrew use kora jay. jodi object hoy, tahole return korbe true, jodi object na hoy tahole return korbe false.






// Array Method in Array

//1. toString();
//kono array ke string a convert kore.


// 2. push("this item will be add last");
//kono array er last a item add korte hole


// 3. pop();
// kono array'r last er item delete korte hole pop() use korte hobe.


// 4. shift();
//shift ar kichui na. pop er biporit. pop kono array'r last er element    delete kore. ar shift kono array'r first element delete kroe.


// 4. unshift("add item first")
// unshift reverse of shift. eta kono array'r first a elemnt add korbe.


// 5. length;
//kono array te koto gulo item ache seta dekhabe.


// 6. concat()
// ek arrayr sathe arek array add kore. jemon...
// var arr1 = [1,2,3];
// var arr2 = [4,5,6];
// console.log(arr1.concat(arr2)); // output 1,2,3,4,5,6

// 7. join( " ")
//join method kono array ke string korbe. and join er parameter hisebe ja dewa hobe, prottekta array element er sesh oita add kore dibe.

let joinTest = ['beauty', 'of', 'bangladesh'];
let joinOutput = joinTest.join(',');
// console.log(joinOutput);


//  8. splice(2, 0, "item1", "item2")
// splice kono array te jekhane iccha sekhane item add kore.  er value thake prothom 2 ta. prothom 2 ta valuer proothom ta holo, koto number index a element add hobe. ar 2nd value holo koyta item remove korbe. jemon ekhane 2,0 use kora hoise. ekhane 2 mane holo 2nd tomo index a item add hobe. ar 0 mane holo tumi 0 ta element remove koro. 0 elemnt remove korar mane holo, kono elemnt e jaate remove na hoy. er pore ki ki elemnts hobe ta likhe dewa.

let spliceMethod = ['ore', 'nil','doriya'];
let spliceOutput = spliceMethod.splice(6,0)
// console.log(spliceOutput.splice(5,0));

// 9.  slice()
// sleice and splice are same jinis. splice elemnt add kore. ar slice delte kore. functionallity ek e.

// var myArr = ['ami','tumi','amra','sobai','ekhane'];
// splices = myArr.slice(2, 4,);
// console.log(splices);
// console.log(myArr);

// sorting array

// 10. sort()
// kono array'r er string gulake alphabatticaly sort korbe, a er pore b, b er pore c, c er pore d. eirokom. number o kore, kintu seta problemitacit.



// 11. kono array er number gulo ke serial e sajanor jonno ei function use kora hoy
// var myArr = [4, 3, 12, 32, 100, 32, 98];
// console.log(myArr[0]);
// var getOut = myArr.sort(function (a, b) {
//   return a  - b;
// });
// console.log(getOut);

// 12. math.max()
// kono array'r sobcheye boro number ta ber korar jonno eta use kora hoy.

// 13. math.min()
// kono array'r sorbonimno number ber korar jonno eta use kora hoy.

// -------------------------------------------
//               array ittarete
// -------------------------------------------

// foreach().
//for each er kaj holo. kono ekta arraye te dhueke sekhane 3 ta jinids check korbe. 1.Value, 2,index. 3,puro array.

// let forEachNum = [12, 32, 13, 43];
// function myFunc(value, index, array){
//   console.log(value);
//   console.log(index);
//   console.log(array);
// }

// forEachNum.forEach(myFunc);

// map()
//map o forEach er moto kono array te dhuke oi 3 ta jinis e check kore, kintu sompurno ekta "notun array return kore". and, ekhane mathmatical operation o kora jaay.

// let mapNumber = [23,53,24,64];
// function mapFunc(value){
//   return value * 2;
// }
// let newMapNumer = mapNumber.map(mapFunc);
// console.log(newMapNumer)

// filter()
// filter er kaj holo se kono ekta array theke kono kichu condition wise filter kore notun ekta array output dey. etao notun array return kore.

// let filterNum = [12, 43, 54, 23];
// function filterFunc(value) {
//   return value > 20;
// }
// let newFilterNum = filterNum.filter(filterFunc);
// console.log(newFilterNum);

// reduce()
// on of the most important. reduce method er kaj holo, kono array te jei kyta number thakbe, segulo ke ektar sathe arekta jug kore, finaaly ekta jugfol debe. shudu jug korbe bepar ta emon na. chiale jug biyog, ba jekono math operation chlano jaay, kintu output dibe ekta single kichu, sobkichur somosti eirokom kichu. eta prothom valuer sateh 0 jug/biyog/vag/ kore guna shuru korbe. kintu function a parameter a jodi kono value diye dewa hoy, taile 0 na dhore, seta dhore prothom valuer sathe math kore operation chalabe. jemon nicher function ta te 4 use kora hoise. tai and ekhan jug/addition operation chalano hoise. tai eta 32 er sathe 4 jug kore calculate shruu koreche. jodi funcion a parameter na dewa hoto, tahole eta 4 na dhore 0 thekei calculate shuru korto.

// let reduceNum = [32,53,52,56];
// function reduceFunc(total, value, index, array){
//   return total + value;
// }
// let newReduceNum = reduceNum.reduce(reduceFunc, 4)
// console.log(newReduceNum);

// reduceRight()
// same as reduce(). kintu reduce calculate shuru kore left theke right. eta calculate shuru kore right to left. thats is.

// every()
// every o onekta filter er moto kono kichu filter kore. tobe filter kichu specific condition er jonno kore. kintu every, prottekta elemnt er jonno kore. jodi prottekta element e condition mane, tahoeli shudhu se true return korbe. ekhane false return korche. karon every method use kora hoise. kintu every condition mane nai.

// let everyNum = [32,53,52,56];
// function everyFunc(value){
//   return value > 33;
// }

// newEveryNum = everyNum.every(everyFunc);
// console.log(newEveryNum);

// some()
// some method o filter er motoi, kintu ekhane jodi ekta conditon o sotto hoy, taholeo eta true return korbe.

// let everyNum = [32,53,52,56];
// function everyFunc(value){
//   return value > 32 ;
// }
// let newEveryNum = everyNum.some(everyFunc)
// console.log(newEveryNum);

//indexOf()
// indexOf er kaj holo kono ekta array'r value likhe indexOf dile, se bole dibe eta koto number index a ache.

// let indexOfNum = ['amr','sunar','bangla'];
// newIndex = indexOfNum.indexOf('amr')
// console.log(newIndex);

//lastIndexOf()
// lastIndexOf same as index off. kintu indexOf first dik theke dekha shuru kore, jeta prothomei mile, seta return kore, kintu last indexOf last er dike jeta mile seta return kore. jemon ekhane 2ta "amr" se last er ta print koreche. jeita sobar last a thakbe seta print korbe.

// let indexOfNum = ['amr','sunar','bangla','amr'];
// newIndex = indexOfNum.lastIndexOf('amr')
// console.log(newIndex);

// incluedes()
// includes er kaj holo, kono ekta arary element oi array te ache ki na seta bole dey, jemon ami jodi kono ekta array element er nam likhe serach kori, tahole oi element ta jodi array te thake, tahole true return korbe. nahole false return korbe. jeomn ekhane amr includes amr likhe disi, mane "amr" eta array te ache ki na.. jehetu eta amr arary te ache, tai eta true return korche. jodi na thakto tahole false return korto.

// let indexOfNum = ['amr','sunar','bangla','amr'];
// newIndex = indexOfNum.includes('amr')
// console.log(newIndex);

// find()
// find er kaj holoo, kono ekta conditon er upor vitti kore, se array'r prothom theke khuja shuru korbe. sobar prothom jeta pabe/milbe, setai se ans korbe.      ekhane console a 45 return koreche. 18 er sobcheye kacher/ immidiate boro kintu 23, tobuo 45 return koreche, karon find method kono array'r first theke check shuru kore.

// let indexOfNum = [45,23,12,53];
// function findFunc(value, index, array){
//     return value > 18
// }
// newIndex = indexOfNum.find(findFunc)
// console.log(newIndex);

// findIndex()
// findIndex same as find. kintu find value return kore, ar findIndex oi valuet tar index number return kore. jemon ekhane 45 return na kore, 0 return koreche, jeta holo 45 er index number.

// let indexOfNum = [45,23,12,53];
// function findFunc(value, index, array){
//     return value > 18
// }
// newIndex = indexOfNum.findIndex(findFunc)
// console.log(newIndex);

// Array.from()
// from er kaj holo kono ekta string ke array baniye fela, ba kono ekta text ke array baniye fela. othoba kono ekta arraye theke index niye. oi index er caracter gulo diye arekta notun array baniye fela.

// let indexOfNum = ['amr','sunar','bangla','amr'];
// console.log(Array.from(indexOfNum[1]));
// let fromArray = "Raihan"
// console.log(Array.from("fromArray"));

// key()
// vai eida ehon e janar dorkar nai. koyda din jaak. pore janis.
