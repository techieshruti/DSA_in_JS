// Pattern #2 where columns are increasing according to rows size
// first loop is pointing to column and second loop is pointing rows.

// step 1: create a loop which will go from 0 to n
// step 2: create a variable to store result as we need to joint the stars. if we don't store it it will print on new line.
// step 3: create a loop for rows it will go from 0 to j<i
// whatever the value of i, j will print * according to i
// step 4: add * to variable and store into same
// step 5: print the result of variable

for(let i=0; i<=5; i++){
    let res = "";
    for(let j=0; j<i; j++){
        res+="*";
    }
    console.log(res)
}
// Time Complexity - O((n^2)
// Space Complexity - O(1)