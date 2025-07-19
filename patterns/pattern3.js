// Pattern #3 where columns are increasing according to rows size and print numeric values
// first loop is pointing to column and second loop is pointing rows.

// step 1: create a loop which will go from 0 to i<=n
// step 2: create a variable to store result as we need to joint the stars. if we don't store it it will print on new line.
// step 3: create a loop for rows it will go from 1 to j<=i
// whatever the value of i, j will print its value according to i
// step 4: add value of j to variable and store into same
// step 5: print the result of variable

for(let i=0; i<=5; i++){
    let res = "";
    for(let j=1; j<=i; j++){
        res+=j;
    }
    console.log(res)
}
// Time Complexity - O((n^2)
// Space Complexity - O(1)