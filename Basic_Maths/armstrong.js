// ARMSTRONG NUMBER is number which is equal to the sum of the digits of the number, raised to the power of the number of digits.

// step 1 : declare a number, another variable to store the number because throughout the program the value of number will changed to 0, variable to store the sum of digits.
// step 2 : place a while loop, it will run untill the number become 0.
// step 3 : extract the last digit by extraction method
// step 4 : calculate cube of last digit and add it to the sum.
//  here 371 last digit is 1 and sum = 0 + 1 = 1
// in next iteration, last digit 7 and sum = 1 + 343 = 344
// step 5 : take integer part of the number after removing the last digit. and loop will continue.
// step 6 : check number is equivalent to the sum, if yes then it is armstrong, if no then it is not

let num = 371;
let dupp = num;
let sum =0;
let count = Math.floor(Math.log10(num)) +1;
while(num>0)
{
    let lastDigit = num % 10;
    sum = sum + Math.pow(lastDigit, count);
    num = Math.floor(num / 10);
}
console.log(`sum of ${dupp} is ${sum}`);

let result = (dupp === sum) ? "Num is armstrong" : "Num is not armstrong";
console.log(result);


// Time Complexity = O(log10N + 1)
// Space Complexity = O(1)