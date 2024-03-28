function removeDuplicates(nums: number[]): number[]{
    let map = new Map()
    for(let x=0; x<nums?.length; x++){
        if(!map.has(nums[x])){
            map.set(nums[x], 1)
        }
        if(map.get(nums[x]) > 1){
            nums.splice(x, 1)
        }
    }
    return nums
};

const arr: number[] = [1,1,2]

console.log(removeDuplicates(arr))