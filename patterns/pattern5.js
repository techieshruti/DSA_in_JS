// Pattern #5 where * are printing in decreasing order
// outer loop is pointing to column and inner loop is pointing rows.

// step 1: create a outer loop which will go from 1 to i<=n
// step 2: create a variable to store result as we need to joint the stars. if we don't store it it will print on new line.
// step 3: create a inner loop for rows it will go from j=i to j<=n, inner loop will store * into variable.
// step 4: add * to variable and store into same
// step 5: print the result of variable

for(let i=0; i<=5; i++){
    let res="";
    for(let j=i; j<5; j++){
        res+="*";
    }
        console.log(res)
}

// Time Complexity - O((n^2)
// Space Complexity - O(1)