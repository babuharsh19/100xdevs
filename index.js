var sum=0;
//array
var users = ['harsh','aman','sr']
//object
var user1={
    user:'harsh',
    age:20
}
// for(var i=0;i<user1.length;i++){
//     console.log(user1[i]);
// }
// console.log(user1)
//array of objects
var users2 =[
    {name1 : 'harsh', age: 21},
    {name1 : 'harsh', age: 21}
];
//functions
function printall(users){
    for(var i=0;i<users.length;i++){
        console.log('name= '+users[i].name1)
    }
}
// printall(users2)

function sumall(start,end){
    var sum=0;
    for(start;start<end;start++){
        sum+=start;
    }
    return sum
}
console.log(sumall(3,5));

//functions can take other functions as input
