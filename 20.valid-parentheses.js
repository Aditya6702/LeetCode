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
    var list1 =  [];
    var list2 = [];
    var list3 = [];
    for(var i =0;i<s.length;i++){//increment later
    if(s.charAt(i) == '(')
        list1.push(s.charAt(i));
    else if(s.charAt(i) == ')'){
        if(list1==null)
            exit(0);
        list1.pop();
    }
    if(s.charAt(i) == '[')
        list2.push(s.charAt(i));
    else if(s.charAt(i) == ']'){
        if(list2==null)
            exit(0);
        list2.pop();
    
    }
    if(s.charAt(i) == '{')
        list1.push(s.charAt(i));
    else if(s.charAt(i) == '}'){
        if(list1==null)
            exit(0);
        list1.pop();
    }
}
   if(list1==null && list2 == null && list3 == null)
        return(1); 
};
// @lc code=end

