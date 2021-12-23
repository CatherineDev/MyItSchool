// Задание 1

function getsum (a,b,c) {
 return (a-b) * c
}

let sum = getsum (6,2,2)
console.log (sum);

// Задание 2

function getSum2 (a) {
    let square = a*a;
    console.log(square);
    let cube = a * a * a;
    console.log (cube);
}

getSum2 (2);

// Задание 3

function getMinMax (a,b){
    if (a>b){
        console.log ("Большее значение = " + a + ", " + "меньшее значение = " + b)
    }else {
        console.log ("Большее значение = " + b + "," + "меньшее значение = " + a)
    }
}

getMinMax (6,2);

// Задание 4

let a = +prompt("Введите начальное число");
let b = +prompt("Введите конечное число");

function getArr (a,b){
    let arr4 = [];
    for(let i = a; i <= b; i++){
        arr4.push(a);
        a = a + 1;
    }
    return arr4;
}

let arr5 = getArr(a,b);
console.log(arr5);

// Задание 5

function isEven (a) {
    if (a % 2 == 0){
       return true
    }else{
        return false
    }
}

console.log (isEven(13));

// Задание 6

let arr6 = [5,9,6,4,15,8,24];

function newArr6 (arr6){
    newArr6 = [];
    for (let i = 0; i < arr6.length; i++){
            if (isEven(arr6[i]) == true){
                newArr6.push(arr6[i]);
        }
    }
    return newArr6;
}

let newArr = newArr6 (arr6);
console.log ("Массив четных чисел: " + newArr);

// Задание 7

//let  a = prompt ("Колличество рядов");

//function pyramid (a){
    //for (let i = 1; i <= a; i++){
        //let sum;
        //console.log(i);
        //for(let j = 1; j <= i; j++){
            //sum = a=+j;
        //console.log(sum);

        //}
    //}
//}
//pyramid (a)