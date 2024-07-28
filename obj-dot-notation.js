// object dote notation is a dynamic features of object it means we can add key value pair after it's creating
let obj = {
    name: "abcd",
    age: 20
}

console.log(obj) // {name:"abcd", age:20}
console.log(obj.city) // undefinde

obj.city = "jodhpur";

console.log(obj.city) // jodhpur
console.log(obj) // {name:"abcd", age:20, city:"jodhpur"};
