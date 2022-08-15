const symbol1 = Symbol('a');
const symbol2 = Symbol('a');
const symbol3 = Symbol.for('a');
const symbol4 = Symbol.for('a');
console.log(symbol1===symbol2); //=> false
console.log(symbol1===symbol3); //=> false
console.log(symbol3===symbol4); //=> true

const id = Symbol(); //유일한 식별자를 만들 때 사용함.

const user = {
    name: 'sumin',
    age: 22,
    [id] : 'myId',
    showNameNotSymbol: () =>{console.log(this.name)},
}

//key와 value를 출력해도, symbol은 출력되지 않음.
console.log(Object.keys(user));
console.log(Object.values(user));

const showName = Symbol("show name");
user[showName] = function(){
    console.log(this.name);
}

user[showName]();

//symbol을 사용해서 지정한 값은 검출되지 않음.
for (let key in user){
    console.log(`His ${key} is ${user[key]}`);
}
