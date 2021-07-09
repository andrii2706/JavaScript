
// 1) створити функцію яка приймає масив та виводить його

// let arr = [
//     {id: 1, name: 'Вася', age: 31, status: false,country: 'Ukraine', city: 'Ternopil'},
//     {id: 2, name: 'Петро', age: 30, status: true,country: 'Poland', city: 'Krakow'},
//     {id: 3, name: 'Коля', age: 29, status: true,country: 'USA', city: 'Portland'},
//     {id: 4, name: 'Оля', age: 28, status: false,country: 'USA', city: 'Miami'},
//     {id: 5, name: 'Олег', age: 35, status: true,country: 'Mexico', city: 'Mexico'},
//     {id: 6, name: 'Ігор', age: 20, status:false,country: 'Spaine', city:'Barcelona'}
// ]
// function InfoCard(id, name, age, status, country, city){
//     console.log(`step:${id}`, `${name}`);
//     document.write(
//          ` <div>
//          <h2>
//         Step: ${id}
//          </h2>
//              <h2>
//                ${name} Age- ${age}
//              </h2>
//          <p>
//                 Status - ${status}
//                 Country where live now - ${country}
//                 ${city}
//                  </p>
//          </div>`);
// }
// for( let info of arr){
//     InfoCard(info.id,info.name,info.age ,info.status,info.country, info.city)
// }
//
//
//
// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
// let arr2 = [];
// function InfoCard(){
//
// for( i = 0; i < 10 ; i++){
//     let a = Math.round(Math.random()*10000000000000000000);
//     arr2.push(a);
//     console.log(arr2);
// }
// }
// InfoCard()

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

//  function element (num1, num2,num3){
//     if (num1 < num2 && num1 < num3 ){
//         console.log(num1);
//         return num1;
//     }else if (num2 < num3 && num2 < num1){
//         console.log(num2);
//         return num2;
//     } else {
//         console.log(num3);
//         return
//     }

// }
// let x1 = +prompt('x1');
// let x2 = +prompt('x2');
// let x3 = +prompt('x3');
// element(
//     x1, x2, x3
// )

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)



// function element (num1, num2,num3){
//     if (num1 > num2 && num1 > num3 ){
//         console.log(num1);
//         return num1;
//     }else if (num2 > num3 && num2 > num1){
//         console.log(num2);
//         return num2;
//     } else {
//         console.log(num3);
//         return
//     }

// }
// let x1 = +prompt('x1');
// let x2 = +prompt('x2');
// let x3 = +prompt('x3');
// element(
//     x1, x2, x3
// )



// 6) створити функцію яка повертає найменьше число з масиву

// function FunMin(array){
//     let min = array[0]; 
//     for (const FunMinElt of array){
//         if (FunMinElt < min) min = FunMinElt;
//     } 
//     return min;
// } 
// const FunMaxReturn = FunMin([1, 2, 3, 4, 5 ,6, 7, 8,9,0]);
// console.log(FunMaxReturn);



// 5) створити функцію яка повертає найбільше число з масиву
// function FunMax(array){
//     let max = array[0]; 
//     for (const FunMaxElt of array){
//         if (FunMaxElt > max) max = FunMaxElt;
//     } 
//     return max;
// } 
// const FunMaxReturn = FunMax([1, 2, 3, 4, 5 ,6, 7, 8,9,0]);
// console.log(FunMaxReturn);
 

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.


// function FunSum(array){ 
//     let i = 0;
//    for(const ArrElt of array){
//         i += ArrElt; 
//    }
//     return i
// } 
// const FunSumReturn = FunSum([1, 2, 3, 4, 5 ,6, 7, 8, 9, 0]);
// console.log(FunSumReturn);


// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function FunSum(array){ 
//     let i = 0;
//    for(const ArrElt of array){
//         i += ArrElt; 
//    }
//     return i/array.length;
// } 
// const FunSumReturn = FunSum([1, 2, 3, 4, 5 ,6, 7, 8, 9, 0]);
// console.log(FunSumReturn);

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів

// function Keys(arrayObject){
//     let count =[]; 
//     for (const item of arrayObject){
//         if( typeof item === 'object'&& !Array.isArray(item)){
//             for( const key in item){
//                 count.push(key);
//             }
//         }
//     } 
//     return count;
// }
// let number = Keys(users);
// console.log(number);

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// function info(arrayObject){
//     let count =[]; 
//     for (const item of arrayObject){
//         if( typeof item === 'object'&& !Array.isArray(item)){
//             for( const information in item){
//                 count.push(information);
//             }
//         }
//     } 
//     return count;
// }
// let number = info(users);
// console.log(number);

// 11) творити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.

//   function SumArr(a1, a2){
//       let NewArr =[];
//       for(let i = 0; i < a1.length; i++ ){
//           NewArr.push(a1[i] + a2[i]);
//       }
//       return NewArr;
//   }
// let returnArrConst = SumArr([1,2,3,4],[2,3,4,5]);
// console.log(returnArrConst);


// console.log();








