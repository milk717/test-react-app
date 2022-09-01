// eslint-disable-next-line no-extend-native
Date.prototype.format = function (f) {
    if (!this.valueOf()) return " ";

    let weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일",];
    let d = this;
    let h;

    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function ($1) {
        switch ($1) {
            case "yyyy":
                return d.getFullYear();
            case "yy":
                return (d.getFullYear() % 1000);
            case "MM":
                return  ('0' + (d.getMonth() + 1)).slice(-2);
            case "dd":
                return d.getDate().toString().padStart(2, '0');
            case "E":
                return weekName[d.getDay()];
            case "HH":
                return ('0'+ d.getHours()).slice(-2);
            case "hh":
                return ((h = d.getHours() % 12) ? h : 12);
            case "mm":
                return ('0'+ d.getMinutes()).slice(-2);
            case "ss":
                return d.getSeconds();
            case "a/p":
                return d.getHours() < 12 ? "오전" : "오후";
            default:
                return $1;
        }
    });
};

// eslint-disable-next-line no-extend-native
Date.prototype.dateRange = function (range){
    let dateRange = []
    for (let i = 0; i<range; i++){
        dateRange.push({
            day: i+1, 
            date: new Date(this.setDate(this.getDate() + 1)).format('yyyy-MM-dd'),
        })
    }
    return dateRange;
}

const dateArray = new Date('2022-08-08').dateRange(66);
console.log(dateArray);




