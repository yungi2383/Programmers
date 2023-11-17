function solution(nums) {
    let array = nums.sort((a,b) => a-b)
    let array2 = [];
    for (i=0;i<nums.length;i++){
        if(!array[i-1] || array[i]!== array[i-1]) {
            array2.push(array[i])
        }
    }
    if (array2.length < nums.length/2) {
        return array2.length
    } else {
        return nums.length/2
    }
}