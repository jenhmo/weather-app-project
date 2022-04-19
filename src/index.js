let now = new Date();
let time = document.querySelector("#current-date");

let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];
let day = days[now.getDay()];
time.innerHTML = `${day} ${hours}:${minutes}`;

function displayWeather(response){
  console.log(response.data);
  document.querySelector("#selected-city").innerHTML = response.data.name;
  document.querySelector("#current-temp").innerHTML = Math.round(response.data.main.temp);
document.querySelector("#humidity").innerHTML = response.data.main.humidity;
document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
document.querySelector("#weather-description").innerHTML = response.data.weather[0].main;
}

function search(event){
  event.preventDefault();
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let city = document.querySelector("#search-city").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit",search);

