var todayDate =() =>{
    var today = new Date();
    var date = (today.getDate())+'-'+(today.getMonth()+1)+'-'+(today.getFullYear());
    return date;
}

//local module export
module.exports = todayDate;