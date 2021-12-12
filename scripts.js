//1 задание
let name = prompt ("Вашe имя");
let age = prompt ("Ваш возраст");
let city = prompt ("Ваш город проживания");
let email = prompt ("Ваш email");
let phone = prompt ("Ваш телефон");
let company = prompt ("Ваша компания");

document.write ("Меня зовут " + name + "  ");
document.write ("Мне " + age + "  ");
document.write ("Мой город " +  city + "  ");
document.write ("Мой email " + email + "  ");
document.write ("Я работаю в " + company + "  ");
document.write ("Мои контактные данные  " + phone + " " + email + "  ")

//2 задание

let year = 2021 - age
document.write (name + " родился в " + year + " году")

//3 задание

let num1 = 2;
let num2 = 3;
let num3 = 5;
let num4 = 5;
let num5 = 8;
let num6 = 2;

if ((num1+num2+num3) == (num4+num5+num6)) {
    console.log ("Да")
}else {
    console.log ("Нет")
}

//4 задание 

let a = -3;

if (a>0) {
    console.log ("Верно")
}else {
    console.log ("Не верно")
}

//5 задание

a=10;
b=2;

let c = a+b;
console.log (c)

let d = a-b;
console.log (d)

let e = a*b;
console.log (e)

let f = a/b;
console.log (f)

if (c>0) {
    let g = c**2;
    console.log (g);
}

// 6 задание

if ((a>2 && a<11) || (b>=6 && b<14)) {
    console.log ("Верно!");
}else {
    console.log ("Не верно!");
}

//7 задание
 
let n = prompt ("Введи число от 0 до 59")

switch (Math.round(+(n/15))){
    case  0: 
        console.log ("1 quater");
        break;
    case 1:
        console.log ("2 quater");
        break;
    case 2:
        console.log ("3 quater");
        break;
    case 3:
        console.log ("4 quater");
        break;
    case 4:
        console.log ("4 quater");
        break;
    default: console.log ("Число вне диапазона от 0 до 59");
}

//8 задание

let day = prompt ("Введи число от 1 до 31");

switch (Math.round (+(day/10))){
    case 0: 
        alert("1 декада");
        break;
    case 1: 
        alert("2 декада");
        break;
    case 2: 
        alert("3 декада");
        break;
    case 3: 
        alert("3 декада");
        break;
    default: alert("Число вне диапазона от 1 до 31")
}

//9 задание 

let dayCounter = prompt ("Введи количество дней для преобразования")
let year9 = dayCounter/365

if (year9<1){
    alert ("Меньше года")
}else {
    alert ("Полных " + Math.round(year9) + " года")
}

let month = dayCounter/31

if (month<1){
    alert ("Меньше месяца")
}else {
    alert ("Полных " + Math.round(month) + " месяца")
}


let week = dayCounter/7

if (week<1){
    alert ("Меньше недели")
}else {
    alert ("Полных " + Math.round(week) + " недели")
}

//10 задание


switch (Math.round (dayCounter/92)){
    case 0:
        alert ("Зима")
        break;
    case 1:
        alert ("Весна")
        break;
    case 2:
        alert ("Лето")
        break;
    case 3:
        alert ("Осень")
        break;
    case 4:
        alert ("Осень")
        break;
}

switch (Math.round (dayCounter/31)){
    case 0:
        alert ("Январь")
        break;
    case 1:
        alert ("Февраль")
        break;
    case 2:
        alert ("Март")
         break;
     case 3:
        alert ("Апрель")
        break;
    case 4:
        alert ("Май")
        break;
    case 5:
        alert ("Июнь")
        break;
    case 6:
        alert ("Июль")
        break;
    case 7:
        alert ("Август")
        break;
    case 8:
        alert ("Сентябрь")
        break;
    case 9:
        alert ("Октябрь")
        break;
    case 10:
        alert ("Ноябрь")
        break;
    case 11:
        alert ("Декабрь")
        break;
    case 12:
        alert ("Декабрь")
        break;
}