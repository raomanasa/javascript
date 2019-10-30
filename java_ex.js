let newNumber =[]
undefined
let newArray=[]
undefined
newArray[0]=1
1
newArray[1]=2
2
newArray[2]=3
3
newArray[3]
undefined
newArray[2]
3
123/12
10.25
123/12==Infinity
false
123/12==isFinite
false
isFinite(123/12)==true
true
"Things in quotes"
"Things in quotes"
let string = "Things in quotes"
undefined
let string = "Things in quotes";
VM632:1 Uncaught SyntaxError: Identifier 'string' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM632:1
let string = "Things in numbers";
VM650:1 Uncaught SyntaxError: Identifier 'string' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM650:1
string_2="Things in variables";
"Things in variables"
type of(a)="underdefined"
VM811:1 Uncaught SyntaxError: Unexpected identifier
typeof(x)="underdefined"
VM873:1 Uncaught SyntaxError: Invalid left-hand side in assignment
typeof(x)=="underdefined"
false
if myName="Manasa"
VM999:1 Uncaught SyntaxError: Unexpected identifier
let my name="Manasa"
VM1049:1 Uncaught SyntaxError: Unexpected identifier
let myName ="Manasa"
undefined
myName=="Suraj"
false
myNmae=="Manasa"
VM1314:1 Uncaught ReferenceError: myNmae is not defined
    at <anonymous>:1:1
(anonymous) @ VM1314:1
myName=="Manasa"
true
let myArray=['Thomas','Noel','Faraz']
undefined
let emptyArray=[]
undefined
for (let i=0; i<=2;i++){
    emptyArray[i]=myArray[i] 
VM1815:2 Uncaught SyntaxError: Unexpected end of input
for (let i=0; i<=2;i++){
    emptyArray[i]=myArray[i] ;
}
"Faraz"
emptyArray[1]
"Noel"
for (let i=0; i<=2;i++){
    emptyArray[i]=myArray[i] ;
}
"Faraz"
emptyArray[0]
"Thomas"
emptyArray[1]
"Noel"
emptyArray[2]
"Faraz"
console.log(emptyArray[0])
VM2360:1 Thomas
undefined
console.log(emptyArray[i])
VM2373:1 Uncaught ReferenceError: i is not defined
    at <anonymous>:1:24
(anonymous) @ VM2373:1
console.log(emptyArray(i))
VM2393:1 Uncaught ReferenceError: i is not defined
    at <anonymous>:1:24
(anonymous) @ VM2393:1
console.log(emptyArray[1])
VM2446:1 Noel
undefined
console.log(emptyArray[2])
VM2458:1 Faraz
undefined
for (let i=0; i<=2;i++){
    console.log(emtyArray[i];
}
VM2574:2 Uncaught SyntaxError: missing ) after argument list
for (let i=0; i<=2;i++){
    console.log(emtyArray[i]);
}
VM2583:2 Uncaught ReferenceError: emtyArray is not defined
    at <anonymous>:2:17
(anonymous) @ VM2583:2
for (let i=0; i<=2;i++){
    console.log(emptyArray[i]);
}
VM2607:2 Thomas
VM2607:2 Noel
VM2607:2 Faraz
undefined
for (let i=1; i<=2;i++){
    console.log(emptyArray[i]);
}
VM2614:2 Noel
VM2614:2 Faraz
undefined
let newNumber =[]
VM2690:1 Uncaught SyntaxError: Identifier 'newNumber' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM2690:1
let na=[]
undefined
for (let i=0; i<=10;i++){
 na[i]= i;
=}
VM2812:3 Uncaught SyntaxError: Unexpected token '='
for (let i=0; i<=10;i++){
 na[i]= i;
}
10
console.log[i];
VM2921:1 Uncaught ReferenceError: i is not defined
    at <anonymous>:1:13
(anonymous) @ VM2921:1
console.log(na[i]);
VM2952:1 Uncaught ReferenceError: i is not defined
    at <anonymous>:1:16
(anonymous) @ VM2952:1
for (let i=0; i<=10;i++){
 console.log(na[i]);
}
VM3008:2 0
VM3008:2 1
VM3008:2 2
VM3008:2 3
VM3008:2 4
VM3008:2 5
VM3008:2 6
VM3008:2 7
VM3008:2 8
VM3008:2 9
VM3008:2 10
undefined
console.log(na[i]);
VM3018:1 Uncaught ReferenceError: i is not defined
    at <anonymous>:1:16
(anonymous) @ VM3018:1
let a0 =[]
undefined
let a1 =[]
undefined
for (let i=0; i>=10;i++){
    a0[i]=i;
}
undefined
for (let i=0; i>=10;i++){
    console.log(a0[i])
}
undefined
for (let i=0; i<=9;i++){
    console.log(a0[i])
}
10VM3414:2 undefined
undefined
for (let i=0; i<=9;i++){
    a0[i]=i;
}
9
for (let i=0; i<=9;i++){
    console.log(a0[i])
}
VM3487:2 0
VM3487:2 1
VM3487:2 2
VM3487:2 3
VM3487:2 4
VM3487:2 5
VM3487:2 6
VM3487:2 7
VM3487:2 8
VM3487:2 9
undefined
for (let i=5; i<=9;i++){
    
}
undefined
for (let i=5; i<=9;i++){
    a1[i]=i
}
9
for (let i=5; i<=9;i++){
    console.log(a1[i]);
}
VM3584:2 5
VM3584:2 6
VM3584:2 7
VM3584:2 8
VM3584:2 9
undefined
for (let i=5; i<=9;i++){
    a1[i]=5
}
5
for (let i=0; i<=9;i++){
    a1[i]=5
}
5
for (let i=0; i<=9;i++){
    console.log(a1[i]);
}
10VM3655:2 5
undefined
let b1=[]
undefined
le b2=[]
VM3716:1 Uncaught SyntaxError: Unexpected identifier
for (let i=0; i<=9;i++){
    b1[i]=a0[i]+a1[i];
}
14
for (let i=0; i<=9;i++){
    console.log(b1[i]);
}
VM3924:2 5
VM3924:2 6
VM3924:2 7
VM3924:2 8
VM3924:2 9
VM3924:2 10
VM3924:2 11
VM3924:2 12
VM3924:2 13
VM3924:2 14
undefined
function Add2(a,b){
    let s ;
    s=a+b;
    return s;
}
undefined
Add2(4,5)
9
Add2(10,15)
25
let k=Add2(1,2);
VM4321:1 Uncaught SyntaxError: Identifier 'k' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM4321:1
let m=Add2(1,2);
VM4334:1 Uncaught SyntaxError: Identifier 'm' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM4334:1
let z=Add2(1,2);
undefined
console.log(z);
VM4405:1 3
undefined
function Mul2(a,b){
    let s ;
    s=a*b;
    return s;
}
undefined
let z1=Mul2(5,60);
undefined
console.log(z1);
VM4553:1 300
undefined
function Person (firstname,lastname)
let firstname="Manasa"
VM4765:2 Uncaught SyntaxError: Unexpected identifier
function Person (firstname,lastname)
let fullname=firstname+lastname
VM4907:2 Uncaught SyntaxError: Unexpected identifier
function Person (firstname,lastname)
let fullname=firstname+lastname;
VM4914:2 Uncaught SyntaxError: Unexpected identifier
function Person (firstname,lastname){
let fullname=firstname+lastname;
return fullname;
}
undefined
Person ("Manasa","Rao") 
"ManasaRao"
Person ("Suraj","Rao") 
"SurajRao"
fuctiom Br (a,b,c){
VM5173:1 Uncaught SyntaxError: Unexpected identifier
function Br (a,b,c){
    let v;
    v=a+b-c;
}
undefined
function Br (a,b,c){
    let v;
    v=a+b-c;
}
undefined
function Br (a,b,c){
    let v;
    v=a+b-c;
return v;
}
undefined
Br(7,5,3)
9
Br(4,7,9);
