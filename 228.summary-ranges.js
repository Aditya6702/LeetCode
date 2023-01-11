/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let arr=[];
 for(let i=0;i<nums.length;i++){
    var start=nums[i];
    while(i+1 < nums.length && nums[i] == nums[i=1])
        i++;
    if(nums[i] != start)
            arr.push('${nums[start]}->${nums[i]}');
    else    
            arr.push('${nums[i]}');
    

 }
 return arr;    
};
// @lc code=end

