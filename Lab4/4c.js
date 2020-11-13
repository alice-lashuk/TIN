function isPal(str) {
    if (str.length == 1) {
        return true
    }

    for(let i = 0; i < str.length / 2; i++) {
        if(str[i] != str[str.length - i - 1]) {
            return false
        }
    }

    return true
}

console.log(isPal("toshokan"))
console.log(isPal("a"))
console.log(isPal("anna"))