const form = document.querySelector("#contactForm");

const firstName = document.querySelector("#firstName");

const firstNameError = document.querySelector("#firstNameError");

const lastName = document.querySelector("#lastName");

const lastNameError = document.querySelector("#lastNameError");

const email = document.querySelector("#email");

const emailError = document.querySelector("#emailError");



function validateForm(event) {

event.preventDefault();


//it checks the length of the first name, it is a if ...else statement
//if...else

//The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed. //
if (checkLength(firstName.value, 0) === true) {

firstNameError.style.display = "none";

} else {

firstNameError.style.display = "block";

}



if (checkLength(lastName.value, 3) === true) {

lastNameError.style.display = "none";

} else {

lastNameError.style.display = "block";

}



if (validateEmail(email.value) === true) {

emailError.style.display = "none";

} else {

emailError.style.display = "block";

}



// if (firstName.value.trim().length > 0) {

// firstNameError.style.display = "none";

// } else {

// firstNameError.style.display = "block";

// }



// if (lastName.value.trim().length > 3) {

// lastNameError.style.display = "none";

// } else {

// lastNameError.style.display = "block";

// }



console.log("hello");

}



form.addEventListener("submit", validateForm);



function checkLength(value, len) {

if (value.trim().length > len) {

return true;

} else {

return false;

}

}



function validateEmail(email) {

const regEx = /\S+@\S+\.\S+/;

const patternMatches = regEx.test(email);

return patternMatches;

}


function testNum (a) {
    let result;
    if (a < 0) {
        result = 'positive';
    } else {
        result = 'NOT positive';
    } return result;
}

console.log(testNum(-5));
// expected output: "NOT positive"

SyntaxError
if (condition) {
    statement1}
    else {
        statement2
    }

//link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else