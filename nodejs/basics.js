console.log('Hellooo');
const pi = 3.1444;
var num1 = 20;
var num2 = 20.50;
var txt ="Hello SE";
var arry = Array ("SE","IT","CS");
var obj = {"fname":"Khemjira","lname":"Sirikeasaechon"};

console.log('pi :'+ pi);
console.log('num1 :'+ num1);
console.log('num2 :'+ num2);
console.log('txt :'+ txt);
console.log('arry :'+ arry);
console.log(obj);

arry.forEach (function (element) {
    console.log(element);
});
arry.forEach (function (element,index) {
    console.log('arry['+index+']:',element);
});
