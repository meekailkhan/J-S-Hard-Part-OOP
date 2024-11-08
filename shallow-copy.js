// shallow copy object ya array ko copy karne ki technique hai jo object ya array ko outer level tak hi copy karta hai aur nested array ya object ka sirf reffrence leta hai jisse nested me change karne se original bhi change hota hai
let original = {name : "meekail" , detail : { age : 19}};
let shallowCopy = {...original};

shallowCopy.detail.age = 20;
console.log(original.detail.age); // 20
original.detail.age = 21;
console.log(shallowCopy.detail.age) // 21


// this is how ? its be easy! spread oprator can copy only first layer and furthe nested array or object are not copied its just save by its reffrence
let obj = {name : "mujaahid" , hobbie : ["reading","swimming"]}
let copy = {...obj};
copy.hobbie[1] = "cricket";
console.log(obj.hobbie[1]) // cricket
obj.hobbie[0] = "football";
console.log(copy.hobbie[0]) // football

