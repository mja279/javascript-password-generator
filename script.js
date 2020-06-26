// get password length
// character types: upper case, lower, numbers, special characters

// need to validate input
// if min character set selecte
//      if (choicesMade){
//      generatePassword
//      } else{
//    console.log("character criteria not met")
//      }

// generate password
// get the charactersets
//randomly select characters to make PW of X length

// display the PW

let passwordLength= 10
console.log(passwordLength);

let useUppercase = prompt("Want to generate a random paswword? Type 'Yes' tp continue!");
console.log(useUppercase)

if(useUppercase === 'Yes'){
    choices = choices + useUppercaseChars;
} else {
    prompt("Oops! Prompt Console is cAsE sEnSiTiVe... feel free to enter any characters to continue or Press 'Ok'.");
}

