
console.log("Javascript loaded successfully...!");
const form = document.getElementById("addForm");
form.addEventListener("submit", 
(event) => {
  event.preventDefault();
})
// Adding functionality for creating row 
const table = document.querySelector("#dataTable tbody");
const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click",
() => {
  let name =  document.querySelector("#name");
  let age =  document.querySelector("#age");
  let role =  document.querySelector("#role");
if (name.value !== "" && age.value !== "" && role.value !== "" ) {
 let rowRef = table.insertRow();
 let cell1 = rowRef.insertCell(0);
 cell1.innerText = name.value;
 let cell2 = rowRef.insertCell(1)
 cell2.innerText = age.value;
 let cell3 = rowRef.insertCell(2)
 cell3.innerText = role.value;
 let cell4 = rowRef.insertCell(3)
 cell4.innerHTML = "<button class='delete-btn' onclick='Delete()'>Delete</button>";
name.value = "" ;
age.value = "";
role.value = "";
} 
else {
  return;
}
})
// Adding functionality for deleting row 
function Delete() {
 event.target.parentElement.parentElement.remove()
}
// Adding functionality for filtering row by name 
function filter() {
  const filter = document.querySelector("#filter");
  const filteredValue = filter.value.trim().toLowerCase();
  const tableRows = document.querySelectorAll("#dataTable tbody tr");
  tableRows.forEach(row => {
    const rowChildText = row.children[0].innerText.toLowerCase();
    row.style.display = (rowChildText.includes(filteredValue)) ? "table-row" : "none";
  })
}