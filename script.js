// Variables that the app will use to implement the search
const apiKey = "0a06049708a213c6de1e74f2fe0f162a";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Uses the search fields so that the function can run. When users click the search button, the "checkWeather()" function will run
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

// The city is the parameter that the app will search for when the user enters it
async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

//   Selects the "element/class" and updates the text within the HTML element
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " m/s";

}

checkWeather();