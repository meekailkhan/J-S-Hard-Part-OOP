// creating object 
// this type way of object creating it's called object litral
let obj = {
    name : "abcd",
    age : 32,
    class : 12, 
}

obj.__proto__.greet = function(){
    return `hello from ${this.name}`
}


console.log(obj.greet()) // hello from abcd
console.log(obj) // {name: "abcd", age: 32, class: 12}
console.log(obj.name) // abcd
console.log(obj.age) // 32
console.log(obj.class) // 12

