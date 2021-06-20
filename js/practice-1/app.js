

// 1. Оголосіть змінні str, num, flag и txt зі значеннями «Привіт», 123, true, «true».
//    За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и  boolean.
// let str = 'привіт';
// let num =  123;
// let flag = 'true';
// let txt = true;  
// console.log( typeof str);
// console.log( typeof num);
// console.log( typeof flag);
// console.log( typeof txt);



//2. Оголосіть змінні a1, a2, a3, a4, a5. За домогою 3х математичних оператцій отримайте числа:
    // 34,
    // 12,
    // 66,
    // 90,
    // 87
    // Старайтесь використовувати різні оператори.
    // Example: 88 = (16 / 2) * 11
// let a1 = 22 ;
// let a2 = 12 ;
// let a3 = 3; 
// let a4 = 87;
// let a5 = 0;  

// let s1 = a1+ a2; 
// let s2 = a4 + a3; 
// let s3 = a5 + a5;

// console.log( s1 ); 
// console.log( s2 );
// console.log( s3 ); 




// 3.  Створіть змінні a6, a7, a8, a9, a10. Запишіть в них результати виразів:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'
// let a6 = 5;  
// a6 = '5'
// let a7 = 3; 
// let a8 = '3';
// let a9 = 'кг'; 
// let a10 = 75 ;


// console.log( a6 % a8 ); 
// console.log( a6 % a8 ); 
// console.log( a6 + a8 ); 
// console.log( a10 + a9); 




// 4. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значееня площі зберігати в змінній s.
// let height = 23;
// let width = 10;
//  let s = width *height;
//  console.log( s + 'см');




// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.
// let heigthC = 10;
// let dC = 4; 
// let v = dC *heigthC;

// console.log(v);


// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//    Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
// let n1 = 3; 
// let n2 = 3;
// let m = 4;

// let k = n1**2 + n2**2 +m**2 

// console.log(k);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

// let firstName = prompt('Your first name');
// let Lastname = prompt('Your Last name') ;
// let Fathername = prompt('Your father name') ;
// let age = +prompt('') ;
// let hobby = prompt('') ; 

// alert( `${firstName}\n ${Lastname}\n ${Fathername}\n ${age}\n ${hobby}`) 
// console.log( firstName, Lastname, Fathername, age, hobby ); 



// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write 

// let str1 = 'хто';
// let str2 ='ти';
// let str3 ='такий?';

// let concatenation = str1  + ' '+ str2 + ' ' + str3; 
// document.write(concatenation)

// 10. Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//      let a = 5;
//      document.write(str + a + "<br/>");205
//      document.write(str - a + "<br/>");15
//      document.write(str * "2" + "<br/>");40
//      document.write(str / 2 + "<br/>"); 10

// let str = "20"; 
// let a = 5; 
// document.write(str + a + "<br/>"); 
// document.write(str - a + "<br/>");
// document.write(str * "2" + "<br/>");
// document.write(str / 2 + "<br/>"); 

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
//  let x1 = +prompt(''); 
//  let x2 = +prompt('');
//  let s = x1+x2;
//  alert(s); 

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert 

// let x1 = prompt('Імя')
// let x2 = prompt('Фамілія')
// let x3 = prompt('Вік') 

// alert(`Доброго вечора ${x1} ${x2} , мої вітання${x3}`)

