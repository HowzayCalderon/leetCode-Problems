/*
Date Started: 03/14/23
Language Used: JavaScript

Difficulty: Easy
Question: 58. Length of Last Word

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.

 

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 

Constraints:
1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.
*/

function lolw(s){
    /* the words variable is storing the string that was made from using s.split(' ') and .filter() was used to remove any empty strings from the array.
    then in the return statement we are selecting the final string in the array and returning its length */
    let words = s.split(' ').filter(space => space !== '')
    return words[words.length -1].length;
}

/* 
Runtime: 53ms, Beats: 91.73%
Memory: 42.3MB, Beats: 26.26%
*/
