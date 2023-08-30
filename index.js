// var sum=0;
// //array
// var users = ['harsh','aman','sr']
// //object
// var user1={
//     user:'harsh',
//     age:20
// }
// // for(var i=0;i<user1.length;i++){
// //     console.log(user1[i]);
// // }
// // console.log(user1)
// //array of objects
// var users2 =[
//     {name1 : 'harsh', age: 21},
//     {name1 : 'harsh', age: 21}
// ];
// //functions
// function printall(users){
//     for(var i=0;i<users.length;i++){
//         console.log('name= '+users[i].name1)
//     }
// }
// // printall(users2)

// function sumall(start,end){
//     var sum=0;
//     for(start;start<end;start++){
//         sum+=start;
//     }
//     return sum
// }
// console.log(sumall(3,5));

//functions can take other functions as input
// function sum(a,b){
//     return a+b;
// }
function multiply(a,b){
    return a*b;
}
function devide(a,b){
    return a/b;
}
function substract(a,b){
    return a-b;
}
function calculator(a,b, func){
    return func(a,b);
}
// let x = calculator(5,7, multiply);
// console.log(x);

// console.log("harsh");
// console.log("\nbabu");//on new line more

// process.stdout.write("harsh")
// process.stdout.write("babu\n\n")//same line print


function createPattern(numberOfRows){
    for(var i=1;i<numberOfRows;i++){
        let pattern = ""
        for(var j=0;j<i*2;j++){
            pattern += "*";
        }
        console.log(pattern)
    }
}

// createPattern(8)

function starryPattern(numberOfRows){
    for(var i=1;i<=numberOfRows;i++){
        let pattern = "",space="";
        for(var j=1;j<=i*2-1;j++){
            pattern += "*";
        }
        for(var k=1;k<=numberOfRows-i;k++){
            space += " "
        }
        console.log(space+pattern)
    }
}
//        *
//       ***
//      *****
//     *******
//    *********
//   ***********
//  *************
// ***************
// starryPattern(8)


function fibonacci(num){
    let first = 0,second =1;
    if(num<=1)return num;
    for(var i=0;i<num-2;i++){
        let sum=0
        sum+=first+second;
        first=second;
        second=sum;
    }
    return second;
}
// console.log(fibonacci(5))

//asynchronous js
const fs = require('fs');
const sum = (n) => {
    let temp = 0;
    for(let i=0;i<n;i++){
        temp+=i;
    }
    console.log(temp);
}
// var startTime = new Date().getTime();
// const a = sum(10000000);
// var endTime = new Date().getTime();
// console.log((endTime-startTime)/10000); //0.009

// var starTime = new Date().getTime();
// const x = sum(10000000/2);
// const y = sum(10000000/2)
// var enTime = new Date().getTime();
// console.log((enTime-starTime)/10000); //0.009
//same time as both run on same thread one by one.

//asynchronus js implementation using callback
function fileIsRead(err, fileContent){
    sum(fileContent)
    console.log("file is read gave final answer ")
}
fs.readFile("content.txt",'utf-8',fileIsRead);
sum(21);
sum(22);
sum(23);
sum(24);
