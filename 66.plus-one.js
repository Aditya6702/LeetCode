/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {BigInt[]} digits
 * @return {BigInt[]}
 */



var plusOne = function(digits) {
    let num = digits.join("");
    num = BigInt(num);
    ans = num + BigInt(1);
    return(Array.from(String(ans),BigInt));
};
// @lc code=end

