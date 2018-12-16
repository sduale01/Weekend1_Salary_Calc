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

let monthyCost = 0


$(document).ready(function() {

    // submit button
    $('#submitButton').on('click', addEmployeeToList);

    // delete button
    $('#employeeList').on('click', '.deleteEmployeeBtn', deleteTheEmployee);
    
})




function addEmployeeToList() {
    // Get employee info and add to class
    let newEmployee = new Employee($('.firstNameInput').val(), $('.lastNameInput').val(), $('.idInput').val(), $('.titleInput').val(), $('.annualSalaryInput').val())
    employees.push(newEmployee);
    //Adds employee to list
    $('#employeeList').append(`<li>
     ${$('.firstNameInput').val()}
     ${$('.lastNameInput').val()}
     ${$('.idInput').val()}
     ${$('.titleInput').val()}
     ${$('.annualSalaryInput').val()}
     <button class="deleteEmployeeBtn">delete</button>
    </li>`);

    // calculates monthly cost of each employee and adds it to monthyCost
    let monthlySalary = ($('.annualSalaryInput').val()) / 12
    monthyCost += monthlySalary;

    // changes the total monthly cost when a new employee's salary is added
    $('#monthlyCost').html(`Total Monthly: $ ${(monthyCost.toFixed(2))} `)
    
    // changes color of total monthly to red if greater than 20,000
    if (monthyCost > 20000) {
        $('#monthlyCost').css('color', 'red');
    }

    // clear input fields
    $('.firstNameInput').val('');
    $('.lastNameInput').val('');
    $('.idInput').val('');
    $('.titleInput').val('');
    $('.annualSalaryInput').val('');

}

function deleteTheEmployee() {
    $(this).parent().remove();

    console.log('delete button pressed');
    
    
}