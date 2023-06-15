const API_Key = "80c0e2a64d9180528d20e2f53ad95081";
const API_URL = "https://api.openweathermap.org";
const API_PATH = "/data/2.5/weather";
const ZIP_CODE = "40390";

let currentWeatherData = null;

window.addEventListener("load", init);

async function init() {
  console.log('hello world');
  try {
    currentWeatherData = await getWeatherData(ZIP_CODE);
    console.log(currentWeatherData);
    // RenderUI(currentWeatherData); // Call your render function here
  } catch (error) {
    console.error('Error:', error);
  }
}

async function getWeatherData(zipcode) {
  try {
    const options = {
      params: {
        zip: zipcode,
        appid: API_Key
      }
    };
    const response = await axios.get(API_URL + API_PATH, options);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
}

// Additional function to check user input and trigger the weather data retrieval
function checkUserInput() {
  console.log('the button is working');
  const input = document.getElementById('input').value;
  const regex = /^[0-9]{5}$/; // Use a regex to match exactly 5 digits

  if (!regex.test(input)) {
    throw new Error('Input is invalid');
  }

  const zipcode = input;
  getWeatherData(zipcode);
}