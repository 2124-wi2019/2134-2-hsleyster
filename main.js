/*Heather Sleyster
sleyster_a02b
INFO 2134
Thoendel
03/17/2020
*/
window.addEventListener('load', function() {
/*These statements assign the Form element to the form variable 
and the select element named 'meal' to the select variable.
*/
const form = document.getElementById('contactForm');
const meal = document.getElementsByName('meal');

/*This if statement checks the value of the selected meal and if
it is empty removes the 'visible' class from the form. If breakfast
is selected the visible class will be added to that option only, if
lunch is selected the visible class will be added to that option only,
if dinner is selected the visible class will be added to that option.
*/

if (meal.value == '') {
    form.classList.remove('visible');
}
    else if (meal.value == 'breakfast'){
        const breakfastOptions = getElementById('breakfastOptions');
        breakfastOptions.classList.add('visible');
    }
        else if (meal.value == 'lunch'){
            const lunchOptions = getElementById('lunchOptions');
            lunchOptions.classList.add('visible');
        }
            else if (meal.value == 'dinner') {
                const dinnerOptions = getElementById('dinnerOptions');
                dinnerOptions.classList.add('visible');
            }
/*These statements assign the elements with id values of firstNameHolder and 
lastNameHolder to the variables firstName and lastName, the input id to the 
variable input, the element with id ageHolder to the age variable, the element 
with the id emailAddress to the emailAddress variable, the element with name of
mealOptions to the mealOption variable, the element with id of mealRating to the
variable mealRating.
*/
const firstName = document.getElementById('firstNameHolder');
const lastName = document.getElementById('lastNameHolder');
const input = document.getElementById('input');
const age = document.getElementById('ageHolder');
const emailAddress = document.getElementById('emailAdress');
const mealOption = document.getElementsByName('mealOptions');
const mealRating = document.getElementById('mealRating');
/*This is the event listener to listen for the blur event and ensures that the 
text in the respective field's  of firstName and lastName first character stays 
upper case and all of the other characters stay lower case it also checks the input of
the age element to see if it is a number and if it is not it will clear the input value
and set the value to empty then focus the cursor back to the ageHolder element.
*/
input.addEventListener('blur', function() {
firstName.input.toLowerCase();
firstName.input[0].toUpperCase();
lastName.input.toLowerCase();
lastName.input[0].toUpperCase();
if(typeof(age.input) != "number"){
    alert('Please input only a number for age');
    age.setAttribute('input', '');
    age.focus();
}
});
/*These statements assign the element errorHolder to the variable errorHolder, removes
the class of 'visible' from the errorHolder class list then removes any children from the
errorHolder element if any.
*/
const errorHolder = document.getElementById('errorHolder');
errorHolder.classList.remove('visible');
while(errorHolder.firstChild) {
    errorHolder.removeChild(errorHolder.firstChild);
}
/*This is an event listener for missing field errors that creates an ul of errors to 
display if any errors occur using the buildErrorList function and applies the errorBox 
class to the error message box.
*/
form.addEventListener('submit', function(e) {
    const errors = [];
    if(firstName.value == ''){
        errors.push('First Name cannot be blank.');
    }
    if(lastName.value == ''){
        errors.push('Last name cannot be blank.');
    }
    if(emailAddress.value == ''){
        errors.push('E-Mail address cannot be blank.');
    }
    if(age.value == ''){
        errors.push('Age cannot be blank.');
    }
    if(meal.value == ''){
        errors.push('You must select a meal.');
    }
    if(mealOption.value == ''){
        errors.push('You must select what you ate.');
    }
    if(mealRating.value == ''){
        errors.push('You must rate your meal.');
    }
    if(errors.length > 0){
        errorHolder.appendChild(buildErrorList());
        errorHolder.classList.add('errorBox');
        errorHolder.classList.add('visible');
        e.preventDefault();
    }
});

//This is the buildErrorList function to create the ul of errors li and appends it.
function buildErrorList() {
    for(let error of errors){
        let list = document.createElement('ul');
        let listItem = document.createElement('li');
        listItem.innerHTML = error;
        list.appendChild(listItem);
    }
}
});