// Assignment Code
var generateBtn = document.querySelector("#generate");

// initialize arrays for uppercase and lowercase letters, numbers, and special characters
const uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const numbers = ['0','1','2','3','4','5','6','7','8','9']
const special = ['!','@','#','$','%','^','&','*','(',')','_','+','-','=']

// initialize empty characters array
let characters = [];
var retry_length = "Please try again \n Choose a length of min. 8 characters and max. 128 characters"
var retry_selection = "Please try again \n At least one character type should be selected"

// convert array into string

// generate password with user criteria
function generatePassword(){

    // validate length selection and prompt user to retry if doesn't meet criteria
    let length = prompt("Pick your password length (min 8 - max 128)")
    if (length < 8 || length > 128) {
        alert("Password length does not min or max length requirements")
        return retry_length;
    }
    let uppercaseUI = prompt("Do you want uppercase letters? yes or no");
    let lowercaseUI = prompt("Do you want lowercase letters? yes or no");
    let numberUI = prompt("Do you want numbers? yes or no");
    let specialUI = prompt("Do you want special characters? yes or no");

    // push characters into array based on user input
    if (uppercaseUI === 'yes') {
        characters.push(...uppercase)
    }
    if (lowercaseUI === 'yes') {
        characters.push(...lowercase)
    }
    if (numberUI === 'yes') {
        characters.push(...numbers)
    }
    if (specialUI === 'yes') {
        characters.push(...special)
    }
    // validate user character selection and prompt user to retry if none are selected
    if (uppercaseUI === 'no' && lowercaseUI === 'no' && numberUI === 'no' && specialUI === 'no') {
        alert(" At least one character type should be selected")
        return retry_selection
    }

    // convert character array to string
    let passwordString = characters.join('');
    // initialize empty string
    var result = ' ';
    // generate a random password string
    var charactersLength = passwordString.length;
    for ( var i = 0; i < length; i++ ) {
    result += passwordString.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
