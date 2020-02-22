// function get_current_age() {
//     return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
//     alert(get_current_age('1986-09-18'));
// }
function chechData() {
    var data = prompt('Enter birth')

    if (data.match(/^[0-9]{2,2}[\.][0-9]{2,2}[\.][0-9]{4,4}$/i)) {
        var dateArray = data.split('.');
        var date = new Date();

        var day = date.getDate() - dateArray[0] ;
        var month = date.getMonth() + 1 - dateArray[1];
        var year = date.getFullYear() - dateArray[2];

        var sec = (day * 24 * 60 * 60) + (month * 30 * 24 * 60 * 60) + (year * 12 * 30 * 24 * 60 * 60);
        var hours = (day * 24) + (month * 30 * 24) + (year * 12 * 30 * 24);
        var days = (day) + (month * 30) + (year * 12 * 30);
        sec = sec + (date.getHours() * 60) + date.getSeconds();
        hours = hours + date.getHours();

        alert('Вы прожили ' + sec + ' секунд ' + hours + ' часов ' + days + ' дней');
    } else {
        alert('Ошибка брат ;[');
    }
}