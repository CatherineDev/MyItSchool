// Задание 1

let str = 'aaa@bbb@ccc';
let newStr =  str.replace(/@/g, '!');
console.log (newStr);

// Задание 2

let date = new Date ();
let opt = {
    day : 'numeric',
    month : 'numeric',
    year : 'numeric'
};
console.log (date.toLocaleString('ru', opt));

//Задание 3

let str2 = 'Я учу javascript!';

console.log (str2.substring(2, 5));
console.log (str2.substr(2, 3));
console.log (str2.slice(2, 5));

console.log (str2.substring(6, 16));
console.log (str2.substr(6, 10));
console.log (str2.slice(6, 16));

// Задание 4

let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
let cube = 0;

for(let i = 0; i < arr.length; i++){
   cube = Math.pow(arr[i], 3); 
   sum = sum + cube;
}

console.log(sum);

let square = Math.sqrt(sum);
console.log(square);

// Задание 5
 

let c;

function sum5 (a,b){
 c = a-b;
    if(c < 0){
        return 1;
    }else {
        return c;
    }
}

console.log (sum5(6,1));