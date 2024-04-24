// variables, datatypes, loops
function getSum(nums) {
  const sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return sum;
}

const nums = [1, 2, 3, 4, 5];
const result = getSum(nums);
console.log(result);
