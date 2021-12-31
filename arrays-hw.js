/ 1 .... detects 2s and 3s in an array//
let values = [7,2];
let has23;

// Solution//
if (values[0] === 2 || values[0] === 3 || values[1] === 2 || values[1] === 3) {
    has23 = true;
}
else {
    has23 = false;
}
console.log(has23);

//-------------------------------//


// 2........ given two arrays, do a check to see if the last element of the different arrays is the same or not//

let arrayA = [1,2,5];
let arrayB =[7,3];
let commonEnd; // place holder variable that will be a boolean

// solution to 2//
commonEnd = arrayA[arrayA.length - 1] === arrayB[arrayB.length - 1]; /// sinced === generates a boolean it will give us true or false

console.log(commonEnd);

//------------------------------------//

//3... take an array of numbers and count the even numbers within the array with a loop && Reminder: the % operater computes the remainder so it can do evensss//

let nums1 = [2,1,2,3,4];
let countEvens = 0;

// solution//
for (let i = 0; i < nums1.length; i++){ // i lets the nums.length not go past the last element bc it is saying indicies
    console.log(nums1[i]);
    if (nums1[i] % 2 ===0){   // lets us count evens by seeing if each element is divisible by to with no remainder
        countEvens++;
    }
}

console.log(countEvens);

//----------------------------//

//4... calculate the average of all the numbers wihtin the array, set the value 

let nums = [5,5,5,10]; //average should be 6.25
let average;

//Solution//

let total = 0;

for (let i = 0; i < nums.length; i++){
    total += nums[i];                     /// got the total so done looping
}

average = total / nums.length;
console.log(average);

//-------------------------------------------//
//extra credit.... given an array of numbers, caluculate the longest distance of the instances

let nums2 = [1,4,2,1,4,4,4];
let maxSpan;

//Solution//
for (let i = 0; i < nums2.length; i++){
    for (let j = i + 1; j < nums2.length; j++){    /////// inner loop often uses j bc i + 1 in the alphabet // this loop tells it to look at the first & run through, 2nd & run through, etc
        if (nums2[i] === nums2[j]){    /////// if numbers are the same then calculate the immediate span
            let span = j - i;

            if (span > maxSpan) {
                maxSpan = span;
            }
        }
    }
}
console.log(maxSpan);
