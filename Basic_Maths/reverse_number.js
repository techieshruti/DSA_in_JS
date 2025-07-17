// Reverse Digits of A Number

// Optimal Approach
// step 1 : declare a number and a reverseNum variable assign to 0.
// step 2 : use a loop to run untill the number become zero.
// step 3 : extract last digit 852963 % 10 = 3
// step 4 : multiply reversedNum by 10 and add last digit. 
// iteration 1: last digit is 3 so reversedNum = (0 * 10) + 3 = 3 
// iteration 2: last digit is 6 so reversedNum = (3 * 10) + 6 = 36 and so on.
// step 5 : divide the number by 10 to remove last digit
// step 6 : print the reversed number.

let num = 852963;
let reversedNum = 0;

while(num > 0)
{
    let lastDigit = num % 10;
    reversedNum = (reversedNum*10) + lastDigit;
    num = Math.floor(num /10);
}
console.log(reversedNum);

// Time Completxity = O(log10N + 1)
// Space Complexity = O(1)
