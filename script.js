const apikey = "a154d4d09d96965e529593c2c34143c8";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.getElementById("searchInpt");
const searchButton = document.querySelector(".search button");
const temperature = document.querySelector(".weather h1");
const cityName = document.querySelector(".weather h2");
const windSpeed = document.querySelector(".col1 p");
const humidity = document.querySelector(".col2 p");

async function fetchWeather(city) {
    try {
        const response = await fetch(`${apiurl}${city}&appid=${apikey}`);
    
        if (!response.ok) {
            throw new Error("City not found. Please check the name and try again.");
        }

        const data = await response.json();

        cityName.textContent = data.name;
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        windSpeed.textContent = `${data.wind.speed} km/h`;
        humidity.textContent = `${data.main.humidity}%`;
    } catch (error) {
        console.error("Error fetching weather data:", error.message);
        alert(error.message); 
    }
}

searchButton.addEventListener("click", () => {
    const city = searchInput.value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        alert("City name cannot be empty.");
    }
});
