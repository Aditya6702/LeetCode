/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let list1 =  []
    let list2 = []
    let list3 = []
    for(var i = 0;i<s.lengt;i++){//increment later
    if(s[i] === '(')
        list1.push(s[i]);
    else if(s[i] === ')'){
        if(list1===null)
            exit(0);
        list1.pop();
    }
    if(s[i] === '[')
        list2.push(s[i]);
    else if(s[i] === ']'){
        if(list2===null)
            exit(0);
        list2.pop();
    
    }
    if(s[i] === '{')
        list1.push(s[i]);
    else if(s[i] === '}'){
        if(list1===null)
            exit(0);
        list1.pop();
    }
}
   if(list1===null && list2 === null && list3 === null)
        return true; 
        //
};
// @lc code=end

