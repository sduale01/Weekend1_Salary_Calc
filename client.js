$(document).ready(function() {
    $('#submitButton').on('click', addEmployeeToList);


    $('#employeeList').on('click', '.deleteEmployeeBtn', deleteTheEmployee);
    
})

let monthyCost = 0


function addEmployeeToList() {
    //Adds employee to list
    $('#employeeList').append(`<li>
     ${$('.firstNameInput').val()}
     ${$('.lastNameInput').val()}
     ${$('.idInput').val()}
     ${$('.titleInput').val()}
     ${$('.annualSalaryInput').val()}
     <button class="deleteEmployeeBtn">delete</button>
    </li>`);

    let monthlySalary = ($('.annualSalaryInput').val()) / 12
    monthyCost += monthlySalary;

    // changes the total monthly cost when a new employee's salary is added
    $('#monthlyCost').html(`Total Monthly: $ ${monthyCost} `)
    
    // changes backgroung of total monthly to red if greater than 20,000
    if (monthyCost > 20000) {
        $('#monthlyCost').css('background-color', 'red');
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