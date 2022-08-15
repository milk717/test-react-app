const a = 'name';
const user = {
    [a] :'sumin',
}

console.log(user.name)

const cloneUser = Object.assign({},user);
cloneUser.name = 'hansam';
console.log(user, cloneUser);