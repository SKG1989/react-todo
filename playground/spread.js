/*
function  add(a, b) {
    return a + b;
}

console.log(add(3, 1));

var toAdd = [9 ,1];

console.log(add(...toAdd));*/

/*

var groupA = ['jen', 'Cory'];
var groupB = ['Vikram'];

var final = [...groupB, 3, ...groupA];

console.log(final);*/


var person = ['Santosh', 27];
var personTwo = ['Andre', 29];


function printName( name , age) {
    console.log("Hi " + name + ", you are " + age);
}

printName(...person);
printName(...personTwo);

var name = ['Santosh', 'Mike'];
var final = ['Andrew', ...name];

final.forEach(function (name) {
    console.log("Hi, " + name);
});