function two_Sum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }

const tst=[10 , 78 , 50, 1 ,4];
goal=11;

console.log(two_Sum(tst,goal));