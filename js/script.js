
/*-----------------------
getting data fro the server useing fetch 
---------------------*/
 let weather = {
   apiKey: "437cd5edd9df6b75d4af0f426d22d7ef",
   getWeather:function (city){
       fetch (
       "https://api.openweathermap.org/data/2.5/weather?q="
       + city
       + "&units=metric&appid="
       + this.apiKey
       )
   .then((response) => {
     if( !response.ok){
       alert ("No weather data was found.");
     }
     return response.json();
    })
   .then((data) => this.displayWeather(data));
   },
   /*-----------------------------
 DOM Vanilla JS
--------------------------------------------------*/
displayWeather: function(data){
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const{ speed } = data.wind;
    //console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = " Weather in "  + name;
    document.querySelector(".icon").src =
    "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%";
    document.querySelector(".wind").innerText= "Wind speed:" + speed + "km/h"
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" +  name + ")";
},
    //console weather.getWeather("Ukraine")
  /*--------------------
EventListeners
-------------------------*/
userInput: function(){
    this.getWeather(document.querySelector(".searchCity").value);
 }, 
 //defining the function to get the value on the input in the search bar
}; 
  
 // add EventListened to the search button
 document.querySelector(".search").addEventListener("click", function(){ weather.userInput();
 });
 //add EventListened to a search  bar so the user could cklick enter keypad
 document.querySelector(".searchCity").addEventListener("keyup", function (evt){ if(evt.key == "Enter"){
    weather.userInput();
 }
 });
 