let num = 4498;
while(num>0)
{
    let lastDigit = num % 10;
    console.log(lastDigit);
    num = Math.floor(num / 10);
}
