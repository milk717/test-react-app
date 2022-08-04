const apiFun = (param)=>{
    console.log(`api 함수 ${param} 출력`)
}

const foo = (a, fun) =>{
    console.log(a)
    console.log(`${fun}`);
    return (...param) => {
        console.log(param);
        fun(param)
    }
}

const actionGen = foo('액션 타입',apiFun);

console.logg(actionGen)