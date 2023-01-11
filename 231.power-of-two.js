/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n == 1)
        return 1;
    else{
        n = n/2;
        isPowerOfTwo(n);
    }
    return 0;
};
// @lc code=end

