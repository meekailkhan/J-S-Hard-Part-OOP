let user = {
    name : "meekail",
    login(){
        return `${this.name} just logged in`
    },
    logout(){
        return  `${this.name} just logged out`
    }
}

console.log(user.name) // meekail
console.log(user.login()); // meekail just logged in
console.log(user.logout()); // meekail just logged out

console.log(user.login().length); // 22
console.log(user.login().logout()); // TypeError .logout not a funtion



