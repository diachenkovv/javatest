function Massiv() {
    let newArray = new Array(2);
    for (let i = 0; i < 3; i++) {
        newArray [i] = new Array(2);
        for (let j = 0; j < 3; j++) {
            newArray [i] [j] = new Array(2);
        }
    }
}
Massiv();
arrayTable();
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