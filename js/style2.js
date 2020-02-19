let arr = new Array();
let arr1 = new Array();
for (i = 0; i < 10; i++)
    arr[i] = prompt("Введіть" + (i + 1) + "-е число");
for (i = 0; i < arr.length; i++)
    document.write(arr[i] + " ");
for (i = 0; i < arr.lenght; i++)
    arr1[i] = arr[10 - i];
for (i = 0; i < arr.length; i++)
    document.write(arr1[i] + " ");
