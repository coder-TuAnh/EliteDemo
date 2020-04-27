var d = new Date();
var day = d.getDate();
var getMonth = [
    "01","02","03","04","05","06","07","08","09","10","11","12"
];
var month = getMonth[d.getMonth()];
var year = d.getFullYear();
date = month + "/" + day + "/" + year;
document.getElementById('datepicker').value = date;