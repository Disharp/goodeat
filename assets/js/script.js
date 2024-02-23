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
var url ="https://api.openweathermap.org/data/2.5/weather?q=" +query+ "&appid=94dd1994e2e5d5cbf8c8a27e72c2477e"
fetch(url)
.then((response) => response.json())
.then((data)=> renderWeather(data))
}
fetchweather(query)


