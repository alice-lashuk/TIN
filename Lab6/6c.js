function validation() {
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let check = true;
    if(number.length == 0) {
        check = false;
        document.getElementById("number").className="fail-null";
    }

    if (isNaN(number)) {
        check = false;
        document.getElementById("number").className="fail";
    }

    if(!email.match(regex)) {
        check = false;
        if(email.length == 0) {
            document.getElementById("email").className = "fail-null";
        } else {
            document.getElementById("email").className = "fail";
        }
    }
    return check;
} 