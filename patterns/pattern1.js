// PATTERN 1

// first loop is iterating to column and second loop is printing rows.

// step 1: create a loop for columns
// step 2: create a variable to store result as we need to joint the stars. if we don't store it it will print on new line.
// step 3: create a loop for rows
// step 4: add * to variable and store into same
// step 5: print the result of variable

for(let i=0; i<5; i++)
{
    let res="";
    for(let j=0; j<5; j++){
        res+="*";
    }
    console.log(res);
}