import axios from 'axios';
currentWeatherData = []; // this is our definition of state.
function fetchData() // our render function
{
//send the api key and user input to the api

//Axios: where do we get the Data? What do we send to the API? How to bypass any potential costs? 
// how to defensively code to bypass unnecessarily costs?
}
function displayTemperature(num)
{

}
function setState()
{
//how do we set the state of based on the data received from the API?
  currentWeatherData = // axios.(something) //saves the data from axios
  
      
}
function checkUserInput() 
{
  // validate the user input to see if correct
  let zip = document.getElementbyId("input") // !!!check the id of the input
  // make sure the textfield provides the input
  try (zip.length == 5)
  {
    fetchData();
    // what happens when data is good?
    //input length is 5 digits, no characters, no special characters
    // what to do when we have good user input
  }
  //input length is 5 digits, no characters, no special characters
  // what to do when we have good user input
catch{
//what happens when not good data?   
showError();
}
  RenderUI();
}
function showError();
{
 //case error: if there are special characters: catch and display it must be a 5 digit number, no characters
 //case error: not a real zipcode: display not a real zip code
  
  break;
}

RenderUI();
{
  displayTemperature();
  setState();
 //sees the data from API; updates state and invokes the setState 
}
