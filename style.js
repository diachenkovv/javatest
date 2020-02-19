let arr = new Array();
let arr1 = new Array();
let j = 0;
for (let i = 0; i < 10; i++)
    arr[i] = prompt(`Введіть ${i + 1}-е число`);
for (i = 0; i < arr.length; i++)
    document.write(`${arr[i]} `);
document.write(`<br>`);
for (i = 9; i >= 0; i--) {
    arr1[j] = arr[i];
    j++;
}
j = 0;
for (i = 0; i < 10; i++) {
    arr[i] = arr1[j];
    j++;
    document.write(`${arr[i]} `);
}
