

$(document).ready(function getCord()
{
$("#con1").addClass("hidden");
  $("#location").val("Initializing...Please Wait");
  if(navigator.geolocation)
     navigator.geolocation.getCurrentPosition(locationSuccess,locationError); 
  else 
	 $("#location").val("Geolocation is not supported in this browser/api");
 
  
 
});

function locationSuccess(pos)
{
	 
	var lat=pos.coords.latitude;
	var lon=pos.coords.longitude;
	fetchWeatherData(lat,lon);
	$('#loading').fadeOut( "slow" );
	$("#con1").removeClass("hidden");
	 
	
}

function fetchWeatherData(latitude,longitude)
{
	 $.ajax
	 ({                     
        type: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&units=metric",
        dataType: "jsonp",
	
        success: function (data, status)
	    { 
		
			 var displayCoord='Latitude: ' + latitude.toFixed(2) + ' / Longitude: ' + longitude.toFixed(2);
			 var locationName=data.name;
			 var image="http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
			 console.log(image);
			 var str="o".sup()+"C";
			 console.log(data.main.temp_max);
			 var currTemp=""+data.main.temp.toFixed(1)+"o".sup()+"C"; 	
			 var maxTemp="   Max: "+data.main.temp_max.toFixed(1)+"o".sup()+"C";
			 var minTemp="    Min: "+data.main.temp_min.toFixed(1)+"o".sup()+"C";
			 var desc=data.weather[0].description;
			 var windSpeed="Wind Speed: "+data.wind.speed.toFixed(1)+" kmph";
			 var humidity=" Humidity: "+data.main.humidity+"%";
			 
			 

		  $("#lat-long").val(displayCoord);
		  $("#name").val(locationName);
		  $("#row2").find("#pic").attr("src",image);
		  document.getElementById("currTemp").innerHTML =currTemp;
		  document.getElementById("minTemp").innerHTML =minTemp;
		  document.getElementById("maxTemp").innerHTML =maxTemp;
		  $("#desc").text(desc);
		  $("#wind").text(windSpeed);
		  $("#humid").text(humidity);
		  
	    },
	  
	    error: function(msg) // error if JSON file was not successfully read
	    {                    
           alert("There was a problem: " + msg.status + " " + msg.statusText);
	    }
	
      }); //end ajax call
}//end function

function locationError(err)
{
	switch(err.code) 
	{
        case error.PERMISSION_DENIED:
            $("location").val("user denied access");
            break;
        case error.POSITION_UNAVAILABLE:
            $("location").val("location data is unavailable");
            break;
        case error.TIMEOUT:
            $("location").val("error: timeout");
            break;
        case error.UNKNOWN_ERROR:
            $("location").val("Unknown Error");
            break;	
   }

}