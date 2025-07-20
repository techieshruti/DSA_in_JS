// pattern #8
let n=5;
for(let i=n; i>0; i--)
{
    let res="";
    // space
    for(let j=0; j<n-i; j++){
        res+=" "
    }
    // stars
    for(let j=0; j<2*i-1; j++){
        res+="*"
    }
    // space
    for(let j=0; j<n-i; j++){
        res+=" "
    }
    console.log(res);
}

// Time Complexity :  O(n^2)
// Space Complexity : O(n)