function userCreator(name,score){
    const userObj = Object.create(userFuntionStore)
    userObj.name = name;
    userObj.score = score;

    return userObj
}


const userFuntionStore = {
    increament : function(){this.score++},
    loggedIn : function(){return `${this.name} logged in`}
}

const user1 = userCreator("abcd",5)
const user2 = userCreator("efgh",8)


console.log(user1)
console.log(user2)
console.log(user1.loggedIn())
console.log(user2.loggedIn())
user2.increament()
user1.increament()
console.log(user1.score)
console.log(user2.score)
