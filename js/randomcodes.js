/* ------ RANDOM CODES ------ */

//Note: submit button is initially disabled upn landing of this page - see <body> in HTML
var code = ' '; //to store generated codes upon and initialize to empty value
var getCode = ' '; //to store entered code
var btnvalue; //for button boolean value
//create variable to hold the type of characters we want to show as codes
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$'

//determine when to able or disable button
function disableButton(btnvalue) {
    document.getElementById("submit").disable = btnvalue; //able/disable button
    if (btnvalue == true) { //test if button is disable or enabled
        //set button and label color translucent
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        //set button and label color with no transparency
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
    }
}

//listen to user input code
var codebox = document.getElementById("codeentered"); //get textbox
codebox.addEventListener("input, evaluateCode");

//Function to generate combination of characters
function generateCode() {
    //Create variables to store generated codes and the type of characters we want to show as codes 
    var code = ' '; //initialize to null value
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$'
        
    //Generate character multiple times using a loop
    for (i = 1; i <= 8; i++) {
        var char = Math.random()* str.length;
        code += str.charAt(char)
    }
    return code;
}
//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

//Disable Button
function disableButton() {
    document.getElementById("submit").disable = true;
}

//Activate function
disableButton();