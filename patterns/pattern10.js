// Pattern #10
// i = rows
// j = columns

for(let i=1; i<=5; i++){// rows
    let res="";
    for(let j=0; j<i; j++){ //cols
        res+="*";
    }
    console.log(res);
}
for(let i=5; i>=0; i--){// rows
    let res="";
    for(let j=1; j<=i-1; j++){ //cols
        res+="*";
    }
    console.log(res);
}

// Time Complexity :  O(n^2)
// Space Complexity : O(n)