// - створити функцію яка обчислює та повертає площу прямокутника висотою

// let a = +prompt('');
// let b = +prompt('');
// let constant = 2

// function triangle(){
//     let s = (a*b)/constant; 
//     console.log(s);
// } 

// triangle() 

// - створити функцію яка обчислює та повертає площу кола

// let radius = +prompt('');
// const pi = 3.14; 

// function round(){
//     let s = pi*Math.pow(radius,2); 
//     console.log(s);
//     document.write(s)
// }
// round()

// - створити функцію яка обчислює та повертає площу циліндру

// let p = +prompt('')
// let h = +prompt('')
// const pi = 3.14; 
// let c = 2;


// function culinder() {
//     let s = c*(pi*h*p);
//     console.log(s);
//     document.write(s);
// }
// culinder()

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function NumberArray(...numbers) {


//     let min = numbers[0];
//     let max = numbers[0];
//     for (const num of numbers) {
        
//         if(num > max){       // перебираємо  масив помаксимуму
//             max = num;
//         }
//         if(num < min){      // перебираємо  масив помінімуму
//             min = num;
//         }
//     }
//     console.log(max);
//     return min
// }
// console.log(NumberArray(10, 25, 45, 85, 45, 75)); 


// -Приймає масив та число "i", та міняє місцями об `єкт який знаходиться в індексі "i" на "i+1"



// let arr = [9, 8, 0, 4]; 

// function changeNumber(arr, ind){
//     let array = [...arr]; 

//     if(index < array.length - 2){
//         let temp = array[ind]; 
//         array[ind] = array[ind++]; 
//         array[ind++] = temp; 
//     }
//     return array
// }

// let changeOne = change(array1,0)
// console.log(array1);
// console.log(change1);

// let array1 = [9,8,0,4];

// function change(arr, index) {

//     let array = [...arr];

//     if (index < array.length-2) {
//         let temp = array[index];
//         array[index] = array[index+1];
//         array[index+1] = temp;
//     }

//     return array;
// }

// let change1 = change(array1,0)
// console.log(array1);
// console.log(change1);

// let array1 = [9, 8, 0, 4];

// function change(arr, index) {

//     let array = [...arr];

//     if (index < array.length - 2) {
//         let temp = array[index];
//         array[index] = array[index + 1];
//         array[index + 1] = temp;
//     }

//     return array;
// }

// let change1 = change(array1, 1)
// console.log(array1);
// console.log(change1);


let array1 = [9, 8, 0, 4];

// let third = array1.pop(0);  
// let last  = array1.pop(4); 
// let thirdNumb = array1.push(4);
// let lastNumb = array1.push(0);                              КАСТИЛЬ


// console.log(array1);




// function change(arr, index) {

//     let array = [...arr];

//     if (index < array.length - 2) {
//         let temp = array[index];
//         array[index] = array[index + 1];
//         array[index + 1] = temp;
//     }

//     return array;
// }

// let change1 = change(array1, 3)
// // console.log(array1);
// console.log(change1);





























