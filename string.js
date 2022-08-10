// here i will learn all about stirng

/*

1. string is immutable. immutable means, this value can't change, as we can do with array & object.

2. prottekta string method e alada notun ekta string return kore.

*/

// starting string method.


/** i will learn those method, from this tutorial. 
 * 1. length()
 * 2. escape /', /", //
 * 3. slice()
 * 4. subString()
 * 5. substr();
 * 6. replace()
 * 7. toLoweerCase()
 * 8. toUpperCase()
 * 9. concat()
 * 10. trim()
 * 11. charAt()
 * 12. charCodeAt()
 * 13. split()
 *  */ 



/** string search
 * indexOf()
 * lastIndexOf()
 * startsWith()
 * endsWith()
 * search()
 * match()
 * includes()
 */


/** Template literals 
 * etar onek gulo subidha ache read the unders code. 
 * 1. templete litarale back tick (` `) symbol diye use kora hoy.
 * 2. eta use korel quotatation er problem hoyna.
 * 3. multiline code lekha jaay. enter diye. 
 * 4. etar vitore js er variable o lekha jaay, tobe seta ei ${} sign diye vitore likhte hoy. variable and expression
 * 5. er vitore tag likhe html o lekha jaay. 
 */


// 1. length()
// length er kaj holo, kono ekta string a kotogulo caracter ache, seigula dekhano. space soho dekhabe.

let stringLength = "Bangladesh";
console.log(stringLength.length);

// 2. escape /', /", //
// escape muloto use kora hoy, kono string a special carecter gula ke use korar jonno, jemon amra jodi kono string a $,%,# etc sign use kori, tahole maximum time code edior eigula skip kore, ar jodi quotation use kori tahole to error e diye dey. sei error ke handle kortei muloto sekhaen "escape /', /", //" use kora hoy.

// ekhane niche double quote er vitore abr double quote use kora hoyeche, tai eta error dise, eta ke somadhan korar jonno jei backslash dewa hoise, etakei escape bole, ar eta diyei eta handle korte hobe.

// special kichu escape ache, there are:
/**
 * 1. \t = tab. mane ekta tab er poriman space dibe text er moddhe.
 * 2. \n = new line. mane ekta notun line a likha start korbe.
 * 3. \b = backspace ekta backspae
 * 4. \ enter dewa jay ei chinno diye,
 */

let escapes = "I am Raihan Ahmed";
console.log(escapes);

// 3. slice()
// slice method er kaj holo, kono ekta string theke ekta ongso, slice kroe, kete ber kore fela.

let sliceMethod = "Amar sonar bangla";
let sliceItems = sliceMethod.slice(5, 10);
console.log(sliceItems);


// slice method er maan negetive o use kora jaay, 
let sliceMethodNeg = "Amar sonar bangla";
let sliceItemsNeg = sliceMethod.slice(-12, -7);
console.log(sliceItemsNeg);


// slice method a shudu ekta maan o use kora jaay, sei khetre jeikhane slice kora hbe, sekhan theke baki joto caracter ache sob e print krobe. 

let sliceMethodOne = "Amar sonar bangla";
let sliceItemsOne = sliceMethod.slice(5);
console.log(sliceItemsOne); 
// this value can be negetive also. 



// 4. subString()
// substring same as slice. but subString cannot accept negetive value. here i am not showing subString example. 


// 5. substr();
// subStr o slice er moto e, kintu eita ektu vinno vabe kaj kore, substr er 2 ta maaner 1st ta jeikhan theke slice shuru hobe, sekhane kate, taaar pore sekhan thek koy index/length nibe seta hiseb kore. 

let substrs = "Amar sonar bangla";
let subItems = substrs.substr(11, 6);
console.log(subItems);



// 6. replace()
// replace er kaj holo, kono ekta string er specified ekta ongso ke replace korte pare,  eta diye shudhu ekta string er particular ongso na, ekta variable er whole string keo change kora jaay. 

let replaceStr = "I hate chika";
let replaceStrName = replaceStr.replace('hate', 'love');
console.log(replaceStrName);

let x = 'am ar';
console.log(x.replace(x , "raihan"));

// 7. toLoweerCase()
// toLowerCase er kaj holo kono ekta string a jotogulu caracter ache, sobgulare lowercase a convert kore fele,

let lowercase = "get Me LOWeR Case";
let getLowerCase = lowercase.toLowerCase();
console.log(getLowerCase);

// 8. toLoweerCase()
// toUpperCase er kaj holo kono ekta string a jotogulu caracter ache, sobgulare UpperCase a convert kore fele,

let uppercase = "get Me UppeR Case";
let getUpperCase = uppercase.toUpperCase();
console.log(getUpperCase);


// 9. concat()
// concat er kaj holo, ekta string er sathe arekta stirng er jura lagano.

let firstConcat = 'Raihan';
let secondConcat = 'Ahmed';
let doConcat = firstConcat.concat(' ' ,secondConcat);
console.log(doConcat);


// 10. trim()
// trim er kaj holo kono ekta string a both side a unnecessary space ke remove kroe dewa. jemon amra jodi kono messege likhi tokhon first a and last a space dile sei space ke remove kore message send kora hoy, eta muloto trim use korei kora hoy. eta shudhu first a ar last a use hbe. moddhe space sorabe na.

let trimLearn = "       here is a Tream    ";
console.log(trimLearn.trim());



// 11. charAt()
// charAt er kaj holo, kono ekta string er jekono ekta letter ke ber kore fela.

let char = 'raihan';
console.log(char.charAt(3));


// 12. charCodeAt()
// charAt er kaj holo, kono ekta string er jekono ekta letter ke ber kore fela. kintu setar unicode ta output dibe.

let uniCode = "Unicode";
console.log(uniCode.charCodeAt(4));


// 13. split()
// split method er kaj holo, kono ekta string theke array ber kora. 

let splitArr = 'hellow world';
console.log(splitArr.split(' '));

// ekhane split er vitore 'space' diye duita array ber kora hoise. ekhane split er vitore 'space' diye duita array devide kora hoise, mane jekhane jekhane space paabe, sekhan thekei array banabe.  ekhon ekhane split function er vitore 'space' chara "coma" dile notun array hobena. karon ekhaen 'comma' nei e.  ar jodi shudhu ekta quote diye rekhe deey, vitore kichu na dey, tahole prottekta caracter ke alada alada kore kore ekta kore array dey. 




// string search.

// 1. indexOf()
// indexOf kono ekta string er ekta word/letter/any value, kun index a ache seta return kore. jodi seta na thake, tahole -1 return korbe. ar jodi value ta thake tahole taar index ta dekhabe seta 0 er upore.

let checkIndex = 'Bangladesh Is a beautyfull Is country';
console.log(checkIndex.indexOf('Is',));


// ekhane search dewar somoy chaile parameter er moddhe arekta value (number) use kora jaay, sekhane jodi kono value use kora hoy, tahole jei value ta use kora hobe (number) toto gula index baad diye se search shuru korbe. jemon nicher example a paramiter er pashe 8 use kora hoise, tai se 8 ta index prothome baad diye / skip kore khuja shuru koreche. tai prothom "Is" ta ke print koreni. 2nd "Is" ke print korece. eta same as lastIndexOf er khetreo, kintu seta ulta dik theke gonona / search shur kore.

let checkIndexWithParam = 'Is Bangladesh Is a beautyfull Is country';
console.log(checkIndexWithParam.indexOf('Is', 8));

// 2. lastIndexOf()
// lastIndexOf kono ekta string er ekta word/letter/any value, kun index a ache seta return kore. jodi seta na thake, tahole -1 return korbe. ar jodi value ta thake tahole taar index ta dekhabe seta 0 er upore. tobe se last er jei value ta thake, seta return kore, ar indexOf prothom jei value tae thake seta return kore.

let lastChekIndex = 'Bangladesh Is a beautyfull country country';
console.log(lastChekIndex.lastIndexOf('country'));


// 3. search()
// serach method same as IndexOf, kintu indexOf 2nd parameter hisebe value nite pare, jeno seigula skip kore search shuru kore, kintu "search" a 2nd value use kora jaya na. tobe regular expression use kora jaay, ar power er dik theke indexOf er theke search er power beshi. 

let searchIndex = 'Bangladesh Is a beautyfull country country';
console.log(searchIndex.search('beautyfull'));


// 4. match
// match er kaj holo, eta ekta pattern follow kore, finally ekta array return kore,  nicher example a last a jeigular 'ain' ache shudhu segulu ke diye notun ekta array create koreche. eta case sensetive. 

let matchArray = 'main pain SPAIN rain';
console.log(matchArray.match(/ain/g));


// 5. includes()
// includer er vitore ekta value diye seta search kora hoy, je ei value ta puro string er moddhe ache ki na, jodi thake tahole true return korbe, nahole false. eta true return koreche, karon "Raihan" word ta string a ache, jdoi emon kichu diye search ditam, jeta string a nai, tahole false dito.   indexOf er moto ekhanew 2nd parameteer use kora jaay, number hisebe, je etogula caracter er pore search shuru korbe, jodi thake, tahole true return korbe, nahole false,

let isInclude = 'Raihan Ahmed';
console.log(isInclude.includes('Raihan'));


// 6. startsWith()
// startsWith diye search kora hoy, je kono string ei letter/ word diye start hoyeche ki na, jodi hoy thaole true return korbe, nahole false return korbe. and it is case sensetive ekhaneo 2nd parameter use kora jaay, je etoguo caracer er pore search shuru korbe.

let isStartsWith = 'amar bangladesh';
console.log(isStartsWith.startsWith('amar'));

// 6. endsWith()
// endsWith same as startsWith.

let isEndsWith = 'amar bangladesh';
console.log(isEndsWith.endsWith('bangladesh'));



// here was a all about string. thank you for your reading <3. 