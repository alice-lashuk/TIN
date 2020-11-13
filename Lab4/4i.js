function amountTocoins(m, arr) {
    let str = ""
    for (let i = 0; i < arr.length; i++) {
        if (m >= arr[i]) {
          m = m - arr[i]
          str = str + arr[i] + ', '
          i--
        }
    }
    return str.substring(0, str.length - 2)
}

console.log(amountTocoins(46, [25,10,5,2,1]))