// var a = 10;
// function b() {
//     var x = 10;

// }
// console.log(window.a);
// console.log(a);
// console.log(this.a);
// console.log(x);

// var b = 10;
// function a() {
//     const b = 20;
// }
// a();
// console.log(b);

// var a;
// console.log(a);
// var a = 5;
// console.log(a);
// var a = 10;
// console.log(a);
// var a = 15;
// console.log(a);

// let a;
// a = 10;
// console.log(a);
// a= 20;
// console.log(20);
// let a = 20; // ❌Cannot redeclare block-scoped variable 'a'.
//             // SyntaxError: Identifier 'a' has already been declared
// console.log(a);

// const a; //warning : 'const' declarations must be initialized.
// a = 10;
// console.log(a);
// const a = 10;
// a = 20; //❌ TypeError: Assignment to constant variable.
// console.log(a);

//**Scope chain, Scope & Lexical environment

// function a() {
//     console.log("1",b);
//     c();
//     console.log("2",b);
//     function c() {
//         console.log("3",b);
//     }
//     console.log("4",b);
//     var b = 10;
//     console.log("5",b);
// }
// // console.log("6",b);
// a();
// console.log("7",b);

//**NOTE : var is not block-scoped

// {
//     var a = 10;
//     console.log(a);
// }
// console.log(a);

// {
//     var a = 10;
//     console.log(a);
// }
// a = 20;
// console.log(a);

//NOTE : let & const are block-scoped

// {
//     let a = 10;
//     console.log(a);
// }
// console.log(a); // ReferenceError: a is not defined

// {
//     const a = 10;
//     console.log(a);
// }
// console.log(a); //ReferenceError: a is not defined

//**10. BLOCK SCOPE & SHADOWING in JS

// var a = 100;
// let b = 200;
// const c = 300;

// {                   //SCOPE
//                     //BLOCK
//     var a = 10;     //Global - a : 100
//     let b = 20;     //Script - b : 200
//     const c = 30;   //Script - c : 300
// }
// console.log(a);
// console.log(b);
// console.log(c);

//**11. Closures in JS

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
// //   var a = 7;
//   y();
// //   var a = 7;
// }
// x();

// function x() {
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     a = 100;
//     return y; // return function y with a = 100
// }
// var z = x();
// // console.log(z); //print 100
// z(); // print 100

// function z() {
//     var b = 900;
//     function x() {
//         var a = 7;
//         function y() {
//             console.log(a, b);
//         }
//         y();
//     }
//     x();
// }
// z();

//*setTimeout + closures

// function x() {
//     var i = 1;
//     setTimeout(function(){
//         console.log(i);
//     }, 1000);
// }
// x();

// function x() {
//     var i = 1;
//     setTimeout(function(){
//         console.log(i);
//     }, 3000);
//     console.log("Namaste JS");
// }
// x();

// function x() {
//     for (var i=0; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//     }
// }
// console.log("Namaste JS");
// x();

// function x() {
//     for (let i=0; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i*1000);
//     }
// }
// console.log("Namaste JS");
// x();

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function wrapper(j) {
//       setTimeout(function () {
//         console.log(j);
//       }, j * 1000);
//     }
//     wrapper(i);
//   }
// }
// console.log("Namaste JS");
// x();

//**First class functions */
// a();
// b(); // TypeError: b is not a function
// //function statement aka Function Declaration
// function a() {
//     console.log("a called");
// }

// //function expression
// var b = function() {
//     console.log("b called");
// }

//*Anonymous function
//refers to a fucntion that does not have a name as a title

// function () {

// }

//*Named function expression

// var b = function xyz() {
//     console.log("b called");
// }
// b();
// xyz(); //ReferenceError: xyz is not defined

// var b = function xyz() {
//     console.log(xyz);
// }
// b(); //[Function: xyz]
// xyz(); //ReferenceError: xyz is not defined

//*First class functions
//*NOTE : In JS, we can pass functions as arguments
//The ability to use functions as values is known as FCF.
//The ability to use functions as arguments and using them as parameter and
//also returning functions from a functio as values, this ability is known as
//*First Class Functions

// var b = function (param1) {
//   console.log(param1());
// };
// b(function () {
//   console.log("I am a function");
//   return "samjha";
// });
//*Functions are "First Class Citizens"
//*Javascript is a synchronous and single-threaded language, but due to "Callbacks" we
//*can do "async" things in JS.

//*Arrow functions : Arrow functions allow us to write shorter function
//syntax :
// let myFunction = (a, b) => a*b;
// console.log(myFunction(2,3));

//*Callback functions in JS ft. Event Listeners

// setTimeout(function (){
//     console.log("timer");
// }, 5000);

// function x(y) {
//     console.log("x");
//     y();
// }

// x(function y(){
//     console.log("y");
// });

//* 17 - Callback functions in JS ft. Event Listeners
// Functions that are passed into another function as an argument are known as "Callback function"
// They gives us the access to whole "asynchronous world" in a single synchronous threaded language.

//* NOTE : "Anything" whatever is executed inside our page is executed through "callstack" only.
//* If any operation blocks the callstack that is known as Blocking the main thread.
//for eg. - Suppose we have some operation which will consume so much time so in that case it will block the main
// thread, and JavaScript uses a single thread, so it won't be able to execute any other line of code.
//*We should never block the main thread that's why we should always use "async" operations for the things/function
//* that is going to take time.

//*Interview question
//Print the number of times, button clicked

// let count = 0;
// var btn = document.getElementById("clickMe");
// btn.onclick = function() {
//     count++;
//     console.log(count);
// }

// function attachEventListeners() {
//     let count = 0;
//     var btn = document.getElementById("clickMe");
//     btn.addEventListener("click", () => {
//         console.log("Button clicked", ++count);
//     });
// }
// attachEventListeners();

//*Garbage Collection & remove EventListeners
// const button = document.getElementById('clickMe');

// button.addEventListener('click', function(event) {
//     console.log('Button clicked!');
//     console.log('Event type:', event.type);
//     console.log('Target element:', event.target);
// });
// const button = document.getElementById('clickMe');

// function handleClick() {
//     console.log('Button clicked!');
// }

// // Adding event listener
// button.addEventListener('click', handleClick);
// // Removing event listener
// // button.removeEventListener('click', handleClick);
// setTimeout(()=> button.removeEventListener('click', handleClick), 9000);

//*Asynchronous JavaScript & EventLoop

// console.log("start");
// setTimeout(function cb() {
//     console.log("callback");
// }, 2000);
// console.log("end");

// console.log("start");
// const btn = document.getElementById('clickMe');
// btn.addEventListener('click', function cb() {
//     console.log("clicked");
// })
// console.log("end");

// console.log("start");
// setTimeout(function cbT() {
//     console.log("CB Timeout");
// }, 1);
// fetch("https://www.google.com/")
// .then(function cbF() {
//     console.log("CB Netflix");
// });
// console.log("end");

// console.log("start");
// setTimeout(function cb() {
//     console.log("callback");
// }, 0);
// console.log("end");
// let startDate = new Date().getTime();
// let endDate = startDate;
// while ( endDate < startDate + 10000) {
//     endDate = new Date().getTime();
// }
// console.log("while expires");

//* Higher-Order Functions ft. Functional Programming
//Higher-order functions are regular functions that take other
//functions as arguments or return functions as their result
//e.g.,
// function x() {
//     console.log("Hi");
// };
// function y(z) {
//     z();
// }
// y(x);

//*Examples of Higher-Order Functions:
//* Array.prototype.map(), Array.prototype.filter(), and Array.prototype.reduce() are higher-order functions in JavaScript.
//* They take a function as an argument and apply it to each element of an array.
//* setTimeout() and setInterval() are higher-order functions that accept a function as their first argument to execute after
//*  a certain delay or at specified intervals.

//*Example: Using Array.prototype.map() as a Higher-Order Function:

// const numbers = [1, 2, 3, 4, 5];

// // Using map() to double each element in the array
// const doubledNumbers = numbers.map((number) => number * 2);

// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

//* WAP to calaculate an area of radius provided in an array

// const radiusArray = [1,2,3,4,5,]

// function calculateArea(radius) {
//     return Math.PI * radius * radius;
// }
// function calculateCircumference(radius) {
//     return 2 * Math.PI * radius;
// }
// areaArray = [];
// areaArray = radiusArray.map((radius) => calculateArea(radius));
// console.log(areaArray);

// circumferenceArray = []
// circumferenceArray = radiusArray.map((radius) =>calculateCircumference(radius));
// console.log(circumferenceArray);

//* Important Array Methods in JavaScript - map, filter, reduce
// const users = [
//   { firstName: "Alok", lastName: "Raj", age: 23 },
//   { firstName: "Ashish", lastName: "Kumar", age: 29 },
//   { firstName: "Dixit", lastName: "Kumar", age: 19 },
//   { firstName: "Ankit", lastName: "Roy", age: 29 },
//   { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
// ];

//*map - to get user fullname
// const userFullName = users.map((user) => user.firstName + " " + user.lastName);
// console.log(userFullName);

//*filter - to get name of those users whose age is less than 30

// const selectedUser = users.filter((user) => user.age < 30);
// console.log(selectedUser);
//* method chaining
// const selectedUser = users.filter((user) => user.age < 30).map(user => user.firstName);
// console.log(selectedUser);

//* find method - use to find the first element which satisfies the condition
// const selectedUser = users.find(user => user.lastName === "Kumar");
// console.log(selectedUser);

// const report = users.reduce((acc, curr) => {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc; //to every time return update object
// }, {});

// const report = users.reduce((acc, curr) => ({
//     ...acc,
//     [curr.age]: (acc[curr.age] || 0) + 1
//   }), {});

// console.log(report); // {29 : 2, 75 : 1, 50 : 1}
// let a = 10;
// const b = 20;
// var n = 2;

// function square(num) {
//     var ans = num * num;
//     return ans;
// }

// var square2 = square(n);
// var square4 = square(4);
// console.log(square2);
// console.log(square4);

//*Understanding of callback function
// function a(param1, callback) {
//   console.log(param1);
//   callback(); // Invoke the callback function
// }

// a("print function a", function () {
//   console.log("from callback");
// });


//*Understanding promises
//* What is a Promise in JavaScript ?
// A Promise is an object representing an eventual completion of failure of an 
// asynchronous operation
const cart = ["shoes", "pants", "kurta"];

// 1. Placing an order without using promises
createOrder(cart, function (orderId) {
  proceedToPayment(orderId);
});

// 2. Placing an order using promises
const promise = createOrder(cart);

promise.then(function (orderId) {
  proceedToPayment(orderId);
});
