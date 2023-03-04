/*
Date Started: 03/04/2023
Language Used: JavaScript

Difficulty: Easy
Question: 9. Palindrome Number

Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

function pally(x){
    let array = x.toString().split('').reverse().join('')
    if(array == x.toString()){
        return true
    }
    else{
        return false
    }
    
    
}

/*
Runtime: 172ms, Beats: 75.29%
Memory: 51.1MB, Beats: 56.13%
*/
