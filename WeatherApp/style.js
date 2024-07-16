
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "930e0ebc9ed4f9cf5eabe5afd87bf4c4";

weatherForm.addEventListener("submit", async event=>{
      event.preventDefault();
      const city = cityInput.value;
      if(city){
        try{
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
        }
        catch(error){
        console.error(error);
        displayError(error);
        }
      }
      else{
            displayError("Please enter a city");
      }
});

async function getWeatherData(city){
 const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
 const response = await fetch(apiUrl);
 if(!response.ok){
      throw new Error("Could not fetch Weather Data");
 }
 return await response.json();

}


function displayWeatherInfo(data){
const {name: city, 
      main:{temp,humidity}, 
      weather:[{description,id}]}=data;
      card.textContent="";
      card.style.display = "flex";

      const cityDisplay = document.createElement("h1");
      const tempDisplay = document.createElement("p");
      const humidityDisplay = document.createElement("p");
      const descDisplay = document.createElement("p");
      const weatherEmoji =document.createElement("p");

      cityDisplay.textContent = city;
      tempDisplay.textContent = `${(temp-273.15).toFixed(1)}°C`;
      humidityDisplay.textContent = `Humidity: ${humidity}%`;
      descDisplay.textContent = description;
      weatherEmoji.textContent =getWeatherEmoji(id);

      cityDisplay.classList.add("cityDisplay");
      tempDisplay.classList.add("tempDisplay");
      humidityDisplay.classList.add("humidityDisplay");
      descDisplay.classList.add("descDisplay");
      weatherEmoji.classList.add("weatherEmoji");

      card.appendChild(cityDisplay);
      card.appendChild(tempDisplay);
      card.appendChild(humidityDisplay);
      card.appendChild(descDisplay);
      card.appendChild(weatherEmoji);
}


function getWeatherEmoji(weatherId){
switch(true){
      case(weatherId>=200&& weatherId<300):
      return "⛈️";
      case(weatherId>=300&& weatherId<400):
      return "🌧️";
      case(weatherId>=500&& weatherId<600):
      return "🌧️";
      case(weatherId>=600&& weatherId<700):
      return "❄️";
      case(weatherId>=700&& weatherId<800):
      return "🌫️";
      case(weatherId===800):
      return "☀️";
      case(weatherId>=800&& weatherId<810):
      return "☁️";
      default:
            return "❓"
}
}
function displayError(message){
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}

var currentHour = new Date().getHours();

// Select the body element
var body = document.querySelector('body');
var button = document.getElementById('dynamic-button');
var input = document.getElementById('myInput');
var style = document.createElement('style');

// Change background based on time
if (currentHour >= 6 && currentHour < 11) {
  body.style.backgroundImage = "url('morning.jpg')";

  button.style.background = "linear-gradient(to right, #FFA500 0%, #FFD700 100%)";

  style.innerHTML = "::placeholder { color: white; }"; // Change 'blue' to the desired placeholder text color
  document.head.appendChild(style);
  
 input.style.color  = "white";
 input.style.background = "linear-gradient(to right, #FFA500 0%, #FFD700 100%)";
  
 button.addEventListener('mouseover', function() {
      button.style.background = "linear-gradient(to right, #FFA500 0%, #FF8C00 100%)";
    });
button.addEventListener('mouseout', function() {
button.style.background = "linear-gradient(to right, #FFA500 0%, #FFD700 100%)";
    }); 

} 

else if (currentHour >= 11 && currentHour < 16) {
      body.style.backgroundImage = "url('afternoon3.jpg')";
      
  button.style.background =  "linear-gradient(to right, #B0E0E6 0%, #87CEEB 50%, #4682B4 100%)";
  
  style.innerHTML = "::placeholder { color: white; }"; // Change 'blue' to the desired placeholder text color
  document.head.appendChild(style);

input.style.color  = "white";
input.style.background = "linear-gradient(to right, #B0E0E6 0%, #87CEEB 50%, #4682B4 100%)";

      button.addEventListener('mouseover', function() {
          button.style.background = "linear-gradient(to right, #87CEEB 0%, #B0E0E6 50%, #87CEEB 100%)";
        });
    button.addEventListener('mouseout', function() {
    button.style.background = "linear-gradient(to right, #B0E0E6 0%, #87CEEB 50%, #4682B4 100%)";
        }); 

}


else if(currentHour >= 16 && currentHour < 18) {
  body.style.backgroundImage = "url('evening.jpg')";
  
  button.style.background = "linear-gradient(to right, #FFA500 0%, #FFD700 100%)";
  
  style.innerHTML = "::placeholder { color: white; }"; // Change 'blue' to the desired placeholder text color
  document.head.appendChild(style);

  input.style.color  = "white";
  input.style.background = "linear-gradient(to right, #FFA500 0%, #FFD700 100%)";

  button.addEventListener('mouseover', function() {
      button.style.background =  "linear-gradient(to right, #FFA500 0%, #FF8C00 100%)";
    });
button.addEventListener('mouseout', function() {
button.style.background = "linear-gradient(to right, #FFA500 0%, #FFD700 100%)";
    }); 

}

else{
 body.style.backgroundImage = "url('night2.jpg')";
 
 button.style.background = "linear-gradient(to right, #333 0%, #333 50%, #666 100%)";
button.style.color="darkgrey";
 style.innerHTML = "::placeholder { color: grey; }"; // Change 'blue' to the desired placeholder text color
 document.head.appendChild(style);

 input.style.color  = "grey";
 input.style.background = "linear-gradient(to right, #333 0%, #333 50%, #666 100%)";

 button.addEventListener('mouseover', function() {
      button.style.background = "linear-gradient(to right, #222 0%, #333 50%, #666 100%)";
    });
button.addEventListener('mouseout', function() {
button.style.background = "linear-gradient(to right, #333 0%, #333 50%, #666 100%)";
    }); 
}