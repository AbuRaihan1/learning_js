// here i will learn all about javaScript Math.

/**
 * round()
 * PI
 * ceil()
 * floor()
 * trunc()
 * sign()
 * pow()
 * sqrt()
 * abs()
 * random()
 * min()
 * max()
 * 
 */



// 1. Math.round()
// round er kaj holo kono number er pore doshomik thakle setake purno songkhtate rupantor kora. jodi doshokim ta 5 er upore hoy, tahole next number korbe. 5 er kom hole, nicher number korbe. jemon ekhane 4.6 dewa, .5 er theke beshi tai next number 5 kore dise,
console.log(Math.round(4.6));


// 2. Math.PI()
// pi er man ber korte ho....
console.log(Math.PI); 


// 3. Math.ceil()
// ceil er kaj holo, doshomik er pore joto songkhai thak, etake next boro numebr kore felbe. jemon ekhane example a 5.2 use kora hoise, tobuo etar output diche 6. ekhane jdi round use kora hoto, tahole output dito 5. karon round a .5 er upore thakle next numbr a jaay, ar ceil .somehting thaklei etake next number a niye jaay.
console.log(Math.ceil(5.2));


// 4. floor()
// floor o ceil er motoi, tobe ceil next boro numebr kore, ar floor chuto numlber kore. jmeon ekhane 4.9 use kora hoise tobuo output dise 4. karon floor a jei songkahr pore doshomik dey, sei songkha e return kore.
console.log(Math.floor(4.9));



// 5. trunc()
// trunc er kaj holo, doshomik er pore kichu takle seta ke baad diye dewa.
console.log(Math.trunc(3.5));


// 6. sign()
// sign er kaj holo, er parameter er vitore kono value dile, (seta jotoi hook) seta jodi (-minus) value hoy, thaole return dibe -1.   seta jodi (0 zero) value hoy, tahole return dibe 0. ar jodi (+value) hoy tahole retrun dibe 1
console.log(Math.sign(3));


// 6. pow()
// pow diye kono songkhar power check kora hoy. ekhane 2 ta parameter. prothom parameter holo 3 er power, ar 2nd value holo 2. mane 3^2. 
console.log(Math.pow(3,2));


// 7. sqrt()
// sqrt diye kono songkhar root ber kora hoy.
console.log(Math.sqrt(64));


// 8. abs()
// abs mane holo absolute value, jekono negetive number ke se possitive kore felbe. jemon ekhane input hisebe dewa hoise "-4.6" tobuo output asche possitive 4.6. karon abs er kaj e holo "negetive" ke "possitive kora."
console.log(Math.abs(-4.6));



// random()
// random er kaj holo randomly numebr generate kora. tobe seta 0 theke 1 porjonto random number dey. jodi nijeder moto songkha paite chai, thaole joto porjotno chaibo seta diye * gun/ multiplication kore dibo.   emnite ekta number diye gun korlew eta doshomik a dekhabe, eta ke purnosongkha korte hole round() kore dite hobe. ar last a joto + kore dewa hobe, setar uporer number thke dekhabe.
let randomNum = Math.random()*10 + 2;
console.log(Math.round(randomNum));

// 9. max()
// max er kaj holo kono ekta array te sobcheye boro number jeta setake ber kore ana.


// 10. min()
// min er kaj holo kono ekta array te sobcheye chuto number jeta setake print kora 