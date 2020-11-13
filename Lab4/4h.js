function fun(arr) {
    let sorted = arr.sort()
    return [sorted[1], sorted[sorted.length-2]]
}

console.log(fun([2,5,8,3]))