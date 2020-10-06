


//Test AJAX Call 

$(document).ready(function() {

    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=8ba7a22485b2dbc12c26d0bdf2609619",
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });


  
    // Click Event to display weather in the console

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

     //Set variable to ojbect.Displays the city name and weather conditions when I click search weather. 
   

     //Get response for city name in the console. 
      var cityName = response.name
      console.log(cityName)
     //Get response for all weather data in the console 
      var cityWeather = response.main;
      console.log(cityWeather)
   // Four loop for city weather information to occur repeatedly
      for (var i = 0; i < cityName + cityWeather.length; i++) {
      
    
      var cityDiv = $("<div>").addclass("card")
      
      // set text content or inner html pass in city name.
      //var pOne = $("<p>").cityName.addclass("card-body").text(cityName);
      //var pTwo = $("<p1>").cityWeather.addclass("card-body").text(reponse.main);
      
      //$( "p1" ).text(pTwo);
      
      cityDiv.append(pOne, pTwo)
     
      $("#card").prepend(cityDiv);
      
      }
     
    
      //var temp1 = results. - 273.15)*1.8)+32;
      
      // set text content or inner html pass in city name and weather information
      $( "h2" ).text(cityName);
      $( "p2" ).text("Feels Like: " + cityWeather.feels_like + "°F");
      $( "p3" ).text("Humidity: " + cityWeather.humidity + " %");
      $( "p5" ).text("Tempurature: " + cityWeather.temp + "°F");

     


    })
  
     })


  
    })
    
    