// console.log(abc);
// let abc = 'a';
// abc = 'sumin'

// const a = 2;
// function foo(a = a){
//     return a+a;
// }
// foo();

function scopeTest(value){
    typeof variable; //=> undefined
    if(value){
        typeof varable; //throws 'ReferenceError'
        let variable;
    }
}

scopeTest(true);
