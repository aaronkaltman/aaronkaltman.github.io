//Declare first array
var startupX = ["puppies","kittens","computers","keyboards","pens","calculators","sports"];
//Declare second array
var startupY =  ["cars","sloth","shoes", "music","backpacks","jeans","yoga","private","news"];

//When the create new button is clicked - You clicked me should pop up
document.getElementById("createnew").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("XforY").innerHTML = "YOU CLICKED ME!!!";
}

// Outputs a string containing two variables
console.log("A startup that is %s but for %s",startupX[0],startupY[0]);
