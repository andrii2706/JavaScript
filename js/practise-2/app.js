
//1
// let an = ['a', 'b', 'c'];
// let i = 1;
// while( i < 4 ){
//    an.push(i)
//    i++
// }
// console.log(an); 


//////////////////////////////
// 2
// let an = [1, 2, 3]; 
// function reserve (an){
//     for(let i = 0; j = an.length-1 ;i < j; i++, j--){
//         let tmp = an[i];
//         an[i] = an[j];
//         an[j] = tmp; 
//     }
//     console.log(an)
// }



////////////////////////////
//4
// let an = [1, 2, 3];
// an.push(4, 5, 6) 
// console.log(an)


//3
// let an = [1, 2, 3];
// an[an.length] = 4;
// an[an.length] = 5;
// an[an.length] = 6;
// console.log(an)


//5 

// let an = [1, 2, 3, 4, 5];
// console.log(an.slice(3,5));

//6 
// let an = [1, 2, 3, 4, 5];
// console.log(an.slice(0,2)) 

//7 
// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr.slice(0,3); 
// arr2.push('a','b','c') 
// console.log(arr2)







//8
let an =[5, 6, 8,4,70, 15, 25,85,88,100 ]
for(let i = 0; i < an.length; i++){ 
    if (an[i] % 2 === 0) {
 console.log(an[i]);
        document.write(i)
    }
}

