//slider
    var complexity = document.getElementById("slider").value;
    document.getElementById("length").innerHTML = "Length: " + complexity;

// document.getElementById("length").innerHTML = "Length: " + complexity;
function sliderValue(){
     complexity = document.getElementById("slider").value;
     document.getElementById("length").innerHTML = "Length: " + complexity;
}       

  
//pw generator    
function generate(){

    //checkbox options
    var includeUppercase = document.getElementById("includeUppercase").checked;
    var includeLowercase = document.getElementById("includeLowercase").checked;
    var includeNumbers = document.getElementById("includeNumbers").checked;
    var includeSymbols = document.getElementById("includeSymbols").checked;
    
    let values = "";

    if(includeUppercase == true){
        values += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if(includeLowercase == true){
        values += "abcdefghijklmnopqrstuvwxyz";
    }

    if(includeNumbers == true){
        values += "1234567890";
    }

    if(includeSymbols == true){
        values += "!@#$%^&*()_+-=`~";
    }

    let password = "";

    // create for loop to choose pw characters
    for(var i=0; i<= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    }

    //add pw to display area
    document.getElementById("display").value = password;

    //add pw to prev generated pw section 
    document.getElementById("lastNums").innerHTML += password + "<br />";

}

//copy to clipboard button
function copyPassword(){
    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password has been copied to clipboard!");
}
