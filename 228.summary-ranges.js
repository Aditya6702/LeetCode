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
    let list = [];
    var start=0;
for(let i=0;i<nums.length;i++){
    if(nums[i] !== list[i] && nums[i] !== 0){
        list.push(nums[start] + "->" + nums[i-1]);
        start = i;
        }

    else if(nums[i] + 1 !== nums[i++])
        list.push(nums[i]);
    if (nums[i] + 1 == nums[i++]){
        ++i;        
    }
    
        // continue;
}

return list;

}
// @lc code=end

