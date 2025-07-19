// Pattern #6 where digits are printing in decreasing order
// outer loop is pointing to column and inner loop is pointing rows.

// step 1: create a outer loop which will go from i=n to i<0
// step 2: create a variable to store result as we need to store digit. if we don't store it it will print on new line.
// step 3: create a inner loop for rows it will go from j=1 to j<=i, inner loop will store digit into variable.
// step 4: add digit to variable and store into same
// step 5: print the result of variable

for(let i=5; i>0; i--){
    let res ="";
    for(let j=1; j<=i; j++){
        res+=j;
    }
    console.log(res)
}

// Time Complexity - O((n^2)
// Space Complexity - O(1)