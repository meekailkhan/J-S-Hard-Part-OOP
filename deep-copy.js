// deep copy array aur object ko copy karne ki technique hai aur ye object aur array ko deeply means nested array ya object ko bhi karta hai

let original = {name : "meekail" , detail : {age : 19}}
let strigify = JSON.stringify(original);
let copy = JSON.parse(strigify);

copy.detail.age = 20;
console.log(original.detail.age) // 19
original.detail.age = 22 // this will not change copied object becuase the copy object inisylaise before this change 
console.log(copy.detail.age) // 20