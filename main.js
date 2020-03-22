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
const meal = document.getElementByName('meal');

/*The first statement assigns the elements with the name of mealOptionsHolder
to the variable mealOption.This if statement checks the value of the 
selected meal and if it is empty removes the 'visible' class from the form. 
If breakfast is selected the visible class will be added to that option only, 
if lunch is selected the visible class will be added to that option only,
if dinner is selected the visible class will be added to that option.
*/
const mealOption = document.getElementsByName('mealOptionsHolder');
    if (meal.value == 'breakfast'){
        const breakfastOptions = getElementById('breakfastOptions');
        breakfastOptions.classList.remove('hidden');
        breakfastOptions.classList.add('visible');
    }
        else if (meal.value == 'lunch'){
            const lunchOptions = getElementById('lunchOptions');
            lunchOptions.classList.remove('hidden');
            lunchOptions.classList.add('visible');
        }
            else if (meal.value == 'dinner') {
                const dinnerOptions = getElementById('dinnerOptions');
                dinnerOptions.classList.remove('hidden');
                dinnerOptions.classList.add('visible');
            }
/*These statements assign the elements with id values of firstName and 
lastName to the variables firstName and lastName, the age element with id 
age to the age variable, the element with the id firstNameHolder to the
firstNameHolder variable, the element with the id lastNameHolder to the 
lastNameHolder variable, the element with id ageHolder to the ageHolder variable, 
the element with the id emailAddress to the emailAddress variable, 
and the element with id of mealRating to the variable mealRating.
*/
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const firstNameHolder = document.getElementById('firstNameHolder');
const lastNameHolder = document.getElementById('lastNameHolder');
const ageHolder = document.getElementById('ageHolder');
const emailAddress = document.getElementById('emailAdress');
const mealRating = document.getElementById('mealRating');
/*This is the event listener to listen for the blur event on the firstNameHolder
element. It envokes the setNames function.
*/
firstNameHolder.addEventListener('blur', function() {
    setNames(firstName, lastName);
});
/*This is the event listener to listen for the blur event on the lastNameHolder
element. It envokes the setNames function.
*/
lastNameHolder.addEventListener('blur', function() {
    setNames(firstName, lastName);
});
/*This is the setNames function that takes the input on the element and sets 
the first character to upper case.
*/
function setNames(fName, lName){
    let fName = document.getElementById('firstName');
    let lName = document.getElementById('lastName');
    fName.charAt(0).toUpperCase();
    fName.charAt(fName.length).toLowerCase();
    lName.charAt(0).toUpperCase();
    lName.charAt(lName.length).toLowerCase();
}
/*This is the event listener for the ageHolder element. It checks the value
of the age input and sends an error message if a non number value has been 
entered. It then sets the attribute back to empty and refocuses the cursor.
*/
ageHolder.addEventListener('blur' , function(){
    if(Number.isNaN(age.value)){
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
/*These statements remove the visible class from the errorHolder element
sets the attribute to empty and adds the hidden class.
*/
errorHolder.classList.remove('visible');
errorHolder.setAttribute('input', '');
errorHolder.classList.add('hidden');

/*This is an event listener that checks the value of the mealRating
and if zero appends a lable with text, br, and textarea with attributes
to the element with an id of commentsHolder that is assigned to the
commentsHolder variable. If the value of mealRating is more than 0,
it removes the visible class from the commentsHolder element, adds the
hidden class to the commentsHolder element and clears any content in the 
commentsHolder element.
*/
mealRating.addEventListener('click', function(){
    const commentsHolder = document.getElementById('commentsHolder');
    if(mealRating.value == '0'){
        let lable = document.createElement('lable');
        lable.textContent("You rated us zero stars! Please let us know why:");
        commentsHolder.appendChild(lable);
        let br = document.createElement('br');
        commentsHolder.appendChild('br');
        let textArea = document.createElement('textarea');
        textArea.setAttribute('id', "userComments");
        textArea.setAttribute('name', "userComments");
        textArea.setAttribute('rows', "5");
        textArea.setAttribute('cols', "33");
        commentsHolder.appendChild(textArea);
        commentsHolder.classList.add('visible');
    }
        else if(commentsHolder.value > '0'){
            commentsHolder.classList.remove('visible');
            commentsHolder.classList.add('hidden');
            commentsHolder.setAttribute('');
        }
});
/*The first statement assigns the element with the id of ressetButton
to the variable reset.
The event listener removes the visible class from the errorHolder
element, clears any content from the element and sets the class to hidden.
*/
const reset = getElementById('resetButton');
reset.addEventListener('click', function(){
    errorHolder.classList.remove('visible');
    errorHolder.setAttribute('');
    errorHolder.classList.add('hidden');
});
});