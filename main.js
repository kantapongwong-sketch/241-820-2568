/*/////// String, Number, Boolean, Object, Array


// String
let firstName = "John Doe";
const idcar='AB123CD';
// Number
let age = 30;
let height = 5.9;

// Boolean
let isStudent = false;

firstName = 'test';
console.log('my name is', firstName ,'and I am', age, 'years old.');
 
+
-
* คูณ
/ หาร
% หารเอาเศษ */
////////////////////////////////////////////////////////////////
/*
let Number1 = 'cc';
let Number2 = 'aaa';

let result = Number1 + Number2;
console.log("ผลบวก =", result);
*/
//////////////////////////////////////////////////////////////////
//conditional statements//
// if else if else
/*
== เท่ากับ
+= "ไม่เท่ากับ
> มากกว่า
< น้อยกว่า
>= มากกว่าหรือเท่ากับ   
*/
/*
let  Number1 = 10;
let  Number2 = 20;

let conditional = Number1 > Number2;
console.log("result of condition is:", conditional);
*/

//////////////////////////////////////////////////////////////////
//  if - else  
    /*
let  Number1 = 10;
let  Number2 = 20;

if (Number1 != Number2) {
    console.log('this if');
} else if (Number1 == Number2) {
    console.log('this else if');
} else {
    console.log('this else');
}
*/
/*
Grade 
>= 80 A
>= 70 B
>= 60 C
>= 50 D
< 50 F
*/
/*
let score = prompt('ป้อนคะแนนของคุณ:');
console.log('คะแนนของคุณ'+ score);

if (score >=80){ 
    console.log('เกรด A'); // false
}else if (score >=70){
    console.log('เกรด B'); // false
}else if (score >=60){
    console.log('เกรด C');// false
}else if (score >=50){
    console.log('เกรด D');// false
}else {
    console.log('เกรด F');// true
}
    *///////////////////////////////////////////////////////////////
/*
&& และ
|| หรือ
! ไม่ใช่
*/
/*
let  Number1 = 5
let  Number2 = 10
// true && true = true
let condition =! ( Number1 >= 3 || Number2 > 10 );
console.log("condition:", condition);

let age = 20;
let grade = "ชาย";

if (age >= 20 && grade == "ชาย") {
    console.log("คุณเป็นผู้ชายที่มีอายุ 20 ปีขึ้นไป");
}   else {
    console.log("คุณไม่ใช่ผู้ชายที่มีอายุ 20 ปีขึ้นไป");
}
    *///////////////////////////////////////////////////////////////
/*
    let Number = 20;

    if (Number % 2 == 0) {
        console.log("เป็นเลขคู่");
    }   else {                              
        console.log("เป็นเลขคี่");
    }
        *///////////////////////////////////////////////////////////////
/*
loop statements:
while 
for
*/

let coounter = -5;
while (coounter < 10) {
    console.log('Hello world');
    coounter= coounter + 1;             
}
for (let i=-10; i<10; i++){
    console.log('Hello for loop',i);
}for (let i=0; i<10; i++){
    console.log('555555',i);
}