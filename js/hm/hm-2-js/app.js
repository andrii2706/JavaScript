// 1 
//--створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль 

// const names = ['Andrii', 'Oleg', 'John','Ihor', 'Bob']
// console.log(names); 

// const names =[1 ,2, 3, 4, 5]; 
// console.log(names); 

// const names = [true, false, true, false, true ];
// console.log(names);



//2 
// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let emptyArray = [];
// emptyArray[0] = 'Hello';
// emptyArray[1] = {name :'Vasya', age : 25}; 
// emptyArray[2] = {name :'Andrii', age : 20}; 
// emptyArray[3] = {name :'Kolya', age : 21};  
// emptyArray[4] = {name :'OLya', age : 8};  
// emptyArray[5] = {name :'Kolya', age : 21};  
// console.log(emptyArray);





//3 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (i = 0; i < 10; i++ ){
//     document.write(`<div>10 блоків div </div>`)
// }




//4
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (i = 0; i < 10; i++){
//     document.write(`<div>10 блоків div${i}</div>`)
// }

//5 
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0; 
// while (i < 20){ 
//     document.write(`<h1>20 блоків</h1>`);
//     i++;
// }



//6  
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


// let i = 0; 
// while (i < 20){ 
//     document.write(`<h1>20 блоків${i}</h1>`);
//     i++;
// }

//  7 8 9  
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі. 


// let an =[0,1,2,3,4,5,6,7,8,9]; 
// for(i = 0; an.length; i++)
// console.log(an[i]);




// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі. 
// let an = ['klsdmfmkl', 'lkmdslmsd;f','lsdf;fl;sdf','dslkmf;dsfm;sdf','sdasddfasdf','sd;fms;dfm','dfsdklsd','sjndfjnsdfkl','ldknsdld','ds dd ns,df n']
// for(i = 0; an.length; i++)
// console.log(an[i]);


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let mas = [ true, false, 1, 2,3,4,'Andrii','Oleg','John' ,'Ihor' ,];
// for(i = 0; mas.length; i++);
// console.log(mas[i]);


//10 11 12
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let mas = [ true, false, 1, 2,3,4,'Andrii','Oleg','John' ,'Ihor' ,]

// for(let item of mas){
//     if(typeof item === 'boolean'){
//         console.log(item);
//     }
// }
// // for(let item of mas){
// //     if(typeof item === 'number'){
// //         console.log(item);
// //     }
// // }
// // for(let item of mas){
// //     if(typeof item === 'string'){
// //         console.log(item);
// //     }
// // }

// 13
// massive = ["hello", true, false, 33.441, 876, "khgd4", true, false, 7854534534, 876];
// emptyAr = [];
// emptyAr[0] = "hello";
// emptyAr[9] = typeof true;
// emptyAr[8] = false;
// emptyAr[5] = 33.441;
// emptyAr[4] = 876;
// emptyAr[1] = "khgd4";
// emptyAr[2] = true;
// emptyAr[3] = false;
// emptyAr[6] = 7854534534;
// emptyAr[7] = 876;

// for (i = 0; i < emptyAr.length; i++){
//     console.log(emptyAr[i]);
// }; 


//14 
// for(let i = 1; i < 10; i++ ){
//     console.log(` step: `, i) 
//     document.write(`step:`, i)

// } 

// for(let i = 1; i< 100; i++){
//     console.log(`step:`, i);
//     document.write(`step:`, i)
// }

// for(let i = 2; i< 100; i++){
//     console.log(`step:`, i);
//     document.write(`step:`, i)
// }


//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for(let i = 2; i< 100; i++){ 
//     if (i % 2 === 0) {
//         console.log(`step:`, i);
//         document.write(`step:`, i)
//     }
// }


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

//  for(let i = 0; i< 100; i++){ 
//     if (i % 2 === 1) {
//         console.log(`step:`, i);
//         document.write(`step:`, i)
//     }
// }





//додаткове дз
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ]; 


// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ]; 
//  for (let user of usersWithId){
//     for( let city of citiesWithId){
//         if (user.id === city.user_id) {
//             user.adress = city 
//         }
//     }
//  }
// console.log(usersWithId)
























