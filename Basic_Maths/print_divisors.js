// PRINT ALL ThE DIVISORS OF NUMBER
// divisors means number which completely divide the number leaving 0 remainder.

// step 1 : declare a number
// step 2 : loop from 1 to number because divisors resides between 1 to 36 only.
// step 3 : check if num % i leaves no remainder that will be the divisor
// step 4 : print the i.

let num = 145;
for(let i =1 ; i<=num; i++)
{
    if(num % i ===0)
    {
        console.log(i);
    }
}

// Time Complexity = O(n)
// Space Complexity = O(1)

console.log("\n====Optimal approach====\n")
let number = 36;

for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
        console.log(i);  // i is a divisor
        if (i !== number / i) {
            console.log(number / i);  // paired divisor
        }
    }
}

// Time Complexity = O(√n)

