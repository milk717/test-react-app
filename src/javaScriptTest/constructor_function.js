function User(name, age){
    //this = {};
    this.name = name;
    this.age = age;
    this.sayName = () =>{
        console.log(this.name);
    }

    //return this;
}

let user4 = new User('sumin',22);
user4.sayName();