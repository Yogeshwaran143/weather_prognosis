const weather = document.getElementById('submit');
const cityName = document.getElementById('cityname');
const APIkey = '21e155a774c4341a4b53a5ff40431ced';
let Location = document.getElementById('location');
let tempValue = document.getElementById('temp-value');
let cityClimate = document.getElementById('city_climate');
let weatherIcon = document.getElementById('weather_icon');

weather.addEventListener('click', (event) => {
    event.preventDefault();
    if (cityName.value != '') {
        requestWeather(cityName.value);
    }
});

function requestWeather(city) {
    let API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}`;
    fetch(API).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        const {name} = data;
        const {feels_like} = data.main;
        const {id, main} = data.weather[0];
        Location.innerHTML = name;
        tempValue.innerHTML = Math.round(feels_like - 273.15);
        cityClimate.innerHTML = main;
        if (id >= 200 && id <= 232) {
            changeBackground('thunderstrom.jpg');
        } else if (id >= 300 && id <= 321) {
            changeBackground('drizzle.jpg');
        } else if (id >= 500 && id <= 531) {
            changeBackground('rain.jpg');
        } else if (id >= 600 && id <= 622) {
            changeBackground('snow.jpg');
        } else if (id >= 700 && id <= 781) {
            changeBackground('atmoshphere.jpg');
        } else if (id == 800) {
            changeBackground('clearsky.jpg');
        } else if (id >= 801 && id <= 804) {
            changeBackground('clouds.jpg');
        };
    })
    document.getElementById('location-div').classList.add('active');
    document.getElementById('result-div').classList.remove('active');
}
function changeBackground(image_Name) {
    document.body.style.backgroundImage = `url(${image_Name})`;
}
