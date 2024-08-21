// add a link of weather url
const apiKey = "ffaf5ae68cb17170075beffd2418fe79";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?APPID=ffaf5ae68cb17170075beffd2418fe79&units=metric&q=";

// access all classes
const seacrhBox = document.querySelector(".search input");
const seacrhBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// that is all the weather and changing parts
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid = ${apiKey}`);

  //error the city
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + "km/h";

    // change the image
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    }
    // hide the part
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

seacrhBtn.addEventListener("click", () => {
  checkWeather(seacrhBox.value);
});
