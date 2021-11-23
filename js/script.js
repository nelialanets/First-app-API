
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
   .then((data) => (data));
   },
   /*-----------------------------
 DOM Vanilla JS
--------------------------------------------------*/
