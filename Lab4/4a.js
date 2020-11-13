let rec = function rec_factorial(a) { 
    if(a == 0) {
        return 1
    } else {
        return a * rec_factorial(a - 1)
    }
};


function it_factorial(a) {
    let n = a;
    if (a === 0 || a === 1) 
        return 1; 
    while (a > 1) { 
        a--;
        n *= a;
    }
  return n;
}


console.log(rec(4)) 
console.log(it_factorial(4)) 