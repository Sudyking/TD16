/*
Bài 18: Số nửa vời
Cho một số nguyên có 6 chữ số. Hãy cho biết số này có phải là số “nửa vời” hay
không? Biết số “nửa vời” là số có đúng 3 chữ số lẻ.
Quy ước: Yes/No
*/

var readLine = require("readline-sync");
var abc = parseInt (readLine.question(" Nhap vao so co 6 chu so "));
var result = 0 ;
var a = 0 ;  // so tach 
var b = 0 ; // nhu tren 
var c = 0 ; // nhu tren 
var d  = 0 ; 
var e = 0 ;
var f = 0 ;


//tach so & tinh toan 
f = abc%10;
e = parseInt(abc/10%10);
d = parseInt(abc/100%10);
c = parseInt(abc/1000%10);
b = parseInt(abc/10000%10);
a = parseInt(abc/100000);

console.log("Debug : " + a + " " + b + " "
+ c + " "+ d + " " + e + " " + f );

// Dieu kien 
if(a % 2 != 0 )
    {
        result+=1;
    }
if(b % 2 != 0 )
    {
        result+=1;
    }
if(c % 2 != 0 )
    {
        result+=1;
    }
if(d % 2 != 0 )
    {
        result+=1;
    }
if(e % 2 != 0 )
    {
        result+=1;
    }
if(f % 2 != 0 )
    {
        result+=1;
    } 
console.log(" Debug kq : " + result);

// Dieu kien 2 

    if(result == 3 )
        {
            // Xuat kq end 
            console.log("Yes");
        }
    else
        {
            console.log("No");
        }
