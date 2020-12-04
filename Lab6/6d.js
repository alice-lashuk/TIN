function addRow() {
    let text = document.getElementById("input").value
    let table = document.getElementById("tbl");
    let row = table.insertRow();
    let content = row.insertCell(0);
    document.getElementById("input").value = "";
    content.innerText =  text;
}