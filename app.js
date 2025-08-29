// function testVar() {
//     var v = 10;
//     if (true){
//         var v = 20;
//         console.log(v);
//     }
//     console.log(v);
// }

// function testlet() {
//     let l = 10;
//     if (true) {
//         let l =20;
//         console.log(1);
//     }
//     console.log(1);
// }

// function testConst(){
//     const c = 10;
//     if (true) {
//         const c = 20;
//         console.log(c);
//     }
//     console.log(c)
// }

// testVar();
// console.log();
// testlet();
// console.log();
// testConst();

// var v = 10;
// v = 20;
// console.log(v);
// console.log();

// let l = 10;
// l = 20;
// console.log(l);

// // const c = 10;
// // c = 20; 
// // console.log(c);

// let message = "hello,world";
// let score = 95;
// let isPassed = true;
// let emptyValue = null;
// let notDefined = undefined;
// let person = {name:"alice",age:25};
// let number = [1,2,3,4];

// console.log(typeof message);
// console.log(typeof score);

let age = 20;
let isAdult = (age>=18) && (age<65);
let isChild = (age<18) || (age>65);
let notAdult = !isAdult;
console.log("isAdult",isAdult);
console.log("isChild",isChild);
console.log("notAdult",notAdult);

let score1 = 85;
let garde = (score1 >= 80 ) ? "A" : "B";
console.log("Grade",garde);

let score = 75;

if (score >= 80) {
    console.log("เกรด A")
} else if (score >= 70) {
    console.log("เกรด B")
} else if (score >= 60) {
    console.log("เกรด C")
} else {
    console.log("ตก")
}

let j = 1;
while (j <= 5) {
    console.log(j);
    j++
}

let fruit =["Apple","banana","cherry"]

for (let i = 0; i < fruit.length; i++) {
    console.log (`fruit ${i+1}: ${fruit[i]}`);
}

