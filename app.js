function onFormSubmit(){
    const formData = readFormData();
    insertNewRecord(formData);
    resetForm();
}

function readFormData(){
    let formData = {};
    formData["date"] = document.getElementById("date").value;
    formData["name"] = document.getElementById("name").value;
    formData["hours"] = document.getElementById("hours").value;
    return formData;

}

function insertNewRecord(data){
    const table = document.getElementById("table").getElementsByTagName('tbody')[0];
const newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.date;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.hours;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onDelete(this)">Delete</a>`;


}

function resetForm(){
    document.getElementById("date").value = "";
    document.getElementById("name").value = "";
    document.getElementById("hours").value = "";
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.date;
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.hours;
}
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
        resetForm();
    }
}
