// class Popelushka {
//   constructor(name, age, size) {
//     this.name = name;
//     this.age = age;
//   this.size = size;
//   }
//
// }
// const popelushkaNew =new Popelushka('Olya', 25, 36);
// const popelushkaNew1=new Popelushka('Vika', 25, 36);
// const popelushkaNew2=new Popelushka('Oleg', 25, 36);
// const popelushkaNew3=new Popelushka('Saha', 25, 36);
// const popelushkaNew4=new Popelushka('Roman', 25, 36);
// const popelushkaNew5=new Popelushka('Olya', 25, 36);
// const popelushkaNew6=new Popelushka('Olya', 25, 36);
// const popelushkaNew7=new Popelushka('Olya', 25, 36);
// const popelushkaNew8=new Popelushka('Olya', 25, 36);
// const popelushkaNew9 =new Popelushka('Olya', 25, 36);
// const popelushkaNew10 =new Popelushka('Olya', 25, 36);
//
//
// let arr = [];
//
// let infoAboutPop = arr.push(popelushkaNew, popelushkaNew1, popelushkaNew2, popelushkaNew3, popelushkaNew4, popelushkaNew5, popelushkaNew6, popelushkaNew7, popelushkaNew8, popelushkaNew9, popelushkaNew10)
//
// // console.log(arr);
//
//
// class Prince{
//     constructor(name,  age, Findsize){
//         this.name = name;
//         this.age = age;
//         this.Findsize = Findsize
//       }
//     }
//     for (let item of arr){
//       if(item){
//         let find = arr.find(function(value){
//         return value.size === 40;
//     })
//     // console.log(find);
//       }
//     }
//
// const princeFind = new Prince('Oleg', 25, 40);
// console.log(princeFind);




// -Створити функцію конструктор для об 'єкту який описує теги
// Властивості
//     -
//     назва тегу -
//     опис його дій -
//     масив з атрибутами(2 - 3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
//     -
//     назву атрибуту -
//     опис дії атрибуту
// інформацію брати з htmlbook.ru


// function Tag(titleOfTag,action,attrs) {
// 	this.titleoftag = titleOfTag;
// 	this.action = action;
// 	this.attrs = attrs;
// }
// let title = "<a>";
// let action = "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.";
// let atribytes = [
// 	{titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
// 	{titleOfAttr: "coords", actionOfAttr: 'Устанавливает координаты активной области.'},
// 	{titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
// ];
// let a = new Tag(title,action,atribytes);
// console.log(a);






