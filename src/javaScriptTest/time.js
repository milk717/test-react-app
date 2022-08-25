const mmSSPattern = /^[0-9]?[0-9][0-9]:[0-9][0-9]$/

const calculateTime = (time1, time2, sign) => {
    if (mmSSPattern.test(time1) && mmSSPattern.test(time2)) {
        let [minutes1, second1] = time1.split(':');
        let [minutes2, second2] = time2.split(':');
        minutes1 = Number(minutes1) * 60;
        minutes2 = Number(minutes2) * 60;
        second1 = minutes1 + Number(second1);
        second2 = minutes2 + Number(second2)
        let res;
        if (sign) {
            res = second1 + second2;
        } else {
            res = second1 - second2;
        }
        return new Date(res*1000).toISOString().slice(11,19);
    }else{
        return '00:00';
    }
}

const res = calculateTime('102:30','01:00',true);
console.log(res)