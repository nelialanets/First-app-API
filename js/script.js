
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
   .then((response) => response.json())
   .then((data) => then.showWeaher(data));
   },
   /*-----------------------------
 DOM Vanilla JS
--------------------------------------------------*/
showWeather: function(data){
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
    //console weather.getWeather("Ukraine")
  