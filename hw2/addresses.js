// Random Address Generator Variables:
var streetName = ["north", "south", "east", "west"];
var zipCode = ["30306","30309","30308","30307"];
var streetNumber = ["1094","2053","6017","2149","807"];
var cityName = ["Atlanta","Miami","Philly","Boston","New York"];

//Random variable generator
var random1 = Math.floor((Math.random() * streetName.length));
var random2 = Math.floor((Math.random() * zipCode.length));
var random3 = Math.floor((Math.random() * streetNumber.length));
var random4 = Math.floor((Math.random() * cityName.length));

// log street number, street name, city name, zipcode
console.log( streetNumber[random3]+ " " + streetName[random1] + ", " + cityName[random4] + " " + zipCode[random2])