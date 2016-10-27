var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];

var random1 = Math.floor((Math.random() * startupX.length));
var random2 = Math.floor((Math.random() * startupY.length));


//when clicks on create new button - creates random startup phrase
document.getElementById("cnew").onclick = function() {
    myFunction();
    function myFunction() {
        document.getElementById("XforY").innerHTML = 'A startup that is ' + startupX[random1] +
            ', but for ' + startupY[random2];
    }
};

function saveFaves(){
    localStorage.setItem('favorites',favorite.innerHTML)
}

loadFaves();

function loadFaves() {
    if (localStorage.getItem('favorites')){
        theFaves.innerHtml = localStorage.getItem("favorites");
    }

}
