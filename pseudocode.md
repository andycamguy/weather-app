
# PROCDURAL
# BEGIN

# INIT -  variables, functions, steps, assumptions, known-knowns, known- unknowns
## Ask a question
* how do I fetch the location data(openweatherdata.org
-    Assumption: user has the appropriate devices to operate the UI
* API key =
- to store data into local storage - stretch goal
-   how does the API engine work?
* How is the data viewed( in a graph?) and what other data do I need to show?
*     The Use Case - How is it used?
      1. user goes to the webpage
      2. the user enters the zip code and clicks the button or presses return on the keyboard
      3a. the user views the data retrieved from the API 
      3b. the user views the error message\
* What data does the user get from the API?
    - city
    - temperature
    - condtions
    - other info like an image

# State 
**  How is state represented? What is State? (it is an object that contains the zip code)
** CurrentWeatherData (the name of state) {
zipcode: "40390", // is it a zipcode?, what about user error?

}
* userInput(the current value of the textfield:zipcode) = {
** CurrentWeatherData: " " // 5 digits, no characters, no special characters
**    previousSearches: [
      requestData:
      resultData: ...
      requestTime: ...
      
# PresentUI - header and the body
* Atomic Design: what are your atoms, molecules, and organisms?
* Waiting for UserInput
* Received User data // modify the UI to display an error or the weather data

## End

# Functional
 * Init() {
 - steps 
 - variables
 - event listeners(click, pressing return, or a key change(called just change)) -> check user input
 

}
```javascript
function displayTemperature(num)
{
//compute temperature based on num parameter

}

function fetchData() // our render function
{
//send the api key and user input to the api

//Axios: where do we get the Data? What do we send to the API? How to bypass any potential costs? 
// how to defensively code to bypass unnecessarily costs?
}

function setState()
{
//how do we set the state of based on the data received from the API?
      
}


function checkUserInput() 
{
// validate the user input to see if correctt
// make sure the textfield provides the input
//input length is 5 digits, no characters, no special characters
// what to do when we have good user input

fetchData();
//what happens when not good data?
     
showError();
// what happens when data is good?

  RenderUI();
}

function RenderUI()
{
 //sees the data from API; updates state and invokes the setState     
      
}
```
# Object-Oriented Programming
* Drawing the object

|"Enter Zip Code"|        |  Click for weather|

|        City        |
|    "Lexington"     |

|    Temperature     |
|     32F |   0C     |

|      Condition     |
|      Rainy         |

|     Other Data     |



``` javascript
// grab data from Axios API
CurrentWeatherData = [ "city name", Temperature, Condition] // how do I fetch the data? from the FetchData function? is this State?
Let weatherDisplay = {
City: FetchData.city
Temperature: FetchData.temperature
Condition: FetchData.condition

}
