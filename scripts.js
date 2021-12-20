//Задание 1 

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++){
    document.write (arr[i] + "<br/>")
}

// Задание 2

let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
let num2 = 0;

for (let i = 0; i < arr2.length; i++){
    num2 = arr2[i]
    if(num2 > -10 &&  num2 < -3){
        document.write (num2 + "<br/>");
    }
    
}

// Задание 3

let arr3 = [];

for (let i = 23; i<=57; i++){
    arr3.push (i);
}
console.log (arr3);

// Задание 4

let arr4 = ['10', '20', '30', '50', '235', '3000'];

for (let i = 0; i < arr4.length; i++){
    let num = String(arr4[i]);
    let char = num[0];
    if (char == 1 || char == 2 || char == 5) {
      console.log(num);
    }
  }

// Задание 5

let arr5 = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday", "Sunday"];

for(let i = 0; i<arr5.length; i++){
    if( i == 5 || i == 6){
        document.write("<span style = 'font-weight: bold'> " + arr5[i] + "</span><br />");
    }else
    document.write( arr5[i] + "<br />")
}

// Задание 6

let names = ["Инна", "Вася", "Андрей"];
names.push("Игнат");
console.log(names.length);
document.write(names[3] + "<br />");


// Задание 7

//let arr7 = [];
//let num7 = 0;

//for (let i = 0; true; i++){
    //num7 = prompt("Введите число")
    //if (num7 == null || num7 == '') {
        //break;
    //} else{
        //arr7.push (num7);
    //}
    
//}
 //document.write (arr7 + "<br />")
//arr7.sort()
//arr7.sort (function(a,b){
    // return a-b;
 //});

//document.write (arr7  + "<br />");

// Задание 8

let arr8 = [12, false, 'Текст', 4, 2, -5, 0];
let num8;
let newArr8 = []

let i = 0;
while(i < arr8.length) {
    num8 = arr8[i]
    newArr8.unshift(num8);
    i++
}
document.write(newArr8 + "<br />")

arr8.reverse();  
document.write (arr8);

// Задание 9

let arr9 =  [5, 9, 21, , , 9, 78, , , , 6]
console.log (arr9);
let emptyNum = 0;

for (let i = 0; i < arr9.length; i++){
    if(arr9[i] == null){
        emptyNum = emptyNum +1
    }
}
console.log (emptyNum);



