leetcode 1:

var twoSum = function(nums, target) {
    let result = []
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if((nums[j] + nums[i]) == target){
                result.push(i,j)
                return result
            }
        }
    }   
}

leetcode 9:

var isPalindrome = function(x) {
    const xArray = [...x.toString()]
    let left = 0, right = xArray.length - 1

    while (left < right) {
        if (xArray[left] !== xArray[right]){
            return false;
        }else{
            left ++;
            right --;
              } 
    }
    return true;
    
};



leetcode 13:
var romanToInt = function(s) {
    const roman = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
}
    let result = 0;
    for (let i = 0; i< s.length; i++){
        const curr = s[i];
        const next = s[i+1];
        
        if (roman[curr] < roman[next]){
            const num = roman[next] - roman[curr];
            result += num;
            i++
        }else{
            result += roman[curr];
        }
        
        
    }
    return result
    
};



leetcode 20:
var isValid = function(s) {
    const charMap = { '(':')', '{':'}', '[':']'} 
    //base case
    if(s.length == 0){
        return true;
    }
    //set array
    let arr = [];
    
    for(let i = 0; i < s.length; i++){
        
        if(s[i] !== arr[arr.length - 1]){
            arr.push(charMap[s[i]]);
        }else{
            arr.pop();
        }
    }
    return arr.length === 0;
    
};



leetcode 58:

var lengthOfLastWord = function(s) {
    let count = 0;
    let i = s.length - 1;
    
    while(i >= 0){
        if(s[i] != ' '){
            count++;
        }else if(count > 0){
            return count;
        }
        i--;
    }
    return count
};


