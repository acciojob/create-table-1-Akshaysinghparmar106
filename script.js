function insertRow() {
    let table = document.getElementById("myTable");

    // Insert row at top (index 0)
    let newRow = table.insertRow(0);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}
