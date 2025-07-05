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
let arr1=[10,20,40,50,60,80,70,100,20];
let start = 0; let end = arr1.length-1;

while(start < end)
  {
    let temp = arr1[end];
    arr1[end]=arr1[start];
    arr1[start]=temp;

    start++;
    end--;
  }
console.log(arr1);