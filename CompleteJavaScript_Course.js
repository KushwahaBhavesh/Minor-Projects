// variable declaration
// var a = 10
// var b = 20

// variable Declaration using let
// let  a =10;
// let b=20;

// using Const keyword : declare constant variable
// const a=10;
// const b =20;

// Arithmetic opertor

// result a+b
// console.log(result);

// result=a*b
// console.log(result);

// result=a/b
// console.log(result);

// result=a%b
// console.log(result);

// result =a-b
// console.log(result);

//  comparison operator
// result=(a==b)
// console.log(result);

// result=(a>b)
// console.log(result);

// result=(a<b)
// console.log(result);

// result=(a!=b)
// console.log(result);

// result=(a>=b)
// console.log(result);

// result=(a<=b)
// console.log(result);

//Typeof Operator
// result="name"
// console.log(typeof(result));

// result=10
// console.log(typeof(result));

// result=true
// console.log(typeof(result));

// var myVar=
// console.log(typeof(myVar));

// if statement
// if(a==b){
//     console.log("equal");
// }
// if(a>b){
//     console.log("A is greater");
// }
// if(a<b){
//     console.log("a is smaller");
// }

// if...else
// if(a>b){
//     console.log("a=",a);
// }else{
//     console.log("b=",b);
// }

// if...elseif...else
// if(a<b){
//     console.log("A=",a);
// }
// else if(a==b){
//     console.log("equal");
// }
// else{
//     console.log("B=",b);
// }



//switch case statement
// const a = 10;
// const b = 20;
// switch (2) {
//     case 1:
//         result = a + b
//         console.log(result);
//         break;

//     case 2:
//         result = a - b
//         console.log(result);
//         break

//     case 2:
//         result = a / b
//         console.log(result);
//         break
// }




// loop structure:: while loop
// var Var=0
// while(Var<=20){
//     console.log(Var)
//     Var++
// }

// do-while loop
//  var no=0
//  do{
//      console.log("bhavesh")
//      no++
//  }
//  while(no<=5)


//for loop
// for(var i=0;i<=100;i++){
//     console.log(i);
// }


// console.log(false-true);
// console.log(true+true);
// console.log(true-false);
// console.log(false-false);



// Interview::Differences between null and undefined


// var aa=null;
// console.log(typeof(aa));

// value swaping::1'st method
// var temp=a;
// a=b
// b=temp
// console.log(a);
// console.log(b);

// 2nd method
// a=a+b
// b=a-b
// a=a-b
// console.log(a);
// console.log(b);


//:: write js program to generate multiplication
//multiplication program
// function mul(num){
// for(var i=1;i<=10;i++){
//     result=num*i;
//     console.log(num ,"*", i ,"=" ,result);
// }}
// mul(5);

// function per() {
//     var person = 'bhavesh'
//     if (person != null) {
//         console.log("hello", person, "how are you today")
//     }
//     else {
//         console.log("Enter name first:");
//     }
// }
// per()
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//anynomous function
//function without name is called anynomous function

// var fun=function(i,j){
//     return i*j;
// }
// console.log(fun(4,70));

// let sum = function (a = 20, b = 30) {
//     return a * b
// }
// console.log(sum());

//Arrow Function:: ()=>{}
// const name =()=>{
//     console.log("name is Bhavesh");
// }  
// name(); 


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------`

// Array in Javascript

// whenever we dont know the size of array and we want the size of array, then we can do arrayname.length-1
// var myFriends =['bhavesh','abhay','dev','aryan','jay']
// console.log(myFriends [myFriends.length-1]);

// for in loop
// var myFriends = ['bhavesh', 'abhay', 'dev', 'aryan', 'jay']
// for (const key in myFriends) {
//     console.log(myFriends[key]);
// }

// for loop
// for(var i=0;i<myFriends.length;i++){
//     console.log(myFriends[i]);
// }

// Taking user input in Arrya:
// var myData =[];
// var size =3;
// function data(){
//     for(var i=0;i<size;i++){
//         myData[i]=window.prompt("Enter Data "+ (i+1));
//     }
//     console.log(myData);
// }
// data();




// **************************************************************************************************************************************************************
//                                                           ES6 : Modern Javascript
// **************************************************************************************************************************************************************
//                                                                   Arrays Methods
// --------------------------------------------------------------------------------------------------------------------------------------------------------------
// map method 
//=> return only number grater than 5
// const arr =[1,4,9,16,25]
// let array = arr.filter((element)=>element>5);
// console.log(arr);
// console.log("Element is greater than 5");
// console.log((array));

// *************************************************************************************************
// using template litterals
// => return  in boolean 
const arr = [1, 4, 9, 16, 25,30]
let newArr = arr.map((element,index,arr)=>`index no=${index} and the value = ${element} belong to ${arr}`);
console.log(newArr);

// ****************************************************************************************************
//forEach Method
// const arr = [1, 4, 9, 16, 25,30]
// let newArr = arr.forEach((element,index,arr)=>`index no=${index} and the value = ${element} belong to ${arr}`);
// console.log(newArr);

// ********************************************************************************************
// Challange time 1: find the  square root of each element in an array
// let array =[4,9,16,25,36,49,64,81,100,144]
// let newArray=array.map((element)=> Math.sqrt(element));
// console.log(newArray);

// ***************************************************************************************************
// finding squre of each Element in an array
// const arr = [1, 4, 9, 16, 25,30]
// let newArray=arr.map((element)=>`square of ${element} = ${element*element}`)
// console.log(newArray);

// ****************************************************************************************************
// challange time 2:multiply each element of array with 2 and return element gretter then 10
// const arr = [1, 4, 9, 16, 25, 30]
// let newArray = arr.map((Element) => Element * 2).filter((Element) => Element > 10)
// console.log(newArray);

// ****************************************************************************************************
// Reduce() Method
// The reduce() method executes a reducer function (that you provide) on each element of the array,resulting in single output value.
// The reducer function takes four arguments :
//                 accumulator
//                 current element
//                 current index
//                 Source Array
// let arr = [5, 6, 2]
// let newArray = arr.reduce((accumulator, element) => accumulator += element);
// console.log(newArray);

// *********************************************************************************************************
// Flattered in Array
// => flattered an array means to convert the 3d and 2d array into a single dimensional arrays
// let arr = [[1, 2], [3, 4], [5, 6], [7, [8, 9]]]
// console.log(arr);
// let flatArray = arr.reduce((accumulator,element)=> accumulator.concat(element))
// console.log(flatArray);




// ************************************************************************************************************
//                                                         Strings in javaScript
//*************************************************************************************************************
// javascript strings is zerpo or more characters written inside quotes.
// strings are use for storing and maniplating text
// we can use single quotes or double quotes
// string can be createdas primitives
// => from string literals or as object , using the string() constructor

// String length() method
// let myName = 'Kushwaha Bhavesh'
// console.log(myName.length);

// ----------------------------------------------------------------------------------------------------------
// Escape character
// let sentence = "\"Spiritualirty and Humanity\" Hand in Hand"
// console.log(sentence);
//or
// let sentence = '"Spiritualirty and Humanity" Hand in Hand'
// console.log(sentence);

// --------------------------------------------------------------------------------------------------------------
// Finding string in a String using IndexOf() method
// => This method returns the index of the positionof the first occurence of a specified text in a string.
// => javascript counts the postion from zero .
// const myData = "I am Kushwaha Bhavesh"
// console.log(myData.indexOf("Kushwaha"));
// console.log(myData.indexOf('Bhavesh'));

// ----------------------------------------------------------------------------------------------------------------
// lastIndexOf() Method
// =>returns the index within the calling strings objects of the last occurence of search value, or -1 is not found
// const myData = "I am Kushwaha Bhavesh"
// console.log(myData.lastIndexOf("I",5));

// -------------------------------------------------------------------------------------------------------------------
// Search() method
// the search method searches a string for a specified value and returns the position of the match
//the search method cannot take a second argument as a parameter
// const myData = "I am Kushwaha Bhavesh"
// console.log(myData.search("Bhavesh"));

// ---------------------------------------------------------------------------------------------------------------------
// Extracting String Parts
// total 3 method for extracting

// 1.slice(start,end)
// =>The slice() method extracts a part of string and return the extracted parts
//the slice() method select the element starting at the given start argument and ends at but does not include the given end argument.
// let fruits = "Apple, Banana, Mango, Grapes"
// console.log( fruits.slice(7,20));
// console.log(fruits.slice(7,-10));

//-----------------------------------------------------------------------------------------------------------
// 2.substring(start,end)
// =>Same as slice, but cannot accept the negative indexes.
// let fruits = "Apple, Banana, Mango, Grapes"
// console.log(fruits.substring(7,20));
// console.log(fruits.substring(7,-2));

// -------------------------------------------------------------------------------------------------------------
// 3.substr(start,length)
// => same as both, but the difference is that the second parameter specifies the length of the extracted part
// let fruits = "Apple, Banana, Mango, Grapes"
// console.log(fruits.substr(7,15));
// console.log(fruits.substr(-15));

//-----------------------------------------------------------------------------------------------------------------------
// Challange Time: Display only 250 Character of a string like the one used in twitter ?
// let sentence = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quas, beatae quis excepturi fugiat quae aperiam dicta illo dolorem quisquam, autem consequatur ea repellat provident! Amet ab consequuntur delectus assumenda.  Quidem quas, beatae quis excepturi fugiat quae aperiam dicta illo dolorem quisquam, autem consequatur ea repellat provident! Amet ab consequuntur delectus assumenda ?"
// console.log("Total Character:"+sentence.length+"\n");
// console.log(sentence.slice(0,249));

//-----------------------------------------------------------------------------------------------------------------------
// Replacing String Content: replace(searchFor,replaceWith)
// =>replace one value with another value
// let myData = "I am Kushwaha Bhavesh"
// console.log(myData.replace("Kushwaha","Mourya"));

//------------------------------------------------------------------------------------------------------------------------
// Challange Time: return the unicode of the last character in a string
// let Name = "KushwahaBhavesh"
// console.log(Name.charCodeAt(Name.length-1));

//------------------------------------------------------------------------------------------------------------------------
// Extracting String Character
//=> there is 3 method for extracting string Characters

// 1.CharAt(position) : charAt()
// return specified index in  a string
// let str = "I am Kushwaha Bhavesh"
// console.log(str.charAt(15));

// -------------------------------------------------------------------------------------------------------------
// 2.charCodeAt(position) : charCodeAt()
// =>it will return the unicode of the character at specified index of the string.
// The method returns a UTF-16 code(integer between 0 and 65535)
// let Name = "Kushwaha Bhavesh"
// console.log(Name.charCodeAt(3));

// ------------------------------------------------------------------------------------------------------------
// 3.property access[ ]
// ECMAScript 5(2009) allows property access[] on string
// let Name = "Kushwaha Bhavesh"
// console.log(Name[5]);

// -------------------------------------------------------------------------------------------------------------------------
// Other important methods
// toUpperCase()
// =>Convert lowercase String into uppercase
// let Name = "Kushwaha Bhavesh"
// console.log(Name.toUpperCase());

// -----------------------------------------------------------------------------------------------------------------------
// tolowercase()
// =>convert uppercase Stringto lower case string
// let Name = "KUSHWAHA BHAVESH"
// console.log(Name.toLowerCase());

//------------------------------------------------------------------------------------------------------------------------
// concat()
// => join two or more String
// let Fname = "Bhavesh"
// let Lname = "Kushwaha"
// console.log(Fname.concat(Lname));

//------------------------------------------------------------------------------------------------------------------------
// trim()
// =>remove white space from both side of string
// let Name ="   Kushwaha Bhavesh    "
// console.log(Name);
// console.log(Name.trim());

//------------------------------------------------------------------------------------------------------------------------
// String to Array Conversion : split()
// let text = "x, y, z"
// console.log(text.split(","));           //split by comma
// console.log(text.split(" "));           //split by Space
// console.log(text.split("|"));           //split on pipe



// *************************************************************************************************************************************************
// Date & Time Object
//--------------------------------------------------------------------------------------------------------------------------------------------------
// Date Method: get method
// that represent milliseconds since 1 january 1970 UTC

// Date objects: 4 ways to create date objects

// new Date()
// =>date object are created with the new Date() constructor
// let date = new Date()
// console.log(date);
//or
// console.log(new Date());

//*****PROPERTY*****
// tolocalString()
// console.log(new Date().toLocaleString());           // 12/8/2022, 12:57:53 PM

//toString()
// console.log(new Date().toString());                 //Thu Dec 08 2022 12:57:53 GMT+0530 (India Standard Time)

//------------------------------------------------------------------------------------------------------------------------
//Date.now()
//=> returns total milisecond from 1 jan 1970 till today
// console.log(Date.now());

//------------------------------------------------------------------------------------------------------------------------
// new Date(year,month,date,hour,minutes,second,millisecond)
// => js count month from 0 to 11
// let date = new Date(2021,0,18,12,12,12,0)
// console.log(date);
// console.log(date.toLocaleString());
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleDateString());
// console.log(date.toTimeString());
// console.log(date.getHours());
// console.log(date.getFullYear());
// console.log(date.getMilliseconds());
//------------------------------------------------------------------------------------------------------------------------
// new Date(millisecond)
// let date = new Date(1670510764334+2)
// console.log(date.toLocaleString());

//------------------------------------------------------------------------------------------------------------------------
// new Date(date string)
// let date = new Date("2021 09 dec")
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());


//------------------------------------------------------------------------------------------------------------------------
// Date Properties
// let date = new Date()
// console.log(date.toLocaleString());
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleDateString());
// console.log(date.getFullYear());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMonth());


//------------------------------------------------------------------------------------------------------------------------
// set individual user defined date
// let date = new Date()
// console.log(date.setDate(18));
// console.log(date.setFullYear(2022));


//------------------------------------------------------------------------------------------------------------------------
// Time Method: Get Method
// let time = new Date()
// console.log(time.getHours());
// console.log(time.getMinutes());
// console.log(time.getSeconds());
// console.log(time.getMilliseconds());
// console.log(time.getTime());

//------------------------------------------------------------------------------------------------------------------------
// Set time
// => set user defined time
// let time = new Date()
// console.log(time.setTime());
// console.log(time.setHours(5));
// console.log(time.setMinutes(5));
// console.log(time.setSeconds(5));
// console.log(time.setMilliseconds(10201020102010));

//------------------------------------------------------------------------------------------------------------------------
// to getting date or time only
// only Date
// console.log(new Date().toLocaleDateString());

// only time
// console.log(new Date().toLocaleTimeString());

// ------------------------------------------------------------------------------------------------------------------------
// function date() {
//        let newDate = new Date()
//        let settime = newDate.setHours(15)
//        document.getElementById("demo").innerHTML = newDate
// }



//*****************************************************************************************************************************************************************************
//                                                                Math object in javascript
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// the javascript math object allows you to perform mathematical tasks on numbers

// PI
// console.log(Math.PI);

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Round()
// => return the value of X rounded to its nearest interger
// console.log(Math.round(10.6));

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// pow()
// =>return the value of X to the power of Y
// console.log(Math.pow(9,5))

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// sqrt()
// => return square root of value
// console.log(Math.sqrt(9));

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// abs()
// => return absolute value of numbers
// console.log(Math.abs(-10.6));

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// celi()
// => return the value of X rounded up to its nearest interger
// console.log(Math.ceil(99.1));

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// floor()
// => return the value of X rounded down to its nearest interger
// console.log(Math.floor(99.6));

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Min and Max
// => return minimum or maximum vlaue from numbers
// console.log(Math.min(15,2,0,18,10));
// console.log(Math.max(15,2,0,18,10));

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Importnt : Random()
// => return random value
// console.log(Math.floor(Math.random()*1000));

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// trunc
// => return the interger part of a numbers
// console.log(Math.trunc(4.6));



//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                         BOM : Browser object model
// ************************************************************************************************************************************************************************************************
// Project : 1 "History of last visited page"
//History object

// back()
// function goback(){
//        window.history.back();
// }


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// location()
// =>used to visit on given location
// function visit() {
//     alert(location.href);
//     if(confirm("want to visit google.com")){
//         location.href="https://www.google.com"
//     }
// }
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                         DOM : Document object model
// ************************************************************************************************************************************************************************************************
// document.documentElement
// return the Element of the root element of the document
//root node : Html

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// document.body.childNodes
// document.body.children
// document.body.children.length

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// parents has any childnode or not
// document.body.hasChildNodes
// => return in boolean

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// QuerySelector()
// document.querySelector(".className")
// document.querySelectorAll('.counter')
// document.getElementById('#id')

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// To finding parentnode
// document.body.parentNode

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// to finding sibling of nodes
// document.body.nextSibling
// document.body.previousSibling
// document.body.previousElementSibling
// document.body.nextElementSibling

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Searching : How to search Element and the reference
// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByName()
// document.getElementsByTagName()



// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                              Events in javascript
// ************************************************************************************************************************************************************************************************
// 4 way of writing Events in javascript
// 1.using alert()
// =><button onclick="alert('who are you ...?')">first way</button>

// 2.by calling is the parent object of the event object
// => const callingfunction=()=>{
//         alert("most comman way of writing function")
//     }

// 3.using inline event
// const thirdway = document.getElementById('thirdway')
// thirdway.onclick=function(){
//     alert("third way of writing function")
// }

// 4.using event listener
// const fourthway = document.querySelector('#fourthway')
// fourthway.addEventListener('click', () => {
//     alert("Forth way of writing ")
// })


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// what is event object
// => event object is the parent object of the event object
// =>MouseEvent,FocusEvent,KeyboardEvent
// event
// event.target
// event.type
// event.key
// event.code

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Mouse Event
// =>those event which is related with your mouse
// MouseEvent object
// 1.mouseDown
// => onmousedown="mouseDown()"
// const mouseDown = () => {
//     document.getElementById('mouse').style.color="red"
// }

// 2.mouseUp
// onmouseup="mouseUp()"
// const mouseUp =()=>{
//     document.getElementById('mouse').style.color="blue"
// }

// 3.mouseEnter
// onmouseenter="mouseenter()"
// const mouseenter =()=>{
//     document.getElementById('mouse').style.color="white"
// }

// 4.mouseLeave
// onmouseleave="mouseleave()"
// const mouseleave =()=>{
//     document.getElementById('mouse').style.color="green"
// }

// 5.mouseOver
// onmouseover="mouseover()"
// const mouseover =()=>{
//     document.getElementById('mouse').style.color="purple"
// }

// MouseEventListener
// 1.mouseEnter
// const mouseEvent = document.getElementById('h1')
// mouseEvent.addEventListener('mouseenter',()=>{
//     mouseEvent.style.backgroundColor="red"
//     console.log('mouseEntered');
// })

// 2.mouseLeave
// mouseEvent.addEventListener('mouseleave',()=>{
//     mouseEvent.style.backgroundColor="pink"
//     console.log("MouseLeaved");
// })



// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Keyboard Event
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// =>event that occur when user presses a key on the Keyboard
// onkeypress="keyPress()"
// const keyPress = () => {
//     document.getElementById('key').innerHTML = `key: ${event.key} and code: ${event.code}`
// }

// onkeydown="keyDown()"
// const keyDown=()=>{
//     document.getElementById('key').innerHTML=`key is Down`
// }

// onkeyup="keyUp()"
// const keyUp=()=>{
//     document.getElementById('key').innerHTML=`key is up`
// }


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Input Event
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// onchange="selectElement()"
// const selectElement = () => {
//     const change = document.getElementById('ice').value
//     const iceCream = document.getElementById('iceCream').value

//     console.log(`${change} and ${iceCream}`);
//     const result = document.getElementById('result')
//     const myResult = result.innerHTML = `MR. ${change} is selected ${iceCream} ice `
// }


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// timing based Event
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// setTimeout(function,millisecond)
// clearTimeout()
// setInterval(function,millisecond)
// clearInterval()



// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                                    oops in javascript
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// what is object literal...?
// =>object literal is simply a key:value pair data structure
// =>storing variables and function together in one container
// =>we can refer this as an object

// 1st way 
// let bioData = {
//     name: "Kushwaha Bhavesh",
//     age: 21,
//     getData: () => {
//         console.log(`my Name is ${bioData.name} and age is ${bioData.age}`)
//     }
// }
// console.log(bioData.getData());

// 2nd way
// let bioData = {
//     name: "Kushwaha Bhavesh",
//     age: 20,
//     getData(){
//         console.log(`my Name is ${bioData.name} and age is ${bioData.age}`)
//     }
// }
// console.log(bioData.getData());


// how we can write object inside an object
// let data = {
//     name: {
//         firstName: "Bhvaesh",
//         lastName: "Kushwaha",
//     },
//     age: 20,
//     study:{
//         school: "shantanuvidhyalaya",
//         diploma:"SDCDE",
//         degree:"GECR"
//     },
//     address:{
//         roomNo:22,
//         society:"RaghuvirNagar1",
//         village:"Andada",
//         city:"Ankleshwar",
//         district:"Bharuch",
//     },
// }
// console.log(data.address.city);


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// This object
// => refer to current context

example: 1
// console.log(this);

example: 2
// function exa(){
//     console.log(this);
// }
// exa()

example: 3
// var name = "Bhavesh Kushwaha"
// function myName() {
//     console.log(this.name);
// }
// myName()

Example: 4
// const obj={
//     myAge:20,
//     name(){
//         console.log(this.myAge);
//     }
// }
// obj.name()

example: 5
// this can not work with arrow function
// const obj = {
//     myAge: 20,
//     name: () => {
//         console.log(this.myAge);
//     }
// }
// obj.name()

example: 6
// let myData = {
//     myName: {
//         realName: "Kushwaha Bhavesh",
//     },
//     age: 20,
//     getData() {
//         console.log(`myName is ${this.myName.realName} and my AGE :${this.age}`);
//     }
// }
// myData.getData()


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                           Destructuring in ES6
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ARRAY DESTRUCTURING
// let myData =["Kushwaha",'Bhavesh','20']
// var firstName=myData[0]
// var age=myData[2]

// console.log(age);

// instead of this method we can apply array destructuring
// let myData =["Kushwaha",'Bhavesh','20']
// let [lastName,firstName,age]=myData
// console.log(lastName,firstName,age);

// we can add new data and value in array
// let myData =["Kushwaha",'Bhavesh','20']
// let [lastName,firstName,age,address="ankleshwar"]=myData

// console.log(address);
// console.log(myData);

//OBJECT DESTRUCTURING

// let myData ={
//     Fname:"Bhavesh",
//     Lname:"Kushwaha",
//     age:20
// }

// console.log(myData);
// console.log(myData.age);

//------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                  object property
//------------------------------------------------------------------------------------------------------------------------------------------------------
// Dynamic key of object
// to getting dynamic key of variable : just use [] in data object
// let fullname = "BhaveshKushwaha"
// let myData = {
//     [fullname]: "BhaveshKushwaha",
//     Fname: "Bhavesh",
//     Lname: "Kushwaha",
//     age: [10+10]
// }
// console.log(myData);

//------------------------------------------------------------------------------------------------------------------------------------------------------
// Spread operator(...)
// let color =['green','white','black','gold','silver','pink','orange']
// let myColor =['red','blue','green']
// 
// let myfav=[...color,'red','blue','yellow']
// console.log(myfav);

//------------------------------------------------------------------------------------------------------------------------------------------------------
ES7: features: 2016
//------------------------------------------------------------------------------------------------------------------------------------------------------
// include()
// => identify the search value is found or not
// let color =['green','white','black','gold','silver','pink','orange']
// let present =color.includes("yellow")
// console.log(color,"\n",present);

// ** 
// => exponention operator
// console.log(3**3);

//------------------------------------------------------------------------------------------------------------------------------------------------------
ES8: features: 2017
//------------------------------------------------------------------------------------------------------------------------------------------------------
// string padding
// let myname = "Bhavesh Kushwaha".padStart(25).padEnd(30)
// console.log(myname);

// object.values()
// let color ={
//     r:'red',
//     g:'green',
//     b:'blue',
//     w:'white'
// }
// console.log(Object.values(color));

// object.entries()
// console.log(Object.entries(color));

//------------------------------------------------------------------------------------------------------------------------------------------------------
ES9: features: 2018
//------------------------------------------------------------------------------------------------------------------------------------------------------
// spread operator (...)
// =>we can use it with object in new update
// let color = {
//     r: 'red',
//     g: 'green',
//     b: 'blue',
//     w: 'white'
// }

// let newcolor = {
//     ...color
// }

// console.log(color);
// console.log(newcolor);

//------------------------------------------------------------------------------------------------------------------------------------------------------
ES10: features: 2019
//------------------------------------------------------------------------------------------------------------------------------------------------------
// flat method()
// convert multidimensional array into single dimensional array
// let arr = [[1, 2], [3, 4], [5, 6], [7, [8, [5, 6], 9]]]
// console.log(arr.flat(Infinity));
// console.log(arr.flat(1));
// console.log(arr.flat(5));

//------------------------------------------------------------------------------------------------------------------------------------------------------
// object.fromEntries()
// object.entries() =>convert object to array , object.fromEntries() =>convert array to object

//------------------------------------------------------------------------------------------------------------------------------------------------------
ES11: features: 2020
//------------------------------------------------------------------------------------------------------------------------------------------------------
// #1 BigInt
// let newNum=Number.MAX_SAFE_INTEGER;
// console.log( newNum);
// let xnum=9007199254740991n+12n
// console.log(typeof xnum);
//-----------------------------------------------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                           ADVANCE JAVASCRIPT
//------------------------------------------------------------------------------------------------------------------------------------------------------
// Event Propogation
// =>the event propogation mode determines in which order the element received the event
// default : bubbling
// bubbling: top to bottom
// capturing :bottom to top
// find image in codesnap

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Higher order function
// call back function

//------------------------------------------------------------------------------------------------------------------------------------------------------
//                                                              AJ: Asynchronous javascript
//------------------------------------------------------------------------------------------------------------------------------------------------------
// Closures
// => a closure is the combination of a function bundled together (enclosed) with reference to its surrounding state (the lexical environment)
// => closure gives you access to an outerfunction scope from an inner function
// => closure are created at every function creation time

// const outerfun = (a) => {
//     let b = 10;
//     const innerfun = () => {
//         let sum = a + b
//         console.log(`the sum of two number is ${sum}`);
//     }
//     innerfun()
// }
// outerfun(5)

// it is like lexical scoping

// const outerfun = (a) => {
//     let b = 10;
//     const innerfun = () => {
//         let sum = a + b
//         console.log(`the sum of two number is ${sum}`);
//     }
//     return innerfun
// }
// let closure = outerfun(5)
// console.log(closure);
// console.log(closure());
// console.dir(closure)

//--------------------------------------------------------------------------------------------------------------------------------
// Difference between synchronous and Asynchronous javascript
// 1.synchronous JS
// => execution of steps are done steps by steps (one by one)
// const fun1=()=>{
//     console.log("fun1 is called");
// }
// const fun2=()=>{
//     console.log("fun2 is called");
//     fun1()
//     console.log("fun2 is called again");
// }
// fun2()

// 2.Asynchronous JS
// => execution of steps are done in parallel
// const fun1=()=>{
//     setTimeout(()=>{
//         console.log('function 1 is called');
//     },2000)
// }
// const fun2=()=>{
//     console.log("function 2 is called");
//     fun1()
//     console.log("function 2 is called again");
// }
// fun2()

// -----------------------------------------------------------------------------------------------------------------------------------------------------
//                                                                           Function Curring
// -----------------------------------------------------------------------------------------------------------------------------------------------------
// =>curring is a technique  of evaluating function with multiple arguments into sequence of function with single argumnet
// finding total sum(5)(3)(8)
// function sum(num1){
//     console.log(num1);
//     return function(num2){
//         console.log(num1,num2);
//         return function(num3){
//             console.log(num1,num2,num3);
//         }
//     }
// }
// sum(5)(3)(8)

// we can write this code in single line
// const sum=(num1)=>(num2)=>(num3)=>console.log(num1+num2+num3)
// sum(5)(3)(8)

// -----------------------------------------------------------------------------------------------------------------------------------------------------
// CallBack Hell
// setTimeout(() => {
//     console.log("A");
//     setTimeout(() => {
//         console.log("B");
//         setTimeout(() => {
//             console.log("C");
//             setTimeout(() => {
//                 console.log("D");
//                 setTimeout(() => {
//                     console.log("E");
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

// -----------------------------------------------------------------------------------------------------------------------------------------------------
// JSON : Javascript Object Notation
// stringify : it turns javascript object into JSON text
var myobject = { key1: "text", key2: true, key3: 10 }
console.log(JSON.stringify(myobject));
// console.log(myjson);

// output: {"key1":"text","key2":true,"key3":10}

// => JSON to object: we need parse method
// var mynewobject = JSON.parse(myjson)
// console.log(mynewobject);

// output:{ key1: 'text', key2: true, key3: 10 }

// -----------------------------------------------------------------------------------------------------------------------------------------------------
// Promise
// 2 condition : succ or fail
// fetch()
// =>provide way to fetch api without using xmlhttprequest
// const generatejokes = () => {
//     const setheader = {
//         headers: {
//             Accept: "application/json"
//         }
//     }
//     fetch('https://icanhazdadjoke.com', setheader)
//         .then((res) =>
//             res.json()
//         ).then((data) =>
//             joke.innerHTML = data.joke
//         ).catch((error) => {
//             console.log(error);
//         })
// }
// jokebtn.addEventListener('click', generatejokes)
// generatejokes()

// -----------------------------------------------------------------------------------------------------------------------------------------------------
// async Wait
// async await
//  const generatejoke = async () => {
//     try {
//         const setheader = {
//             headers: {
//                 Accept: "application/json"
//             }
//         }
//         const res = await fetch("https://icanhazdadjoke.com", setheader)
//         const data = await res.json()
//         joke.innerHTML = data.joke
//     } catch (error) {
//         console.log(`error ${error}`);
//     }
// }
// jokebtn.addEventListener('click', generatejoke)
// generatejoke()

// -----------------------------------------------------------------------------------------------------------------------------------------------------
