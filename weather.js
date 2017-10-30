//Homework 2 - jkunii
//Obs: I left two versions of resolutions. The first one is based on given latitude and longitude. And the second is based on the urrent location

//Exercise 1) Show Chicago's weather in the widget when the Get Current Temperature button is clicked

//// Function that creates the URL that shows the weather forecast for a given latitude and longitude
 //let getWeather = function() {
   //let latitude = '41.8781';
   //let longitude = '-87.6298';
   //let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?'
   //openweathermap_api_url += 'lat=' + latitude
   //openweathermap_api_url += '&lon=' + longitude
  // openweathermap_api_url +='&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'

//// Transform the URL into a JSON
//// Reaction to the click
   //fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError);
 //}
 //let link = document.getElementById("get_forecast")
       //link.addEventListener("click", getWeather);
     //let convertToJSON = function(response) {
  // return response.json();
// }

//// Change the text shown in the webpage
 //let updateWeather = function (dataFromService) {
   //city = dataFromService.name;
   //temp = dataFromService.main.temp;
   //icon = dataFromService.weather[0].icon;
   //console.info(dataFromService)
   //document.querySelector('.card-title').innerHTML = city;
   //document.querySelector('.card-text').innerHTML = "It is "+ temp + " degrees outside";
   //document.querySelector('.card-img-top').src = "http://openweathermap.org/img/w/" + icon + ".png";
 //}

//// Show window in case of error
 //let displayError = function(error) {
   //console.debug(error);
  // window.alert("Sorry, something went wrong.");
// }


///////////////////////////////////////////////

// Exercise 2) Emit the user's actual location into the console; show the weather based on the location

// Function that creates the URL that shows the weather forecast, based on a specific latitude and longitude
let getWeather = function() {
  let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?'
  openweathermap_api_url += 'lat=' + latitude
  openweathermap_api_url += '&lon=' + longitude
  openweathermap_api_url +='&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'
  console.debug("The Latitude is " + latitude);
  console.debug("The Longitude is " + longitude);

// Transform the URL into a JSON
fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError);
}

//Determine the latitude and Longitude expression
function getGeoLocation (info) {
  latitude = info.coords.latitude.toFixed(4);
  longitude = info.coords.longitude.toFixed(4);
  getWeather()
}

// Activate the geolocation function when click the website
  let link = document.getElementById("get_forecast")
       link.addEventListener("click", function(event) {
       event.preventDefault();
       navigator.geolocation.getCurrentPosition(getGeoLocation);
     });

//respond through JSON
let convertToJSON = function(response) {
  return response.json();
}

//////////////////////////////////////////////////////

//Exercise 3) Use the user's actual location to update the widget
// And Exercise 4) Update the weather icon in the widget

// Update the text  and the icon that appears in the website page
let updateWeather = function (dataFromService) {
  city = dataFromService.name;
  temp = dataFromService.main.temp;
  icon = dataFromService.weather[0].icon;
  console.info(dataFromService)
  document.querySelector(".card-title").innerHTML = city;
  document.querySelector(".card-text").innerHTML = "It is "+ temp + " degrees outside";
  document.querySelector('.card-img-top').src = "http://openweathermap.org/img/w/" + icon + ".png";
}
/////////////////////////////////////////////////////

// In case of error
let displayError = function(error) {
  console.debug(error);
  window.alert("Sorry, something went wrong.");
}
