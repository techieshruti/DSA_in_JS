// COUNT DIGITS

//Brute Force Approach

// step 1 : declare number and count variable.
// step 2 : loop will run untill the number become 0.
// step 3 : extract the digit with help of modulation by 10.
// step 4 : increment count variable by 1.
// step 5 : now we need to remove last digit by math.floor of (num / 10) to get integer number.
// step 6 : print the value of count in the end.

let num = 456985;
let count = 0;

while(num > 0)
{
    let lastDigit = num % 10;
    count+=1;
    num = Math.floor(num / 10);
}
console.log(count);

// time complexity = O(log10N +1)
// space complexity = O(1)


// optimal Approach

// step 1 : declare a number
// step 2 : take integer part of logarthemic base 10 of number + 1 and assign it into and variable.
// step 3 : print the count variable 

let number = 456;
let cnt = Math.floor(Math.log10(number)+1);
console.log(cnt);

// Time Complexity = O(1)
// Space Complexity = O(1)