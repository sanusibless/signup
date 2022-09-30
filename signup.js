/*const form = document.forms[1]; // targeting form
const input = form.elements[0]; // targeting input control 
const error = document.getElementById('error-desk'); // reference to error class
form.addEventListener('submit', validateForm,false); // what to do after submit button is  click
function validateForm (e) {
    // prevent form from submitting to server
    e.preventDefault();
    // obtaining email from form
    const email = form.email.value;
    // validating the form
    const searchPatter = /^\w+\d*?@\w+\.\w{2,}$/; //search pattern
    // checking for 
    if(searchPatter.test(email) === true) {
        console.log(email);
    } else {
        input.setAttribute('id', "error-sign");
        error.style.display = 'block';
    }

}
input.addEventListener('focus',() => {
        if(input.getAttribute('id') === 'error-sign') {
            input.setAttribute('id','');
            error.style.display = 'none';
        }
    }, false);*/

    /*
 First Name cannot be empty
 Last Name cannot be empty
 It seems this is not an email
 Password cannot be empty
*/

const formfields = 
    {
        firstName() {
                return "First Name cannot be empty"
             } 
            ,
             lastName() {
                 return "Last Name cannot be empty"
             }, 
            email() {
                return "It seems this is not an email";
             },
             passWord() {
                return "Password cannot be empty";
             } 
    }

  
 const form = document.forms[0];


form.addEventListener('focus', handleErr, false);

//form.addEventListener('submit', handleErr, false);
const inputs = [...form.elements]

    for(let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("change", handleErr, false);
    }
function handleErr(e){
    debugger;
    e.preventDefault();
    let event = e.target;
    if(event.value) {
     let el = createElement('label', formfields['firstName']());
     event.appendChild(el)
    } else {
        console.log(new Error("What is wrong!"))
    }
 }

function createElement (tagName, content ) {
    let el = document.createElement(tagName);
    el.textContent = content;
    el.style.color = "hsl(0, 95%, 56%)"
    return el
}













