const confirm = document.querySelector('input[name=confirm]');
const password = document.querySelector('input[name=password]')

// Add event listener for checking the password contents
password.addEventListener('input', (e)=>passwordChecks(e))

function passwordChecks(e){
    let validationString = ''

    // Check if password contains capital letter
    if (/[A-Z]/.test(e.target.value)) {
        validationString +=''    
    } else {
        validationString +="MISSING AT LEAST 1 CAPITAL LETTER \r\n";
    }
    // Check if password contains a number
    if (/\d/.test(e.target.value)) {
        validationString +=''
    } else {
        validationString +="MISSING AT LEAST 1 NUMBER \r\n";
    }
    // Check if password is 8 character long
    if (e.target.value.length<8) {
        validationString +='MUST BE AT LEAST 8 CHARACTERS \r\n';
    } else {
        validationString +=''
    }
    // Add message of current missing values
    const checkStatus = document.querySelector(`input[name=password] + span`);
    checkStatus.textContent = validationString;
}

// Add event lister for checking if passwords match
confirm.addEventListener('input', (e)=>passwordMatchCheck(e))
function passwordMatchCheck(e) {
    // Check if passwords match
    if (confirm.value === password.value) {
      confirm.setCustomValidity('');
    } else {
      confirm.setCustomValidity('Passwords do not match');
    }
    // Add message if passwords do not match
    const checkStatus = document.querySelector(`input[name=confirm] + span`);
    checkStatus.textContent = 'PASSWORDS MUST MATCH';
  }