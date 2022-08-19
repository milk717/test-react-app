const calculateDay = (date , day, sign) =>{
    let newDate = new Date(date.toLocaleDateString());
    if(sign){
        newDate.setDate(newDate.getDate()+day);
    }else{
        newDate.setDate(newDate.getDate()-day);
    }
    return newDate;
}

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

class VideoSearchParam {
    constructor({
        copyrightYNA = 'A',
        endDate = new Date().format('yyyy-MM-dd'),
        order = 'desc',
        orderField,
        page = 0,
        searchCategory,
        searchKeyword,
        searchYear = 2022,
        size = 10,
        startDate = calculateDay(new Date(), 7, false).format('yyyy-MM-dd'),
        visibleYNA = 'A',
    } = {}) {
        this.copyrightYNA = copyrightYNA;
        this.endDate = endDate;
        this.searchKeyword = searchKeyword;
        this.searchCategory = searchCategory;
        this.searchYear = searchYear;
        this.size = size;
        this.startDate = startDate;
        this.visibleYNA = visibleYNA;
        this.page = page;
        this.orderField = orderField;
        this.order = order;
    }

    getVideoSearchParam() {
        return {...this}
    }
}

const videoSearchParam = new VideoSearchParam({
    "copyrightYNA": "A",
        "endDate": "2022-08-19",
        "searchYear": 2022,
        "size": 10,
        "startDate": "2022-08-12",
        "visibleYNA": "A",
        "page": 0,
        "order": "desc"
}).getVideoSearchParam();
console.log(videoSearchParam);
