//$("button").on("click", function () {

// var city = $(this).attr("aria-label");
function searchcity(city) { }
var city = "Atlanta";

var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" +
    city + "&appid=801906cebc106515bac3bda6ad7c527b";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
    console.log(response.city.name);
    console.log(response.list[0].main.temp);
    console.log(response.list[0].main.humidity);
    console.log(response.list[0].wind.speed);

    var city = $("<h1>").text(response.city.name);
    var temperature = response.list[0].main.temp;
    var tempK = (temperature - 273.15) * 1.80 + 32;
    var tempF = $("<h2>").text("Temperature (F): " + tempK.toFixed(2));
    var humid = $("<h3>").text("Humidity: " + response.list[0].main.humidity + " % ");
    var windspeed = $("<h4>").text("Wind Speed: " + response.list[0].wind.speed);

    var cardbodA = $("#card-body1").append(city, tempF, humid, windspeed);
    $("#current-day").append(cardbodA);









});





//});