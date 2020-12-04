setTimeout(timer, 5000);

function timer()
{
    let text="Hello there!(kinda small paragraph)";
    let p =  document.createElement("p")
    p.setAttribute("id", "par")
    document.getElementById("paragraph").appendChild(p)
    document.getElementById("par").innerHTML=text;
}