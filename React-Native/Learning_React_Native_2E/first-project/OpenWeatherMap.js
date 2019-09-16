const WEATHER_API_KEY = "704a83a5f8f3436366adba0f15c18d38";
const API_STEM = "https://api.openweathermap.org/data/2.5/weather?";

function zipUrl(zip){
    return `${API_STEM}q=${zip}&units=imperia&APPID=${WEATHER_API_KEY}`;
}

function fetchForecast(zip){

    return fetch(zipUrl(zip))
        .then(response => response.json())
        .then(responseJson => {
            return {
                main: responseJson.weather[0].main,
                description: responseJson.weather[0].description,
                temp: responseJson.main.temp
            }
        })
        .catch(error => {
            console.log(error);
        });
}

export default {fetchForecast: fetchForecast};