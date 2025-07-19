// Pattern #3 where columns are increasing according to row size and print numeric values
// outer loop is pointing to column and inner loop is pointing rows.

// step 1: create a outer loop which will go from 1 to i<=n
// step 2: create a variable to store result as we need to joint the stars. if we don't store it it will print on new line.
// step 3: create a inner loop for rows it will go from 1 to j<=i, whatever the value of i, inner loop will store into variable.
// step 4: add value of i to variable and store into same
// step 5: print the result of variable

for(let i=1; i<=5; i++){
    let res="";
    for(let j=1; j<=i; j++){
        res+=i;
    }
    console.log(res)
}

// Time Complexity - O((n^2)
// Space Complexity - O(1)