const pro = {
    name : "meekail"
}

const obj = Object.create(pro)
obj.num = 3;

console.log(obj.num); // 3
console.log(obj.name); // "meekail"

console.log(obj.hasOwnProperty("name")); // false
console.log(obj.hasOwnProperty("num")); // true
let a = obj.__proto__
console.log(a.name) 