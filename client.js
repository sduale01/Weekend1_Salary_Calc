class Employee {
    constructor (firstName, lastName, id, title, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.annualSalary = annualSalary;
    }
}

let employees = [];

let monthlyCost = 0

$(document).ready(function() {

    // submit button
    $('#submitButton').on('click', addEmployeeToList);

    // delete button
    $('#myTable').on('click', '.deleteEmployeeBtn', deleteTheEmployee);
    
})


function addEmployeeToList() {
    // Get employee info and add to class
    let newEmployee = new Employee($('.firstNameInput').val(), $('.lastNameInput').val(), $('.idInput').val(), $('.titleInput').val(), $('.annualSalaryInput').val())
    employees.push(newEmployee);


    //Adds employee to table
    $('#tableBody').append(`<tr><td>
     ${newEmployee.firstName}</td>
     <td>${newEmployee.lastName}</td>
     <td>${newEmployee.id}</td>
     <td>${newEmployee.title}</td>
     <td>${newEmployee.annualSalary}</td>
     <td><button class="deleteEmployeeBtn">delete</button></td>
    </li>`);

    // calculates monthly cost of each employee and adds it to monthlyCost
    let monthlySalary = (newEmployee.annualSalary) / 12
    monthlyCost += monthlySalary;

    // changes the total monthly cost when a new employee's salary is added
    $('#monthlyCost').html(`Total Monthly: $ ${(monthlyCost.toFixed(2))} `)
    
    // changes color of total monthly to red if greater than 20,000
    if (monthlyCost > 20000) {
        $('#monthlyCost').css('color', 'red');
    }

    // clear input fields
    $('.firstNameInput').val('');
    $('.lastNameInput').val('');
    $('.idInput').val('');
    $('.titleInput').val('');
    $('.annualSalaryInput').val('');

}

// deletes employee from the table.
function deleteTheEmployee() {
    $(this).parent().parent().remove();

    console.log('Should remove table row');
    
}