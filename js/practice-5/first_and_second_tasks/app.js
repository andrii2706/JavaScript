// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
//     b) робить шириниу елементу ul 400px
//     c) робить шириниу всіх елементів з класом linkList шириною 50%
//     d) отримує текст який зберігається в елементі з класом listElement2
//     e) отримує всі елементи li та змінює ім колір фону на сірий
//     f) отримує всі елементи 'a' та додає їм клас anchor
//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//     l) отримати елементи p та змінити їм padding на 20px
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

// 2. Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div
//////////////////////////////////////////////////////////////////////////
// 3. Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.


// ДОДАТКОВО
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар




// let firstTask = document.getElementById('main_header');
// firstTask.innerText = 'Monday,year- 2021' 

// let elemLi = document.getElementsByTagName('ul')
//     for(const item of elemLi) {
//         item.style.width = '400px';
//     }

// let listLink = document.getElementsByClassName('linkList') 
// for(const item of listLink){
//     item.style.width = '50%' ;
// }

// let listElement = document.getElementsByClassName('listElement2')
// for(const item2 of listElement){
//     let txt = item2.innerText
//     console.log(txt);
// }


// let colorLi = document.getElementsByTagName('li');
// for(const item4 of colorLi ){
//     item4.style.background = 'silver';
// }
 
// let addClass = document.getElementsByTagName('a'); 
// for(const item7 of addClass){
//     item7.classList.add('anchor')
// }

// let changeSize = document.getElementsByTagName('a')
// for (const item8 of changeSize){
//         let txt = item8.innerText
//     if (txt === 'link3'){

//     }
// } 
// let addClass = document.getElementsByTagName('a'); 
// for(const item of addClass){
//     let txt = item.innerText
//     item.classList.add('element_' + item.innerText) 
// }

// result = prompt('Your Color')
// let changeColor = document.getElementsByClassName('sub-header');
// for(const item of changeColor){  
//     item.style.background = result;
// }


// result = prompt('Your Color')
// let changeColor = document.getElementsByClassName('sub-header'); 
// for(const item of changeColor){  
// if(item.innerText === 'content 2 segment'){
//     item.style.color = result
// }
// }


// result = prompt('Your Text')
//  let changeColor = document.getElementsByClassName('text_segment');
//  for(const item of changeColor){  
//      item.innerText = result;
//  }

// let changePadding =document.getElementsByTagName('p');
// for(const item of changePadding){
//     item.style.padding ='20px'
// }


// let element = document.getElementsByClassName('text2');
// for( const item of element){
// item.innerText = 'Monday,year- 2021'
// }




// 2. Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div

// const {name} = document.forms.form1; 
// const btn = document.getElementById('btn')
//  btn.onclick = () =>{
//      localStorage.setItem('name', name.value)
//  }







// let form1 = document.forms.form1 
// let nameInput = form1.name; 
// const key = 'key';
// let btn = document.getElementById('btn')
// form1.addEventListener('submit', (event) =>{
//     // event.preventDefault(); 
//     let name = nameInput.value;
//     let jsonUser =JSON.stringify(name); 
//     localStorage.setItem('key', jsonUser);
// });




// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
















