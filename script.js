


//AJAX Call 

$(document).ready(function() {

    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=8ba7a22485b2dbc12c26d0bdf2609619",
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });


  
    // Click Event to pull weather

     $(".button").on("click", function(event) {

      var city = $("#citySearch").val().trim();  

       event.preventDefault();
  
      var weatherData = $(this).attr("data-weather");
      var queryURL = "http://api.openweathermap.org/data/2.5/weather?q= "+ city + "&appid=8ba7a22485b2dbc12c26d0bdf2609619"
      //http://api.openweathermap.org/data/2.5/weather?q= + city name + &appid={API key} "8ba7a22485b2dbc12c26d0bdf2609619"
      
       
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
       console.log(response)

     

      var cityName = response.name;
      console.log(cityName)
     
      var cityWeather = response.main;
      console.log(cityWeather)

      for (var i = 0; i < cityWeather.length; i++) {
      
      var cityDiv = $("<div>");
      
      
      var pTwo = $("<p>").cityName + cityWeather
     
      
      cityDiv.append(pTwo);
      
      $("#weather-view").prepend(cityDiv);
      }
    })
  
     })

    })

   