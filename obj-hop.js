// const pro = {
//     name : "meekail"
// }

// const obj = Object.create(pro)
// obj.num = 3;

// console.log(obj.num); // 3
// console.log(obj.name); // "meekail"

// console.log(obj.hasOwnProperty("name")); // false
// console.log(obj.hasOwnProperty("num")); // true
// let a = obj.__proto__
// console.log(a.name) 

// class UserCreator{
//     constructor(name,score){
//         this.name = name;
//         this.score = score;
//     }

//     increament(){
//         this.score++
//     }
//     login(){
//         return `${this.name} has been login`
//     }
// }

// const user1 = new UserCreator("meekail",5)
// console.log(user1)
// user1.increament()
// console.log(user1)
// console.log(user1.hasOwnProperty("increament")) // false
// console.log(user1.hasOwnProperty("name")) // true 

// function hop(val){
//     let keysOfObj = Object.keys(this);
//     for(let i = 0;i < keysOfObj.length; i++){
//         if(keysOfObj[i]==val){
//             return true
//         }
//     }
//     return false
// }

// let obj = {
//     name : "meekail",
//     score : 5,
//     hop : function (val){
//         let keysOfObj = Object.keys(this);
//         for(let i = 0;i < keysOfObj.length; i++){
//             if(keysOfObj[i]==val){
//                 return true
//             }
//         }
//         return false
//     }
// }

// console.log(obj.hop("score"))