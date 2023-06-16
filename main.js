const API_Key = "80c0e2a64d9180528d20e2f53ad95081";
const API_URL = "https://api.openweathermap.org";
const API_PATH = "/data/2.5/weather";

let currentzipcode = null;
const fetchButton = document.getElementById("fetch");

fetchButton.addEventListener("click", checkUserInput);

async function displayTemperature() {
  try {
    const celsiusElement = document.getElementById("Celsius");
    const fahrenheitElement = document.getElementById("Fahrenheit");

    const options = {
      params: {
        zip: currentzipcode,
        appid: API_Key
      },
      baseURL: API_URL
    };

    const response = await axios.get(API_PATH, options);
    const responseData = response.data;

    const temperature = responseData.main.temp;
    const celsiusTemperature = temperature - 273.15;
    const fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;

    celsiusElement.textContent = `Temperature in Celsius: ${celsiusTemperature.toFixed(2)}°C`;
    fahrenheitElement.textContent = `Temperature in Fahrenheit: ${fahrenheitTemperature.toFixed(2)}°F`;
  } catch (error) {
    console.error(error);
  }
}
async function displayCity(responseData) {
  try {
    const cityElement = document.getElementById("cityName");
    const cityData = responseData.name;
    cityElement.textContent = cityData;
  } catch (error) {
    console.error(error);
  }
}
/*async function otherInfo(responseData)
{
  try {
    const otherElement = document.getElementById("otherInfo");
    const otherData = responseData.name;
    cityElement.textContent = otherData;
  } catch (error) {
    console.error(error);
  }
}
*/
async function weatherConditions(responseData) {
  try {
    const conditionsElement = document.getElementById("conditions");
    const weatherData = responseData.weather;

    if (weatherData && weatherData.length > 0) {
      const weatherCondition = weatherData[0].description;
      conditionsElement.textContent = `Weather Conditions: ${weatherCondition}`;
    } else {
      conditionsElement.textContent = "Weather conditions not available";
    }
  } catch (error) {
    console.error(error);
  }
}
async function getWeatherData() {
  try {
    const zipcode = document.getElementById("zipcode").value;
    currentzipcode = zipcode;

    const options = {
      params: {
        zip: zipcode,
        appid: API_Key
      },
      baseURL: API_URL
    };

    const response = await axios.get(API_PATH, options);
    const responseData = response.data;

    return responseData;
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
}

function checkUserInput() {
  const input = document.getElementById('zipcode').value;
  const regex = /^[0-9]{5}$/;
  const zipcode = input;

  if (!regex.test(input)) {
    throw new Error('Input is invalid');
  } else {
    getWeatherData()
    .then(responseData => {
      displayTemperature(responseData);
      displayCity(responseData);
      weatherConditions(responseData);
    })
    .catch(error => console.error(error));
}
}