let [a, b, c=717] = [1,2];
console.log(`a=${a}, b=${b}, c=${c}`);

[a,b] = [b,a]
console.log(`a=${a}, b=${b}`);

let str = "Sumin-Hansam-Conan";
let arr = str.split('-');
console.log(arr);

let [user1, ,user2] = ['sumin','conan','hansam'];
console.log(user1, user2);

