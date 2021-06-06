//.התרגיל הראשון הדפסת הגדול משניהם
let myNum = (10,12);
if (10>12){
    document.write(" ex1: The bigger number is" + 10);
    alert(" ex1:The bigger number is "+ 10);
}
else{
    document.write("ex1: The bigger number is"  + 12);
    alert("ex1: The bigger number is " + 12);
} 

// התרגיל השני כתבו תוכנית אשר מקבלת 3 מספרים מעורבים (הכוונה גם שליליים וגם חיוביים), סוכמת אותם, ומדפיסה למסך מה הוא הסימן של התוצאה. למשל, אם חיברנו את 3-, 3, ו2, נדפיס למסך 'הסימן הוא +
let myNum2 = (5,7,-3);
if(5+7+-3 >= 0){
    document.write("ex2: +");
    alert("ex2: positive answer (+)");
}
else{
    document.write("ex2: -");
    alert("ex2: negitave answer(-)");
}

//3. כתבו תוכנית אשר מקבלת 3 מספריםבתוך מערך, ומסדרת אותם לתוך מערך חדש, ומדפיסה למסך את המערך החדש והמסודר. למשל, המערך הראשוני הוא arr = [1,9,3], התוכנית שלכם צריכה להדפיס את המערך בסדר עולה, 1,3,9
let myArr = [1,9,3];
if(1>9 && 1>3 && 9>3){
    document.write("ex3: (1,9,3)");
    alert("ex3: 1,9,3");
}
else if (1>9 && 1>3 && 3>9){
    document.write("ex3: (1,3,9)");
    alert("ex3: 1,3,9");
}
else if (9>1 && 9>3 && 1>3){
    document.write("ex3: (9,1,3)");
    alert("ex3: 9,1,3 ");
}
else if (9>1 && 9>3 && 3>1){
    document.write("ex3: (9,3,1)");
    alert("ex3: 9,3,1");
}
else if(3>1 && 3>9 && 9>1){
    document.write("ex3: (3,9,1)");
    alert("ex3 : 3,9,1")
}
else {
    document.write("ex3: (3,1,9");
    alert("ex3 : 3,1,9");
}
//הגדירו מערך בעל 5 איברים (כלומר 5 מספרים), אשר עובר על כלל האיברים ומדפיס לדפדפן את המספר הגדול מביניהם.
let myArr1=[10,5,30,40,72];
if (10>5 && 10>30 && 10>40 && 10>72){
    document.write("ex4: 10");
    alert("ex4: the bigger number is 10");
}
else if(5>10 && 5>30 && 5>40 && 5>72){
    document.write("ex4: 5");
    alert("ex4: the bigger number is 5");
}
else if(30>5 && 30>10 && 30>40 && 30>72){
    document.write("ex4: 30");
    alert("ex4: the bigger number is 30");
}
else if(40>30 && 40>5 && 40>10 && 40>72){
    document.write("ex4: 40");
    alert("ex4: the bigger number is 40");
}
else{
    document.write("ex4: 72");
    alert("ex4: the bigger number is 72");
}
//הגדירו מערך בעל 5 איברים, אשר עובר על כלל האיברים ומדפיס למסך האם המספר הוא זוגי או אי זוגי
let myArr2=[10,5,30,40,72];
if (10%2==0){
    document.write("ex5: 10 is zogi");
    alert("ex5: 10 is zogi");
}
else{
    document.write("ex5: 10 is not zogi");
    alert("ex5: 10 is not zogi");
}
if(5%2==0){
    document.write("ex5: 5 is zogi");
    alert("ex5: 5 is zogi");
}
else{
    document.write("ex5: 5 is not zogi");
    alert("ex5: 5 is not zogi");
}
if(30%2==0){
    document.write("ex5: 30 is zogi");
    alert("ex5: 30 is zogi");
}
else{
    document.write("ex5: 30 is not zogi");
    alert("ex5: 30 is not zogi");
}
if(40%2==0){
    document.write("ex5: 40 is zogi");
    alert("ex5: 40 is zogi");
}
else{
    document.write("ex5: 40 is not zogi");
    alert("ex5: 40 is not zogi");
}
if(72%2==0){
    document.write("ex5: 72 is zogi");
    alert("ex5: 72 is zogi");
}
else{
    document.write("ex5: 72 is not zogi");
    alert("ex5: 72 is not zogi");
}
