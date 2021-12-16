//1. ways to print in Javascript
// console.log("hello world");
//alert("me");
//document.write("this is documetn write")

//2. Javascript console API
console.log("Hello World", 4 + 6, "Another log");
console.warn("this is warning");
console.error("This is an error");

// 3. javascript varaible
// js varaibles -these are containers to store data values
// in js we use "var" to create container
// multi line comment we use  /* and clse with */
var number1 = 34;
var number2 = 35;
console.log(number1 + number2);

// 4. data types in javascript

// type number and string, object, boolean.

// string datatypes
var str = "this is a string";
var str2 = 'this is also a string';

// num datatypes
var num1 = 44 5;
var num2 = 56.21
Another datatype is Objectes - like if we van to store something

//objects
var marks = {
    ravi: 34,
    shubham: 56,
    harry: 99.97,
}
console.log(marks);

//booleas
var a = true;
var b = false;
console.log(a, b);

//definedf and undefined and null
//var und = undefined;
var und;
console.log(und);

var n = null;
console.log(n);

// collection of string is called array.
/*
At very high level, there are two types of data types in JavaScript
1. Primitive data types: udefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects
*/
var arr = [1,2,3,4,5]
console.log(arr)

// Operators in Javascript - arithemetic, assignment
// Arithmetic Operators
var c = b;
c +=2;
c -=2; // c = c- 2 
c *=2;
c /=2;
console.log(c);
// Comparison Operators
var x = 34;
var y = 56;
console.log(x==y);
console.log(x >= y);
console.log(x <=Y);
// Logical And Operators
console.log(true && true)
console.log(true && false)
console.log(flase && true)
console.log(false && false)
// Logical Or Operator
console.log(true || true)
console.log(true || false)
console.log(flase || true)
console.log(false || false)
// Logical Not Operator
console.group(!false);
console.log(!true);
/*operator wo hai jo do oprands pe lagta hai jaise 34 ko 36 se jodjunga 
to operator hai plus + but operands hai wo do number */

// DRY = Don NOt Repeat Yourself
//Function in javascript 

function avg(a, b){
    c = (a + b)/2;
    return c;
}

c1 = avg(4, 6);
c2 = avg(14, 160;
    console.log(c1, c2);

// conditionals in JavaScript- if, else, else if
// as these are easy not writing any code for example

// Now we will study loops in javascript  


// Dates in JS
let myDate = new Date();//explor more dates from mdn document
console.log(myDate)
console.log(myDate.getTime());// for time in seconds
console.log(myDate.getFullYear());
console.log(myDate.getDay()); // return day in =number like 5, 6

/* Js DOM Manipulation - mean Document Object Model by thsi we can 
manipulate html, we can show html in dynamic by dom
we can make our html and css dynamic by js ex:- 
document.getElementById('Click').style.border = "Blue"
document.getElementById('Click').style.border = "2px solid blue"
*/
let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName
console.log(elemClass);

// DOM manipulation
document.getElementById('click');
console.log('elem');

let elemClass = document.getElementsByClassName('container')
console.log(elemClass);
elemClass[0].style.background = 'yellow'; 
elemClass[0].classList.add("bg-primary")
// kisi bhi element se uski andar ki list ko bahar la sakta hoon by 
elemClass[0].innerhtml
// bytagname and what you will pass it will show all the tags
tn = document.getElementsByName('button')
// PLEASE ALWAYS BE CAREFUL ABOUT 'ELEMENT' AND 'ELEMENTS'.
tn = document.getElementsByName('div')

//selecting using query
sel = document.querySelector('.container')
console.log(sel)









