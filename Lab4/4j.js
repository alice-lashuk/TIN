function binary(num, arr) {
    left = 0
    right = arr.length - 1
    while(left <= right) {
        let half = Math.floor((right + left)/2)
        if(arr[half] == num) {
            return half
        }
        if(arr[half] < num) {
            left = half + 1
        } else if (arr[half] > num) {
            right = half - 1
        } 
    }
    return "not found"
}

console.log(binary(8, [1,2,3,4,5,6,7,8,9,10]))

console.log(binary(15, [1,2,3,4,5,6,7,8,9,10]))
