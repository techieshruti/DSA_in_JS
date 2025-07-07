// // Two Sum
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */

//  let nums = [2,7,11,15];
//  let target = 9;
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// }

// console.log(twoSum);

// // 283. move zeros

// var moveZeroes = function(nums) {
//     let pos = 0;
//   for(let i=0; i<nums.length; i++)
//     {
//       if (nums[i] !== 0){
//       nums[pos] =nums[i];
//         pos++;
//       }
//     }
//  while (pos < nums.length) {
//   nums[pos] = 0;
//   pos++;
// }

// console.log(nums);
// }

// // Alternate elements of an array
// let arr=[10,20,30,40,50,60,70,80,90,100];
// console.log(arr);
// let res = [];
// for(let i=0; i<arr.length; i++){
//     if(i % 2 == 0)
//     {
//         res.push(arr[i]);
        
//     }
// }
// console.log(res);

// // for (let i = 0; i < arr.length; i += 2)

// // Largest element in an Array
// let arr1=[10,20,40,50,60,80,70,100,20];
// let max =arr1[0]
// for(let i=0; i<arr1.length; i++)
//     {
//         if(arr1[i] > max)
//         {
//             max=arr1[i];
//         }
//     }
// console.log(arr1);
// console.log(max);

// // 704 binary search 
// let arr6=[10,20,30,40,50,60,70,80];
// let key = 50;
// function getKey(arr6, key)
// {
//   let start=0; let end = arr6.length-1;
//   while(start<=end)
//   {
//     let mid = Math.floor((start+end)/2);
//     if(arr6[mid] == key)
//     {
//       return mid;
//     }
//     else if(arr6[mid]< key)
//     {
//       start= start+1;
//     }
//     else
//     {
//       end=mid-1;
//     }
    
//   }
//   return -1;
// // }
// // console.log("index of key is "+ getKey(arr6, key));

// // Second Largest Element in an Array
// // let arr1=[10,20,40,50,60,80,70,100,20];
// let largest = -1; let secondLargest=-1;
// for(let num of arr1){
//   if(num > largest)
//     {
//       secondLargest=largest;
//       largest = num;
//     }
//     else if(num > secondLargest && num !=largest)
//     {
//       secondLargest =num;
//     }
// }
// console.log(secondLargest);

// // Largest three distinct elements in an array
// let arr1=[10,20,40,50,60,80,70,100,20];
// let max = secondMax = thirdMax = -1;
//  for(let num of arr1)
//  {
//   if(num > max)
//   {
//     thirdMax = secondMax;
//     secondMax = max;
//     max = num;
//   }
//   else if(num > secondMax && num != max)
//   {
//     thirdMax = secondMax;
//     secondMax = num;
//   }
//   else if(num > thirdMax && num != secondMax){
//     thirdMax = num;
//   }
//  }

//  console.log(max);
//  console.log(secondMax);
//  console.log(thirdMax);

//  // Largest four distinct elements in an array

//  let arr1=[10,20,40,50,60,80,70,100,20];
//  let max = secondMax = thirdMax = fourMax = -1;

//  for (let num of arr1)
//  {
//   if(num > max)
//   {
//     fourMax = thirdMax;
//     thirdMax = secondMax;
//     secondMax = max;
//     max = num;
//   }
//   else if(num > secondMax && num != max)
//   {
//     fourMax = thirdMax;
//     thirdMax = secondMax;
//     secondMax = num;
//   }
//   else if(num > thirdMax && num != max && num != secondMax )
//   {
//     fourMax = thirdMax;
//     thirdMax = num;
//   }
//   else if(num > fourMax && num != thirdMax && num != max && num != secondMax)
//   {
//     fourMax = num;
//   }
//  }
//  console.log(fourMax);
//  console.log(thirdMax);
//  console.log(secondMax);
//  console.log(max);

// Reverse an array
// let arr1=[10,20,40,50,60,80,70,100,20];
// let start = 0; let end = arr1.length-1;

// while(start < end)
//   {
//     let temp = arr1[end];
//     arr1[end]=arr1[start];
//     arr1[start]=temp;

//     start++;
//     end--;
//   }
// console.log(arr1);

// pairs in array
// let array=[10,20,30,40,50];
// function pairsInArray(array)
// {
//   for(let i=0; i<array.length; i++)
//   {
//     let curr=array[i];
//     for(let j=i+1; j<array.length; j++)
//       {
//         console.log(`(${curr}, ${array[j]})`);
//       }
//       console.log(`\n`);
//   }
// }
// pairsInArray(array);

// print subarrays
// let array=[10,20,30,40,50];
// function getSubArray(array)
// {
//   for(i=0; i<array.length; i++)
//     {
//       let start =i;
//       for(j=start; j<array.length; j++)
//       {
//         let end = j;
//         let str = "";
//         for(let k = start; k<=end; k++)
//         {
//           str += array[k] + " ";
//         }
//         console.log(`[ ${str.trim()} ]`);
//       }
//     }
// }
// getSubArray(array);

// optimized version of print subaray
// let array = [10, 20, 30, 40, 50];

// function printAllSubarrays(arr) {
//   const n = arr.length;

//   for (let start = 0; start < n; start++) {
//     for (let end = start; end < n; end++) {
//       let subarray = "";

//       for (let k = start; k <= end; k++) {
//         subarray += arr[k];
//         if (k < end) subarray += ", ";
//       }

//       console.log(`[${subarray}]`);
//     }
//   }
// }

// printAllSubarrays(array);

// print sum of subarrays
// let array=[10,20,30,40,50];
// let maxSum = -Infinity;
// function subArraySum(array)
// {
//   for(i=0; i<array.length; i++)
//     {
//       let start =i;
//       for(j=start; j<array.length; j++)
//       {
//         let end = j;
//         let str = "";
//         let currSum =0;
//         for(let k = start; k<=end; k++)
//         {
//           str += array[k] + " ";
//           currSum+=array[k];
//         }
//         console.log(` Sum of [ ${str.trim()} ] is = `+currSum);
//         if(maxSum < currSum)
//         {
//           maxSum = currSum;
//         }
//       }
//     }
// }
// subArraySum(array);
// console.log(`Max subarray sum is = ${maxSum}`)


// trapping rain water
// let building = [4, 2, 0, 6, 3, 2, 5];
// let n = building.length;

// // Step 1: Create arrays
// let maxLeft = new Array(n); // to store all max left bars
// let maxRight = new Array(n); // to store all max right bars 

// // Step 2: Fill maxLeft[]
// maxLeft[0] = building[0];
// for (let i = 1; i < n; i++) {
//   maxLeft[i] = Math.max(building[i], maxLeft[i - 1]); // all values will store in maxleft array.
// }

// // Step 3: Fill maxRight[]
// maxRight[n - 1] = building[n - 1];
// for (let i = n - 2; i >= 0; i--) {
//   maxRight[i] = Math.max(building[i], maxRight[i + 1]);
// }

// // Step 4: Calculate trapped water
// let trappedWater = 0;
// for (let i = 0; i < n; i++) {
//   let waterLevel = Math.min(maxLeft[i], maxRight[i]);
//   trappedWater += waterLevel - building[i];
// }

// console.log(trappedWater);  // ✅ Output: 11


//Buy and Sell Stocks
// let currentPrice = [7,1,5,3,6,4];  //current Price = selling price
// let buyPrice = +Infinity;
// let maxProfit = 0;

// function buyAndSellStocks(currentPrice)
// {
//   for(let i=0; i<currentPrice.length; i++)
//     {
//       if(buyPrice < currentPrice[i])
//         {
//           profit = currentPrice[i] - buyPrice;
//           maxProfit=Math.max(maxProfit,profit);
//         }
//         else
//         {
//           buyPrice = currentPrice[i];
//         }
//     }
//     return maxProfit;
// }

// console.log(buyAndSellStocks(currentPrice));

//Buy and Sell Stocks only hold at most one share of the stock at any time

// let price = [7,1,5,3,6,4];
// let maxProfit = 0;

// function buyAndSellStocks(price)
// {
//   for(let i =1; i<price.length; i++)
//   {
//     if(price[i-1] < price[i])
//     {
//       let profit = price[i] - price[i-1];
//       maxProfit += profit;
//     }
//   }
//   return maxProfit;
// }

// console.log(buyAndSellStocks(price));

//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct
let num = [1, 2, 3, 1];

function duplicate(num)
{
  for(let i =0; i<num.length; i++)
{
  for(let j = i+1; j<num.length; j++)
  {
    if(num[i] == num[j])
    {
      return true;
    }
  }
}
  return false;
}

console.log(duplicate(num));