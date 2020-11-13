function isPrime(n) {
    for(let i = 2; i < n; i++) {
      if(n % i === 0) {
        return false
      }
    }
    return n > 1;
}

console.log(isPrime(11))
console.log(isPrime(101))
console.log(isPrime(112))
