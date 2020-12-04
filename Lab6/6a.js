function convertFromC() {
    let result = document.getElementById("C").value * (9/5)+32;
    document.getElementById("result").innerText = result;
}

function convertFromF() {
    let result = (document.getElementById("C").value-32)*(5/9);
    document.getElementById("result").innerText = result;
}


//Another way of implementing (onclick should be removed from buttons)

// document.getElementById("convert1").addEventListener("click", (event)=>{
//     event.preventDefault()
//     document.getElementById("result").innerText=document.getElementById("C").value * (9/5)+32;
//     }
//   );

// document.getElementById("convert2").addEventListener("click", (event)=>{
//     event.preventDefault()
//     document.getElementById("result").innerText=(document.getElementById("F").value-32)*(5/9);
//     }
// );