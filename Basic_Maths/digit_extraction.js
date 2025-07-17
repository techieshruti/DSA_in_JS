//HOW TO EXTRACT DIGITS IN GIVEM NUMBER

// step 1: if we divide a number with 10 then remainder would be the same value we get from modulation of number with 10. number is 4498. So 4498 % 10 = 8 which is remainder. And we get the first last digit. 
// step 2 : with the help of console.log we have printed the last digit.  
// step 3 : Now in this step we need to remove last digit from number. To do so we can easily do it by dividing it to 10. 
// So 4498 / 10 = 449.8. To get only the integer part we have used Math.floor() which return only greatest integer part.
// Loop will run untill the number get 0.

console.log(" \n== Digit Extraction from given number ==\n");
let num = 4498;
while(num>0)
{
    let lastDigit = num % 10;
    console.log(lastDigit);
    num = Math.floor(num / 10);
}
console.log(num);

// Time Complexity = O(log10N)
// Space Complexity = O(1)
