
function catchInput () {
    var query = document.querySelector("#userInput").value
    console.log(query)
return query
}





// Weather
function renderWeather (weather) {
var resultsContainer = document.querySelector("#weatherinfo")
var city = document.createElement("h2")
city.textContent=weather.name;
resultsContainer.append(city);

var temp = document.createElement("p")
temp.textContent = "Temp: "+weather.main.temp+"F"
resultsContainer.append(temp);

var humidity = document.createElement("p")
humidity.textContent = "Humidity: "+weather.main.humidity+"%"
resultsContainer.append(humidity);

var wind = document.createElement("p")
wind.textContent = "Wind: "+weather.wind.speed+"mph"
resultsContainer.append(wind);
}

function fetchweather(query) {
var url ="https://api.openweathermap.org/data/2.5/weather?q=" +query+ "&units=imperial&appid=94dd1994e2e5d5cbf8c8a27e72c2477e"
fetch(url)
.then((response) => response.json())
.then((data)=> renderWeather(data))
}


document.querySelector("#userButton").addEventListener("click", function (event) {
    event.preventDefault()
var query = catchInput();
fetchweather(query)
displayRestaurantAround(query)

  });
// restaurants

var restaurantList= $('#restaurants')
var restaurantLocation = $('#restaurant-name')

function displayRestaurantAround(query) {
  // change lat/long to query
  var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });

  const service = new google.maps.places.PlacesService(map);
  const request = {
    location: pyrmont,
    radius: 5000,
    types: ['restaurant']
  }
  function callback(results){
    console.log(results)
    results.forEach((result) => {
      var span = $("<span></span>");
      span.html("Rating: " + result.rating + "&#9734;");
      var button = $("<button></button>");
      button.attr("type", "button");
      var ol = $('#places')
      var li = $("<li></li>");
      li.text(result.name + " - ");

      li.append(span);
      li.append(button);
      restaurantList.append(li);
    })
  }
  service.nearbySearch(request, callback);

  }
