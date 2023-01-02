/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
var longestCommonPrefix = function(strs) {
    var ans ="";
    for( var i=0;i<strs.length;i++){
        for(var j=0;j<strs[i].length;j++){
    var test = strs[i][j];
    var test1 = strs[i++][j++];
        if(test=test1){
            ans = ans + strs[i][j];
        }else{
            exit(0);
        }
    }
    }
};

