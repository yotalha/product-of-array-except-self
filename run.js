//Problem statement: we have array of number that should return another array that is the product of whole array except nums[i] itself which is the current number
// [1,2,3,4] should return [24,12,8,6];
// The solution should be O(n) timecomplexity and O(1) space complexity
// Solve without using division

const nums = [1, 2, 3, 4];
const res = [];
let pre = 1;
let post = 1;

for (let i = 0; i < nums.length; i++) {
  res[i] = pre;
  pre = pre * nums[i];
}

for (let i = nums.length - 1; i >= 0; i--) {
  res[i] = res[i] * post;
  post = post * nums[i];
}
console.log(res);
