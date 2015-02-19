


  $.ajax({
    type: "GET",
    url: "tweets.json",
    dataType: "json",
	
    success: function (responseData, status) {



      $.each(responseData, function(i, item) {

      document.getElementById("para").innerHTML=item.id;

  
	  });
	}, error: function(msg) {
      alert("There was a problem: " + msg.status + " " + msg.statusText);
    }
  });
 

      // // We'll make this request in the onclick event handler for #trigger.
      //$('#coverart').click(function(e) {
      //   // Make a GET request to the given URL for a JSON source.
      //   // In the callback, we'll manipulate the response. This callback accepts
      //   // three arguments: the data, the status, and a jQuery-enhanced
      //   // XMLHttpRequest object. For now, we just need the data.
	  //$.getJSON('lab4.json', function(data) {
      //     // Before the callback, $.parseJSON() has already been called.
      //     // This means it has already been converted from JSON to a JavaScript
      //     // object for us to manipulate.
 
      //     // For the sake of exploring JSON, let's have some fun with it now
      //     // that it's a JavaScript object. We'll iterate through our array of
      //     // individuals with the global $.each() iterator function.

      //     // Recall that data.people is an array.

      //     $.each(data.song, function(key, val) {
      //       alert(val.Artist);
      //     });




      //     // $.each(data.title, function(key, val) {
      //     //   // We can access JSON parsed with parseJSON() just like any other
      //     //   // object's properties.
        
      //     //   alert("You, " + val.name + ", what is your profession?");
      //     //   alert("I'm a " + val.profession);
      //     // });
      //});
	  //}); 