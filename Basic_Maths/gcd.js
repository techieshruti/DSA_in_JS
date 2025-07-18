// GCD - GREATEST COMMON DIVISOR 
// OR
// HCF - HIGHEST COMMON FACTOR



// Optimal Approach (Euclidean Algorithm)
let a = 4; let b = 12;
console.log(`a = ${a}`)
console.log(`b = ${b}`)
while(a>0 && b>0)
{
    if(a>b) a=a%b;
   else b=b%a;
}

if(a===0) console.log(`GCD is ${b}`);
else console.log(`GCD is ${a}`);

// Time Complexity =  O(log min(a,b))
// Space Complexity = O(1)