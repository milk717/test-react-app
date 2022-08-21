function makeCounter(x){
    let num = 0;

    return function(){
        return num++;
    }
}

const counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
