                                           /* Assignment 1:- */


/* Problem-1:
Train A starts from city A and travels towards city B.At the same time, train B starts from city B and it 
travels towards city A, on the same railway track.At the same time, a bird starts from city A and it 
flies towards city B over the same railway track.Train A runs at a constant speed of 50 km/hr Train B 
runs at a constant speed of 70 km/hr and the bird flies at a constant speed of 100 km/hr.The two 
cities are 100 km apart.Train A, train B and the bird start exactly at the same time.When the bird 
reaches train B, it immediately reverses it's direction and flies back towards train A.When it reaches 
train A, it again reverses it's direction and flies towards train B. the bird keeps on flying back and 
forth between the two trains until the two trains collide with each other.What is the distance 
travelled by the bird before the collision of trains.

Solution:-

• With respect to Train A, train B’s velocity is (70+50) = 120 km/hr. Thus, the time taken by 
Train B to collide with Train A will be :
 (100 km) / (120 km/hr) = 5/6 hr = 50 min 
• Now, since the velocity of the bird is 100 km/hr, the distance travelled by the bird in this time 
interval will be
 100 km/hr * 5/6 hr = 83.333 
 
Problem-2:
There is a room, with just one door which is closed and you cannot see inside the room....the room 
has no windows. Inside the room, there is one bulb.Outside the room, there is a panel with three (3) 
on/off switches. But Only one switch operates the bulb.You are allowed to flip the switches on and off 
as many times as you want before you open the door.You can enter the room only once to check the 
bulb. Once you open door, you can no longer touch the switches.... and you have to say which switch 
is the right one. Puzzle: How do you tell which switch operates the bulb?

Solution:-

• Flip switch number 1 and wait a few minutes. 
• Flip switch number 1 back to its original position, and then immediately flip switch number 2.
• Open the door. If the light is on, then switch number 2 controls it. If the light is off, then go 
and feel the bulb with your hand. If the bulb is hot, then switch number 1 controls it, and if 
the bulb is cold, then switch number 3, the one you did not touch, controls it.

Problem-3:
You have two ropes and a lighter. Each rope burns in 60 minutes, but the ropes do not burn at a 
constant rate. How can you measure 45 minutes by burning the ropes?

Solution:-

• Light one of the ropes on fire on both ends and light the second rope on one end at the same 
time.
• When the first rope burns out, 30 minutes have elapsed. At that exact moment, you light the 
unlit end of the second rope.
• Because 30 minutes of the second rope have already been used up, 30 more remain
• Lighting the other end at the moment the first rope burns up will cause the remaining part of 
the second rope to burn up in 15 minutes. Once the second rope has been consumed by the 
flames, exactly 45 minutes have passed.

Problem-4:

A fox , a duck, and a sack of rice is there on one side of the river. A farmer has to take all of them to 
the other side. He has one boat and he can take only one thing at a time. If he can make unlimited 
trips , how will he take all of them to the other side. If the fox and duck are together, the fox eats 
duck. If the duck and the sack of rice is together, duck eats sack of rice.

Solution:-

• The farmer and the duck cross the river, (the fox and rice are safe together), he 
leaves the duck on the other side and goes back across.
• The man then takes the fox across the river, and since he can't leave the fox and 
duck together, he brings the duck back.
• Again, since the duck and rice can't be left together, he leaves the duck and he 
takes the rice across and leaves it with the fox.
• He then returns to pick up the duck and heads across the river one last time. */


                                              /* Assignment 2:- */

/* Snippet 01:-*/
let a = 23;
a = a + 34; 
console.log(a);

/* Soln:-  57*/

/* Snippet 02:- */

let s;
s = 4;
console.log(s);

Soln:-
4

/* Snippet 03:- */

const a;
a = 4;
console.log(a);

Soln:-
4

/* Snippet 04:- */

hint: check operator precedence in js mdn
console.log( 4 + 4 * 7);

/* Soln:-
32 */

/* Snippet 05:- */

const a = '';
console.log(!a);
Soln:-
False

/* Snippet 06:- */

console.log( 'a' === 'a');
console.log( 6 === 6 );
console.log( 0 == false);
Special cases . Find why
console.log( [3,3,3] == [3,3,3]);
console.log({ hello: 'world' } === { hello: 'world' })

/* Soln:-
• True
• True
• True
• False
Since javascript compares array by identity, not value. Each array is distinct.
• False
Since javascript compares object by identity, not value. Each object is distinct. */

/* Snippet 07:-
Create an object with keys -> [personId, name, username, email, password ] and values -> [ 
'p_345kk234@df', 'mathan', 'mathanman', 'manmathan@gmail.com', 'test***test'] respectively.

Soln:- */

Mathan{
personId = 'p_345kk234@df';
name = 'mathan';
username = 'mathanman';
email = 'manmathan@gmail.com';
password = 'test***test';
}

/* Snippet 08:- */

const a = 3; 
const b = 3;
console.log(a>3 || b<+2)

/* Soln:-
True  */

                                             /* Assignment 3:- */

/* 1. odd  */

for (i=0;i<=100;i++){
 if(i%2 !=0){
 console.log(i)
 }
} odd

/* 2. even sum */

for (i=0;i<=100;i++){
 if(i%2==0){
 console.log(i)
 }
} 

/* 3. even and odd sum */

for (i=0;i<=100;i++){
 if(i%2==0){
 console.log(i + "is even")
 }else{
 console.log(i + "is odd")
 }
} 

/* 4. fizz buzz sum */

for (i=0;i<=100;i++){
 if ((i%3==0) && (i%5==0)){
 console.log(i + " fizzbuzz")
 }else if(i%3==0){
 console.log(i + " fizz")
 }else if (i%5==0){
 console.log(i + " Buzz")
 }
} 

/* 5. tables */

let i = 2;
for(j=0;j<=10;j++){
 console.log("2*" + j + " = " + i*j);
} 

/* 6. 15 tables */

let i = 15;
for(j=0;j<=10;j++){
 console.log("15*" + j + " = " + i*j);
}

/* 7. patter 1 */

for (i=0;i<=4;i++){
 console.log("*")
} 

/* 8. triangle pattern  */

let r = 5;
let str = ""
for (i=1;i<=r;i++){
 for(j=0;j<i;j++){
 str+= "*"
 }
 str+= "\n"
}
console.log(str) 

/* 9. sum of natural numbers  */

let sum = 0;
for (i=1;i<=10;i++){
 sum += i
}
console.log(sum) 

/* 10 pattern 123 */

let r = 5;
let str = ""
for (i=1;i<=r;i++){
 for(j=0;j<i;j++)
 {
 str+=i
 }
 str+="\n"
}
console.log(str) 

/* 11.11111 pattern */
let r = 6;
let str = ""
for (i=0;i<=r;i++){
 for(j=1;j<i;j++)
 {
 str+= j 
 }
 str+="\n"
}
console.log(str) 

/* 12. 5 star */

str =""
for(i=0;i<5;i++){
 str += "*"
}
console.log(str) 

/* 13. power sum */

let number = 2;
let exponent = 3;
console. log( number ** exponent);

/* 14. 10 pattern sum */

let r = 5;
let str = ""
for (i=0;i<=r;i++){
 for(j=0;j<i;j++)
 {
 let k = j;
 str+= k % 2 
 }
 str+="\n"
}
console.log(str)

                                                      /* Assignment 4:- */ 
                                                
/* 1. Hollow box: */

let n = 5; 
let str = "";
for(let i = 0; i < n; i++) { 
 for(let j = 0; j < n; j++) { 
 if(i === 0 || i === n - 1) {
 str += "*";
 }
 else {
 if(j === 0 || j === n - 1) {
 str+= "*";
 }
 else {
 str+= " ";
 }
 }
 }
 str += "\n";
}console.log(str); 

/* 2. Hollow left angle triangle: */

let n = 5; 
let str = "";
for(let i = 0; i <= n; i++) { 
 for(let j = 0; j < i; j++) { 
 if (i===n){
 str += "*"
 }
 else if(j ===0 || j === i-1){
 str += "*"
 }
 else{
 str += " "
 }
 }
 str += "\n" 
}
console.log(str); 

/* 3.Triangle */

let n = 5; 
let str = "";
for(let i = 1; i <= n; i++) { 
 for(let j = 1; j <= n-i; j++) { 
 str += " "
 }for(k = 0 ; k< 2*i-1;k++){
 str += "*"
 }
 str += "\n" 
}
console.log(str); 

/* 4.Star diamond */

let n = 5;
let str = "";
for (let i = 1; i <= n; i++) {
 for (let j = n; j > i; j--) {
 str += " ";
 }
 for (let k = 0; k < i * 2 - 1; k++) {
 str += "*";
 }
 str += "\n";
}
for (let i = 1; i <= n - 1; i++) {
for (let j = 0; j < i; j++) {
 str += " ";
 }
 for (let k = (n - i) * 2 - 1; k > 0; k--) {
 str +="*";
 }
 str += "\n";
}
console.log(str);

/* 5. hour clock  */

let n = 4;
let str = "";
for (let i = 0; i < n; i++) {
 for (let j = 0; j < i; j++) {
 str += " ";
 }
 for (let k = 0; k < (n - i) * 2 - 1; k++) {
 str += "*";
 }
 str += "\n";
}
for (let i = 2; i <= n; i++) {
 for (let j = n; j > i; j--) {
 str += " ";
 }
 for (let k = 0; k < i * 2 - 1; k++) {
 str += "*";
 }
 str += "\n";
}
console.log(str); 

/* 6.Hollow inverted triangle */

let n = 5; 
let str = "";
for(let i = 1; i <= n; i++) { 
 for(let j = 1; j <i; j++) { 
 str += " "
 }for(k = 1 ; k<=(n * 2 - (2 * i - 1));k++){
 
 if (i == 1 || k == 1 || k == (n * 2 - (2 * i - 1))) {
 str +="*";
 } else {
 str+= " "
 }
 
 }
 str += "\n" 
}
console.log(str);   

/* Pascals triangle */

const pascalTriangle = n => {
    const arr = []
    
    for (let i = 0; i < n; i++) {
        const row = [1]
        
        for (let j = 1; j < i; j++) {
            row.push(arr[i-1][j-1] + arr[i-1][j])
        }
        
        if( i > 0 ) row.push(1)
        
        arr.push(row)
    }
    
    return arr
}

console.log(pascalTriangle(6))


                                                  /* Assignment 5:- */ 

 /* 1.Check Vowels */
function countVowel(str) { 
 const count = str.match(/[aeiou]/gi).length;
 return count;
}
const string = "Hi this is harish"
const result = countVowel(string);
console.log(result)

/* 2.Reverse Number */

function reverse(num){
 reversed = num.reverse()
 return reversed;
}
console.log(reverse([1,2,3,4,5,6,7,8,9,10]))

/* 3.Celsius to F */

function cToF(celsius){
const f = (celsius * 1.8) + 32
return f;
}
console.log(cToF(40))

/* 4.Palindrome sum */

function palindrome(string) {
 const arrayValues = string.split('');
 const reverseArrayValues = arrayValues.reverse();
 const reverseString = reverseArrayValues.join('');
 if(string == reverseString) {
 console.log('It is a palindrome');
 }
 else {
 console.log('It is not a palindrome');
 }
}
const string = "madam"
palindrome(string);

/* 5.Factorial sum  */

function factorial(n){
 
 if(n == 0 || n == 1){
 return 1;
 }else{
 return n * factorial(n-1);
 }
}
let n = 6;
answer = factorial(n)
console.log( answer);

/* 6. Occurance of Letter: */

function countString(str, letter) {
 let count = 0;
 for (let i = 0; i < str.length; i++) {
 if (str.charAt(i) == letter) {
 count += 1;
 }
 }
 return count;
}
let string = 'harish'
let letterToCheck = 'h'
const result = countString(string, letterToCheck);
console.log(result)

/*7.Prime or not */

function prime(n)
{
 if (n===1)
 {
 return false;
 }
 else if(n === 2)
 {
 return true;
 }else
 {
 for(var x = 2; x < n; x++)
 {
 if(n % x === 0)
 {
 return false;
 }
 }
 return true; 
 }
}
console.log(prime(2))        

                                                      /* Assignment 6:- */ 

 /* 1. */

let hobbies = ['football','travelling','eating'];
console.log(hobbies.map(hobbies => hobbies.length));

/* 2. */

let library = [ 
{
author: 'Bill Gates',
title: 'The Road Ahead',
readingStatus: true
},
{
author: 'Steve Jobs',
title: 'Walter Isaacson',
readingStatus: true
},
{
author: 'Suzanne Collins',
title: 'Mockingjay: The Final Book of The Hunger Games', 
readingStatus: false
}];
const result = library.map(item => console.log(`Title: ${item.title}, Reading Status: 
${item.readingStatus}`));

/* 3. */

const str = 'dog';
console.log(str.substring(0));
console.log(str.substring(0,1));
console.log(str.substring(1,2));
console.log(str.substring(2,3));
console.log(str.substring(0,2));
console.log(str.substring(1,3));
console.log(str.substring(0));

/* 4. */

var library = [ 
{
title: 'The Road Ahead',
author: 'Bill Gates',
libraryID: 1254
},
{
title: 'Walter Isaacson',
author: 'Steve Jobs',
libraryID: 4264
},
{
title: 'Mockingjay: The Final Book of The Hunger Games',
author: 'Suzanne Collins',
libraryID: 3245
}];
function sortPrblm(a,b) 
{
 if (a.title < b.title)
 return -1;
 else if (a.title > b.title)
 return 1;
 return 0;
}
console.log(library.sort(sortPrblm));

/* 5. */

let person = { 
 name: 'harish',
 age: 20,
};
let count = 0;
for(let key in person) {
 ++count;
}
console.log(count);                                                   