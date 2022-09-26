// Partner js code
var photos = [];
var fileNames = [];
var imageList = [];
var image;
var openList = "<li class='partners'>";
var closeList = "</li>";

for (var i=0; i < 6; i++) {
    fileNames.push("partner" + (i+1));
    photos.push("<img src='images/" + fileNames[i] + ".png'>");
    image = openList + photos[i] + closeList;
    imageList.push(image);
        }

document.getElementById("partners").innerHTML = imageList.join("");

/* ----- RANDOM CODES -----*/

//Function to generate combination of characters
var getCode = ' ';
var btnvalue; 
var code = ' ';
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';


//Function to generate combination of characters
function generateCode() {
    //Generate character multiple times using a loop
    for (i=1;i<=8;i++) {
        var char = Math.random() * str.length;
        code += str.charAt(char);
    }
    return code;
};

//Get HTML element to display
document.getElementById('codes').innerHTML = generateCode();

//Disable Button
function disableButton(btnvalue) {
    document.getElementById("submit").disabled = btnvalue;
    if (btnvalue == true) {
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 1)";
        document.getElementById("submit").style.color = "rgba(255, 255, 255, 1)";
    }

};

//listen to user input code
var codebox = document.getElementById("codeentered");
codebox.addEventListener("input", evaluateCode);

function evaluateCode() {
    getCode = document.getElementById("codeentered").value; 
    var charset1 = getCode.trim();
    var charset2 = code.trim();
    //test if code entered matches the number of generated codes
    if (charset1.length == charset2.length && charset1 == charset2) {
        disableButton(false); //enable the button
    }
};


