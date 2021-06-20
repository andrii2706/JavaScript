// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами User

// function User ( id, name, surname, email, phone ){
//     this.id = id;
//     this.name = name; 
//     this.surname = surname; 
//     this.email = email;
//     this.phone =phone 


//         // console.log(`Our users`);
  
 
// }
// const karina = new User('1','Karina','Melesova','karina@gmail.com', +380668579540 )
// const oleg = new User('2','Oleg','Melesov','Oleg@gmail.com', +380669959540 )
// const ivan = new User('3','Ivan','Melesov','Oleg@gmail.com', +380669959540 )
// const andrii = new User('4','Andrii','Melesov','Oleg@gmail.com', +380669959540 )
// const roman = new User('5','Roman','Melesov','Oleg@gmail.com', +380669959540 )
// const vika = new User('6','Vika','Melesov','Oleg@gmail.com', +380669959540 )
// const nadia = new User('7','Nadia','Melesov','Oleg@gmail.com', +380669959540 )
// const sergii = new User('8','Sergii','Melesov','Oleg@gmail.com', +380669959540 )
// const olya = new User('9','Olya','Melesov','Oleg@gmail.com', +380669959540 )
// const lera = new User('10','Lera','Melesov','Oleg@gmail.com', +380669959540 )
 

// let emptyArr = [];
//  emptyArr[0] = karina;
//  emptyArr[1] = oleg;
//  emptyArr[2] = ivan;
//  emptyArr[3] = andrii;
//  emptyArr[4] = roman;
//  emptyArr[5] = vika;
//  emptyArr[6] = nadia;
//  emptyArr[7] = sergii;
//  emptyArr[8] = olya;
//  emptyArr[9] = lera;

// for(i = 0; i < emptyArr.length; i++){
//     console.log(emptyArr[i]);
// }

// console.log([karina , oleg, ivan, andrii, roman, vika, nadia, sergii, olya, lera]);


// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor( id, name, surname , email, phone, order ) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone; 
//         this.order = order;
//     }

// }
        
//     const karina = new Client('1','Karina','Melesova','karina@gmail.com', '+380668579540', 'iphone-X' );
//     const oleg = new Client('2','Oleg','Melesov','Oleg@gmail.com', '+380669959540','iphone-X, hp pavilion' );
//     const ivan = new Client('3','Ivan','Melesov','Oleg@gmail.com', '+380669959540', 'Iphone-12, macbook Air, samsung gear3' );
//     const andrii = new Client('4','Andrii','Melesov','Oleg@gmail.com', '+380669959540', 'Samsung A30s, Lenovo Legion, jbl 500bt' );
//     const roman = new Client('5','Roman','Melesov','Oleg@gmail.com', '+380669959540', 'Samsung A30s, Lenovo Legion, jbl 500bt' );
//     const vika = new Client('6','Vika','Melesov','Oleg@gmail.com', '+380669959540', 'Samsung A30s, Lenovo Legion, jbl 500bt' );
//     const nadia = new Client('7','Nadia','Melesov','Oleg@gmail.com', '+380669959540' , 'Samsung A30s, Lenovo Legion, jbl 500bt');
//     const sergii = new Client('8','Sergii','Melesov','Oleg@gmail.com', '+380669959540', 'Samsung A30s, Lenovo Legion, jbl 500bt' );
//     const olya = new Client('9','Olya','Melesov','Oleg@gmail.com', '+380669959540', 'Samsung A30s, Lenovo Legion, jbl 500bt' );
//     const lera = new Client('10','Lera','Melesov','Oleg@gmail.com', '+380669959540', 'Samsung A30s, Lenovo Legion, jbl 500bt' ); 

// let emptyArr = [];
//  emptyArr[0] = karina;
//  emptyArr[1] = oleg;
//  emptyArr[2] = ivan;
//  emptyArr[3] = andrii;
//  emptyArr[4] = roman;
//  emptyArr[5] = vika;
//  emptyArr[6] = nadia;
//  emptyArr[7] = sergii;
//  emptyArr[8] = olya;
//  emptyArr[9] = lera;

// for(i = 0; i < emptyArr.length; i++){
//     console.log(emptyArr[i]);
// }

// console.log([karina , oleg, ivan, andrii, roman, vika, nadia, sergii, olya, lera]);

// 3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// function Car (developer, engine, year, maxSpeed, vodii ){ 
//     this.developer = developer; 
//     this.engine = engine; 
//     this.year = year; 
//     this.maxSpeed = maxSpeed; 
//     this.vodii = vodii;

//     this.drive = function(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`); 
//     }   
//      this.info = function(){
//         console.log(developer, engine, year, maxSpeed);
//     } 
//     this.increaseMaxSpeed = function(newSpeed){ 
//       this.maxSpeed += newSpeed;
//     } 
//     this.chageYear= function(newYear){
//         this.year = newYear; 
     
//     }
//     this.addDriver= function(driver){
//         this.vodii = driver; 
    
//     }

// } 
// let driver = {
//     name : 'fghjhf',
//     age : 23
// }
// const car = new Car( 'BWM(bavatian moto werke)',4.4, 2000,  280,'sdvsd')
// console.log(car);

// car.addDriver(driver);
// car.info(); 
// car.increaseMaxSpeed(100);
// car.chageYear(2021);



// 4) 
// class Car {
// constructor(developer, engine, year, maxSpeed, driver ){
//     this.developer = developer; 
//     this.engine = engine; 
//     this.year = year; 
//     this.maxSpeed = maxSpeed;  
//     this.driver = driver 
// } 
// drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`); 
//      }  
// info(){ 
//     const Info =(developer, engine, year, maxSpeed)
//          console.log(Info);
//      } 
// increaseMaxSpeed(newSpeed){
//     this.maxSpeed += newSpeed; 
//      } 
// chageYear(newYear){
//          this.year = newYear; 
//      }
// addDriver(drivers){
//          this.driver = drivers; 
        
//      }
// }  
// let drivers = {
//      name : 'Andrii',
//     age : 24,
// }

// const car = new Car( 'BWM(bavatian moto werke)',4.4, 2000,  280, drivers)
// console.log(car);

// 5 Взяти масив з завдання 1.
// - Відфільтрувати , залишивши тільки об'єкти з парними id
// - Відсортувати його по id. по зростанню
// - Відсортувати його по id. по спаданню 



// let number = User.filter(value => value.id % 2 === 0 );
// let num = User.filter(function (value){
//     return value.id % 2 === 0;
// })
// console.log(number);
// console.log(num); 

// 6. Взяти масив з завдання 2.
//     Відсортувати його по кількості товарів в полі order. по спаданню

// let sort = User.sort(function(a,b){
//     return a.id-b.id; 
// }) 
// console.log(sort);
// let sortOne = User((a,b) => a.id-b.id);
// console.log(sort);


