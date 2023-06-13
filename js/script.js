// Defining UI elements
let validation = document.querySelector('#valid');

// Adding EventListener
validation.addEventListener('click', validateUserInput);


function validateExpression(expression, userInput) {
  // Perform the validation using regular expressions
  const regex = new RegExp(expression);
  return regex.test(userInput);
}

function validateUserInput() {
  const userInput = document.getElementById('userInput').value;

  // Get the selected option from the dropdown menu
  const optionSelect = document.getElementById('optionSelect');
  const selectedOption = optionSelect.value;

  // Validate user input based on the selected option
  switch (selectedOption) {
    case 'email':
      // Email validation expression
      const emailExpression = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
      const isValidEmail = validateExpression(emailExpression, userInput);
      let mail = isValidEmail.toString().toUpperCase();
      alert(`Email validation result is:  ${mail}`);
      break;
    case 'phone':
      // Phone number validation expression
      const phoneNumberExpression = /^(\+)?(88)?01([0-9]){9}$/;
      const isValidPhoneNumber = validateExpression(phoneNumberExpression, userInput);
      let phone = isValidPhoneNumber.toString().toUpperCase();
      alert(`Phone Number validation result is:  ${phone}`);
      break;
    case 'postcode':
      // Post code validation expression
      const postCodeExpression = /^([0-9]){4}$/;
      const isValidPostCode = validateExpression(postCodeExpression, userInput);
      let post = isValidPostCode.toString().toUpperCase();
      alert(`Post Code validation result is:  ${post}`);
      break;

    default:
      alert('Invalid option!');
  }
}