let newArray = new Array(2),i,j;
function Massiv(newArray) {
    
    for ( i = 0; i < 2; i++) {
        newArray [i] = new Array(2);
        for (j = 0; j < 2; j++) {
            newArray [i][j] = i + j;
        }
    }
}
Massiv(newArray);
alert(newArray[0][0]);
function Show(Mas) {
    
    for (let i = 0; i < Mas.length; i++) {
        
        for (let j = 0; j < Mas[i].length; j++) {
            document.write (Mas[i][j]+"   ");
        }
        document.write("<br>");
    }
}

Show(newArray);
//arrayTable();
function arrayTable (rows, cols, DefaultValue){
var Mas = new Array (rows);
for (var i = 0; i < rows; i++){
    Mas [i] = new Array (cols);
    for (var j=0; j < cols; j++){
        Mas [i][j] = defaultValue;
    }
}
return Mas;
}
let k=new Array(5,1,2,3);
document.write(k[0]);