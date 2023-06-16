const API_Key = "80c0e2a64d9180528d20e2f53ad95081";
const API_URL = "https://api.openweathermap.org";
const API_PATH = "/data/2.5/weather";
//const ZIP_CODE = "40390";

//let currentWeatherData = null;
let currentzipcode = null;
var fetch = document.getElementById("fetch");

fetch.addEventListener("click", checkUserInput) //define the button first dummy
/*async function init() {
  console.log('hello world');
  try {
    currentWeatherData = await getWeatherData(ZIP_CODE);
    console.log(currentWeatherData);
    // RenderUI(currentWeatherData); // Call your render function here
  } catch (error) {
    console.error('Error:', error);
  }
}
*/
try {
  const celsiusElement = document.getElementById("Celsius");
  const fahrenheitElement = document.getElementById("Fahrenheit");

  // Make the Celsius API call
  const celsiusResponse = await axios.get(API_URL);
  const celsiusData = celsiusResponse.data;
  const celsiusTemperature = celsiusData.temperature;
  celsiusElement.textContent = `Temperature in Celsius: ${celsiusTemperature}`;

  // Convert to Fahrenheit
  const fahrenheitTemperature = (celsiusTemperature - 273.15) * 9 / 5 + 32;
  fahrenheitElement.textContent = `Temperature in Fahrenheit: ${fahrenheitTemperature}`;
} catch (error) {
  console.error(error);
}

async function getWeatherData(event) {
  try {
    //go get the data
    zipcode = document.getElementById("zipcode").value
    const options = {
      params: {
        zip: zipcode,
        appid: API_Key
      },
      baseURL: API_URL
    };
    const response = await axios.get(API_PATH, options);
    
    axios.then(function(response)
    {
     return response.data; 
      
    })
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
}

// Additional function to check user input and trigger the weather data retrieval
function checkUserInput() {
  
  console.log('the button is working');
  const input = document.getElementById('zipcode').value;
  const regex = /^[0-9]{5}$/; // Use a regex to match exactly 5 digits
  const zipcode = input;
  if (!regex.test(input)) {
    throw new Error('Input is invalid');
  }
  else{
  getWeatherData();
  }
}