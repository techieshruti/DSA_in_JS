 // PRIME NUMBERS a number which has two factors 1 and number itself

// step 1 : declare a number and a count variable (to count factors).
// step 2 : loop i till sqrt of number
// step 3 : if number is completely divisible by i then increase count by 1.
// step 4 :   
// step 5 : check if count is equal to 2 meanse it is prime number.

let num = 13;
let count = 0;
for(let i=1; i<=Math.sqrt(num); i++)
{
    if(num % i === 0)
    {
        count++;
        if(i !== num/i)
        {
            count++;
        }
    }
}
let result = (count === 2) ? "true" : "false";
console.log(result);

// Time Complexity = O(sqrt(n))
// Space Complexity = O(1)