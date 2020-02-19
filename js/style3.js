let name = prompt('Хто ти такий?');
let male = prompt('Ти чоловік?');
let age = prompt('Вкажи вік');

alert(`Привiт, ${name}!`)

if (male == true) document.write('Я чоловік <br>');
else document.write('Я жінка<br>');

if (age < 18) document.write('У тебе юний вік.');
else if (age >= 18 && age <= 30) document.write('Я молодий');
else if (age >= 31 && age <= 50) document.write('Я дорослий');
else if (age >= 51 && age <= 80) document.write('Я зрілий');
else document.write('Я старий<br>');

let i, j;
let table = '<table border="1" cellspacing="0">';
for  (i = 1; i < 10; i++) {
    table += "<tr>";
    for (j = 1; j < 10; j++) {
        table += '<td>' +i*j +'</td>';
    }
    table += '</tr>';
}
document.write(table);
