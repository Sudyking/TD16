/*
Bài 17: Đếm chữ số 3 7
Cho một số nguyên có 5 chữ số. Hãy đếm xem số này có bao nhiêu chữ số là số 3
hoặc số 7?
*/

var readLine = require("readline-sync");
var abc = parseInt (readLine.question(" Nhap vao so co 5 chu so "));
var result = 0 ;
var a = 0 ;  // so tach 
var b = 0 ; // nhu tren 
var c = 0 ; // nhu tren 
var d  = 0 ; 
var e = 0 ;


//tach so & tinh toan 
e = abc%10;
d = parseInt(abc/10%10);
c = parseInt(abc/100%10);
b = parseInt(abc/1000%10);
a = parseInt(abc/10000);

console.log("Debug : " + a + " " + b + " "+ c+ " "+ d + " " + e);

//Dieu kien 

if(a == 3 || a == 7 )
    {
        result+=1;
    }
if(b == 3 || b == 7 )
    {
        result+=1;
    }
if(c == 3 || c == 7 )
    {
        result+=1;
    }
 if(d == 3 || d == 7 )
    {
        result+=1;
    }
 if(e == 3 || e == 7 )
    {
        result+=1;
    }

    console.log("So ban nhap co " + result + " chu so 3 hoac 7 " );
