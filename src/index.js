import axios from "axios";
let now = new Date();

let p1 = document.querySelector("p1");

let hours = now.getHours();
if (hours < 10) {
  hours = "0" + hours;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = "0" + minutes;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

p1.innerHTML = `${day}, ${hours} : ${minutes}`;

function CityS(event) {
  event.preventDefault();
  let Cities = document.querySelector("h1");
  let City0 = document.querySelector("#city-input");
  let City = City0.value;
  let apiKey = "04a7232c239845d3650fe53654b50aa1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${City}&units=metric`;
  Cities.innerHTML = City0.value;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature1);
}

function TempC(event1) {
  event1.preventDefault();
  let Temp1 = document.querySelector("h2");
  Temp1.innerHTML = "19°C";
}

function TempF(event2) {
  event2.preventDefault();
  let Temp1 = document.querySelector("h2");
  let TempF1 = (19 * 9) / 5 + 32;
  Temp1.innerHTML = `${TempF1}°F`;
}

let citySearch = document.querySelector("form");
citySearch.addEventListener("submit", CityS);

let TempCelcius = document.querySelector("#button1");
TempCelcius.addEventListener("click", TempC);

let TempFahrenheit = document.querySelector("#button2");
TempFahrenheit.addEventListener("click", TempF);

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `Your Latitude is ${position.coords.latitude} and your longitude is ${position.coords.longitude}`;
  let apiKey = "04a7232c239845d3650fe53654b50aa1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  console.log(response.data.main.temp);
  let h2 = document.querySelector("h2");
  let temp = Math.round(response.data.main.temp);
  h2.innerHTML = `${temp} °C`;
}

function showTemperature1(response) {
  console.log(response.data.main.temp);
  let h2 = document.querySelector("h2");
  let temp = Math.round(response.data.main.temp);
  h2.innerHTML = `${temp} °C`;
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);
