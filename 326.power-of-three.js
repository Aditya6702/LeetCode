/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    var num=1;
    for(let i=0;i<=n;i++){
        num=num*3;
        if(num==n)
            return 1;
        else if(n==1)
            return 1;
    }
    return 0;
    
};
// @lc code=end

