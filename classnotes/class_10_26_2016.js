/*
do while - does something and then checks
while - checks first and then decides to run or not
switch - a break can make code efficient - performant code
function - block of code  - declared or expressed - code inside code block works together to accomplish something
functional expressions dont have names usually

math.floor - returns largest inter <= number being presented
math.floor
 */

/*
function example(){
    console.log("x + y");
}
var x = function() {
    console.log("I still need that drink")
}
x();
*/

/* math.random
console.log(Math.floor(Math.random() * (200 - 100 + 1) + 100));
*/
/* Paramaters Vs. Arguments
function boom(name){
    console.log("%s says 'boom goes the dynamite'",name);
}
boom("aaron");
*/
// global vs. local scope
//closure - what they are and how to use them

//value you need to keep - global opens you up to failure if its global someone can change the number and you
// screwed - start local and then go global
/*
var y = 12;
function boom(name){
    x=3;
    console.log("%s says boom goes the dynamite %d",name, y);
}
boom("some guy");
*/
//write functions that will detect all the prime numbers between 1 and 1000
//a number only divisble by 1 and itself.
/*function primeNumber(){
    for (i = 1; i < 1001; i++) {
        console.log(i)
    }

}
primeNumber();
*/
// how to do prime numbers
/*
function checkPrimesInRange(max){
    for(var i = 1; i < max; i++){
        if(primed(i)){
            console.log(i)
        }
    }
}
function primed (val){
    for (var j = 2; j < val; j++){
        if(val % j == 0){
            return false;
        }
    }
    return true;
}
checkPrimesInRange(1000);
*/

