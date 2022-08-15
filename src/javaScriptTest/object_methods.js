const a = 'name';
const user = {
    [a] :'sumin',
}

console.log(user.name)

const cloneUser = Object.assign({},user);
cloneUser.name = 'hansam';
console.log(user, cloneUser);

//객체 => 배열
let arr = Object.entries(user);
console.log(arr);

//배열 => 객체
let object = Object.fromEntries(arr);
console.log(object);
