function removeDuplicates(nums) {
    var map = new Map();
    for (var x = 0; x < (nums === null || nums === void 0 ? void 0 : nums.length); x++) {
        if (!map.has(nums[x])) {
            map.set(nums[x], 1);
        }
        if (map.get(nums[x]) > 1) {
            nums.splice(x, 1);
        }
    }
    return nums;
}
;
var arr = [1, 1, 2];
console.log(removeDuplicates(arr));
