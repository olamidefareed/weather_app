
const apiKey = '154a65aeca0ad6564bfdacb858786657';
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');
const container = document.querySelector('.container');


function getWeather() {
    const city = cityInput.value.trim();
    if (city === '') {
        alert('Please enter a city name.');
        return;
    }


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const weatherCondition = data.weather[0].main.toLowerCase();
        const temperature = Math.round(data.main.temp - 273.15); 
        const windSpeedMetersPerSecond = data.wind.speed;
        const windSpeedKilometersPerHour = Math.round(windSpeedMetersPerSecond * 3.6);
        



        weatherInfo.innerHTML = `
            <h1>Weather in ${city}:</h1>
            <h3>Condition:${weatherCondition}</h3>
            <h3>Temprature:${temperature}°C</h3>
            <h3>Wind speed:${windSpeedKilometersPerHour} km/h</h3>
        `;


    container.style.backgroundImage = `url('${weatherCondition}.jpg')`;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        alert('Something went wrong..... OR check your internet connetion .');
});
}