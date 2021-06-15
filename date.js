function pad(num, len = 2){
    num = num + '';
    while (num.length < len){
        num = '0' + num;
    }
    return num
}

function formatDate(date){
    let str = '';
    let yyyy = date.getFullYear();
    let MM = pad(date.getMonth());
    let dd = pad(date.getDate());

    let hh = pad(date.getHours());
    let mm = pad(date.getMinutes());
    let ss = pad(date.getSeconds());
    let SSS = pad(date.getMilliseconds(), 3);


    return `${yyyy}/${MM}/${dd} ${hh}:${mm}:${ss}.${SSS}`
}

module.exports = formatDate;