// in this file i will learn Object.

// object overview.

/**
 * object is type of varibale, where we can set multiple value
 * javaScript a ja ache, sob kono na kono vabe object.
 * object er vitore colon (:) er left side a jegulu thake, sugulu ke bole properties/ keys. ar colon (:) er right side a jegulu thake. segulu ke bola hoy, values.
 */

let learningObj = {
  name: "raihan",
  age: 18,
  date: "05/08/2022",
  gender: "male",
  func: function () {
    console.log(this.age);
    this.anotherFunc();
    console.log("here is function");
  },
  anotherFunc: function () {
    console.log("here is another funcion");
  },
};
// change object value // set object value.
var changeOneValue = (learningObj.age = 20);
learningObj.func();

// another system.
let changeValueAnotherSystem = (learningObj["gender"] = "female");
console.log(changeValueAnotherSystem);

// changing property value another system.
var propertyName = "gender";
var propertyValue = learningObj[propertyName];
console.log(propertyName, propertyValue);


// Object.keys() keyword.
// kono object er jodi sobgulo property name shudhu dekhte hoy / jante hoye, tahole keys use kore ber korte pari.

let keyObject = {
  name: "Jhankar vai",
  age: 45,
  gender: "male",
  country: "california",
};

let allPropertyName = Object.keys(keyObject);
console.log(allPropertyName);

// Object.values() keyword.
// kono object er jodi sobgulo values shudhu dekhte hoy / jante hoye, tahole values use kore ber korte pari.

let valuesObject = {
  name: "Jhankar vai",
  age: 45,
  gender: "male",
  country: "california",
};

let findValues = Object.values(valuesObject);
console.log(findValues);

// looping in object. and get property & value.

let loopObject = {
    name : "nulte",
    age : 5,
    gender : 'male',
    countrys : 'bangladesh'
}
var getObjectProperty = Object.keys(loopObject)
let getObjectValue = Object.values(loopObject);

for(let i = 0; i < getObjectProperty.length; i++){
    let storeObjectArray = getObjectProperty[[i]];
    console.log(storeObjectArray , getObjectValue[i]);
}

// get property & value. using for in loop.
// for in loop er kaj holo se ekta object a dhuke prottekta elemnt ke checkout kore kore jaaabe. and se arrayr vitor diyeo same vaabe kaj kore.

// get property.
for(let getObjectValueAndPropertyUsingForIn in loopObject){
    console.log(getObjectValueAndPropertyUsingForIn);
}

// get value
for(let getObjectValueAndPropertyUsingForIn in loopObject){
    console.log(loopObject[getObjectValueAndPropertyUsingForIn]);
}
