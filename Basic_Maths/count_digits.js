

let num = 456985;
let count = 0;

while(num > 0)
{
    let lastDigit = num % 10;
    count+=1;
    num = Math.floor(num / 10);
}
console.log(count);
