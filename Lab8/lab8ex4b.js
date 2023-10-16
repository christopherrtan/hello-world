let product_quantities = [2, 1, 1, 1, 1];


// array of all products
// corresponds to product_quantities array
// product_quantities[i] is the quantity for products[i]
let products = [
    { 'name': 'small gumball', 'price': 0.02 },
    { 'name': 'medium gumball', 'price': 0.05 },
    { 'name': 'large gumball', 'price': 0.07 },
    { 'name': 'small jawbreaker', 'price': 0.06 },
    { 'name': 'large jawbreaker', 'price': 0.10 }
   ];

document.write("<table>");
//document.write("<tr><th>Product #</th><th>Quantity</th></tr>");
// lab8 part 3.2
document.write("<tr><th>Product #</th><th>Name</th><th>Price</th><th>Quantity</th><th>Extended Cost</th></tr>");
for (let i = 0; i < product_quantities.length; i++) {
    let quantity = product_quantities[i];
    let product = products[i];
    let extended_cost = quantity * product.price;

    document.write("<tr>");
    document.write("<td>" + (i + 1) + "</td>");
    document.write("<td>" + product.name + "</td>");
    document.write("<td>" + product.price.toFixed(2) + "</td>");
    document.write("<td>" + quantity + "</td>");
    document.write("<td>" + extended_cost.toFixed(2) + "</td>");
    document.write("</tr>");
}
//lab 8 part 4.2
document.write("</table>");

let deleteButton = document.createElement('button');

deleteButton.textContent = 'Delete Last Row';

deleteButton.addEventListener('click', deleteLastRow);

document.body.appendChild(deleteButton);

// Lab 8 part 4.1
function addNewRow() {
    let table = document.querySelector('table');

    let newRow = table.insertRow();
    newRow.innerHTML = `
        <td> hi </td>
        <td> hi </td>
        <td> hi </td>
        <td> hi </td>
        <td> hi </td>
    `;
};

document.addEventListener('DOMContentLoaded', function () {
    let table = document.querySelector('table');
    table.addEventListener('click', addNewRow);
});

function deleteLastRow() {
    let table = document.querySelector('table');
    let rowCount = table.rows.length; //gives row count for table

    if (rowCount > 1) {
        table.deleteRow(rowCount - 1);
    }
};