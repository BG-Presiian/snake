var rs = require('readline-sync');

var fNum1 = rs.question('1st Number: ');
var fNum2 = rs.question('2nd Number: ');
var fNum3 = rs.question('3rd Number: ');
var fNum4 = rs.question('4th Number: ');

function factorial(fNum1) 
{ 
  if (fNum1 === 0)
 {
    return 1;
 }
  return fNum1 * factorial(fNum1-1);
         
}
console.log( "Factorial of 1st Number: " + factorial(fNum1));
var i =0;

function addNums(fNum2)
{
  var num = fNum2.toString();
  var sum = 0;

  for (var i = 0; i < num.length; i++) {
    sum += parseInt(num.charAt(i), 10);
  }

  return sum;

}

console.log("Sum of 2nd Number: " + addNums(fNum2));


function reverse(fNum3)
{
	fNum3 = fNum3 + "";
	return fNum3.split("").reverse().join("");
}
console.log("Reversal of 3rd Number: " + reverse(fNum3));

function checkPalindrom(fNum4) {
  return fNum4 == fNum4.split('').reverse().join('');
}
console.log("Is the 4th number a palindrome?(TRUE/FALSE): " + checkPalindrom(fNum4));