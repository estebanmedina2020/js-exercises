// 1. Update the variable `sortedNums`.
// It should contain the values of `nums` and `nums2` in ascending order
// Tip: you might need to read the documentation for .sort (search "mdn array sort")

let nums = [10, 1, 5, 29, 100];
let nums2 = [11, 6, 3, 29, 12];
let sortedNums = nums.concat(nums2).sort(function (a, b) {
  if (a > b) {
    return 1;
  }
  if (a === b) {
    return 0;
  }
  if (a < b) {
    return -1;
  }
});

console.log(sortedNums);

// 2. Using code, show that the variables nums and nums2 were not changed

/* 
  EXPECTED RESULT
  ---------------
  [ 1, 3, 5, 6, 10, 11, 12, 29, 29, 100 ]
*/
