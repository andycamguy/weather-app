const axios = require('axios');
const API_Key = "80c0e2a64d9180528d20e2f53ad95081";
const API_URL = "https://api.openweathermap.org";
let API_PATH ="/data/2.5/weather";
const ZIP_CODE = [40390];
currentWeatherData = null; // this is our definition of state.
window.addEventListener("load",init);

async function init()
{
  console.log('hello world');
  let currentWeatherData = getWeatherData(ZIP_CODE);
}
async function getWeatherData(zipcode) // our render function
{
<<<<<<< dev
//send the api key and user input to the api
try
{
  // trap any errors here on the backend, 500 400 is logic related
  //200 successful call
  // create the options object which is our parameters for the API call
  let options =
      {
        params{
        baseurl:API_URL,
        zip:zipcode,
        appid:API_Key
      }
        
      };
  axios.get(API_PATH, options)
}
  catch(error)
  {
    
  }
//Axios: where do we get the Data? What do we send to the API? How to bypass any potential costs? 
// how to defensively code to bypass unnecessarily costs?
}

function setState()
{
//how do we set the state of based on the data received from the API?
=======
  //send the api key and user input to the api

  //Axios: where do we get the Data? What do we send to the API? How to bypass any potential costs? 
  // how to defensively code to bypass unnecessarily costs?
  
}
function displayTemperature(num) {
// get temperature data from openweather api via axios
}
function setState() {
  //how do we set the state of based on the data received from the API?
>>>>>>> main
  currentWeatherData = // axios.(something) //saves the data from axios
  
      
}
function checkUserInput() {
  // validate the user input to see if correct
  // what happens when data is good? thats why we have the check user input function
  let zip = document.getElementbyId("input").value // !!!check the id of the input to make sure it is correct
  // make sure the textfield provides the input
  const regex = /[!@#$%^&*(),.?":{}|<>]/; // using the regular expression to toss out any and all special characters in the input
  if (regex.test(input)) {
    throw new Error('Input contains special characters');
  }
  try {     //input length is 5 digits, no characters, no special characters
    if (zip.length !== 5) {
      throw new Error('Input has more than 5 integers');
    }
    fetchData();
    // what to do when we have good user input
  RenderUI();
    return false; // No error
  } catch (error) {
    return true; // Error occurred
    
  }
<<<<<<< dev
    if (regex.test(input)) {
    throw new Error('Input contains special characters');
    }
      getWeatherData();
    // what to do when we have good user input

catch{
//what happens when not good data?   

}
  RenderUI();
=======
 
>>>>>>> main
}
RenderUI();
{
  setState();
  displayTemperature();
  //sees the data from API; updates state and invokes the setState 
}
