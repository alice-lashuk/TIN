window.onload = function() {

    const xhttp = new XMLHttpRequest();
    const form = document.querySelector('#cal-form');

    function sendJson(event) {
        event.preventDefault();
        num1 = parseFloat(event.target.querySelector("#num1").value)
        num2 = parseFloat(event.target.querySelector("#num2").value)
        operation = event.target.querySelector("#types").value
        const jsonOb = {
            "num1": num1,
            "num2": num2,
            "operation": operation
        }
        sendReq(jsonOb);
    }

    form.addEventListener('submit', sendJson)

    function sendReq(jsonOb) {
        xhttp.open("POST", "/calculate", true);
        xhttp.setRequestHeader('Content-type', 'application/json');
        
        xhttp.onload = function () {
            const result = JSON.parse(xhttp.response);
            if(isNaN(result.res)) {
                document.querySelector("#result").innerHTML = result.res;
            } else {
                document.querySelector("#result").innerHTML = parseFloat(result.res);
            }    
        };
        xhttp.send(JSON.stringify(jsonOb));
    }  
};


