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

// let useUppercase = prompt("Want to generate a random paswword? Type 'Yes' tp continue!");
console.log(useUppercase)

// if(useUppercase === 'Yes'){
//     choices = choices + useUppercaseChars;
// } else {
//     prompt("Oops! Prompt Console is cAsE sEnSiTiVe... feel free to enter any characters to continue or Press 'Ok'.");
// }

function generate(){
    let complexity = document.getElementById("slider").value;

    // possible pw values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    // create for loop to choose pw characters
    for(var i=0; i<= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    }

    //add pw to textbox/display area
    document.getElementById("display").value = password;

    //add pw to prev generated pw section
    document.getElementById("lastNums").innerHTML += password + "<br />";
}

    //copy to clipboard bootstrap button
    function copyPassword(){
        document.getElementById("display").select();

        document.execCommand("Copy");

        alert("Password copied to clipboard!");
    }
