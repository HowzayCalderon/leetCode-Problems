/* 
Date Started: 03/13/23
Language Used: JavaScript

Difficulty: Easy
Question: 7. Reverse Integer

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21
 

Constraints:
-231 <= x <= 231 - 1
*/

function reversed(x){
    let num = x.toString().split('').reverse().filter(int => int !== '-').join('');
    num > 2**31 -1? num = 0: num = num;
    x < 0? num = num * -1: num = num;
    return num;
};

/*
Runtime: 67ms, Beats: 88.46%
Memory: 44.1MB, Beats: 21.60%
*/