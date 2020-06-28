/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let length = nums.length - 1 

    change(nums, 0, length)
};


function change(array, start, length){
    if(start == length) {
        console.log(array)
    } else {
        for(let i = start; i <= length; i ++ ){
            const _array = [...array]
            ;[_array[start], _array[i]] = [_array[i], _array[start]]
            change(_array, start + 1 , length)
        }
    }
}

const nums = [1, 2, 3]
permute(nums)
