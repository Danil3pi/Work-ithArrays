"use strict"
// let arr_1 = [1, 3, 4];
// let arr_2 = arr_1;

// arr_2.push(78);


// плохо, если с массивом работать как с обычным объектом

// for ( let i = 0; i < 10e1; i++) {
//     arr_1[i] = +(Math.random() * 10).toFixed();
// }

// for(let item of arr_2) {
//     console.log( item );
// }
// console.log('=====================================================');
// for (const key in arr_2) {
//     console.log( arr_2[key] );
// }

// let obj = {
//     first : 12,
//     second : 90,
// }

// for (let index in arr_2) {
//     //console.log(index);
// }

// let arr = new Array(3); // создается пустой массив длины 3

// let styles = ["Джаз", "Блюз", 1, 8];
// styles.push("Рок-н-ролл");
// console.log(styles);
// styles[Math.floor(styles.length / 2)] = "Классика";
// console.log(styles);
// console.log(styles.shift());
// styles.unshift("Рэп", "Регги")
// console.log(styles);

function getSummFromElementsOfArray( values ){
    let summ = 0;

    for (let val of values)
        summ += val;
    
    return summ;
}

function sumInput(){
    let inputValue;

    let valuesArray = [];

    do{
        inputValue = prompt("Ввелите число", 0);
        valuesArray.push(+inputValue);
    }while(inputValue != null)

    alert(getSummFromElementsOfArray(valuesArray));
}

sumInput();


