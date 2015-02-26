 function animate() //function to animate the tweet content
 {  	   
	  var main_ticker=$("#main_ticker");     //select the #main_ticker element from html
	  main_ticker.css("overflow", "hidden"); //hide scrollbars that appear for this element
	  
	  function animator(currentItem) 
	   { //anonymous function to create jQuery animation
				 
         var dist = currentItem.height(),	 	//height of the element to be used in jQuery animate() function
	     duration = 3000;                 		//duration of animation is 3s
	 
	     //animate the first child of the ticker by moving it up by an amount equal to 'distance'
	     currentItem.animate({ marginTop: -dist }, duration, "linear", function() 
		 {
				 
	         //move current item to the bottom     
	         currentItem.appendTo(currentItem.parent()).css("marginTop", 0);
	 
		     //recurse
		     animator(currentItem.parent().children(":first"));
		}); 
		
	  };
	  
	  //start the ticker
	  animator(main_ticker.children(":first"))
}

function animate_tag() 							  //function to animate the hashtags
{
    var tag_ticker=$("#tag_ticker");             //select the #tag_ticker element from html
	tag_ticker.css("overflow", "hidden");        //hide scrollbars that appear for this element
	  
	function animator(currentItem)               //anonymous function to create jQuery animation for the hash-tags
	{
	     var distance = currentItem.height(),    //height of the element to be used in jQuery animate() function
		 duration = 3000;						 //duration of animation is 3s
	 
		 //animate the first child of the ticker by moving it up by an amount equal to 'distance'
		 currentItem.animate({ marginTop: -distance }, duration, "linear", function() 
		 {
				 
		   //move current item to the bottom     
		   currentItem.appendTo(currentItem.parent()).css("marginTop", 0);
	 
		   //recurse
		   animator(currentItem.parent().children(":first"));
		 });
		
	 };
	 
	 //start the ticker
	 animator(tag_ticker.children(":first"));
	
 }
 
$(document).ready(function app_load()
{
  $.ajax({                     //read in JSON file using AJAX
      type: "GET",
      url: "tweets.json",
      dataType: "json",
	
      success: function (responseData, status)     //each JSON record is stored in responseData
	  {   										   //if JSON file is successfully read, process it and invoke the animations inside this function
           
		var hash=[];     //array to save all the hash-tags
		var j=0;         //variable used to iterate through the above array
		
		
		$.each(responseData, function(i,item)     //this loop collects all the hash-tags and puts it in the hash array above
	    {
		    var hashTags=item.entities.hashtags;
		    hash=getHashtags(hashTags,hash);       //at the end of this loop the hash array will contain all the valid hash-tags prepended with '#'
	    });
	  
	
		
        $.each(responseData, function(i, item)       //iterate through each tweet 
		{
           var text=item.text;                       //extract the tweet content
		   var image=item.user.profile_image_url;    //extract the profile image 
		   var divs = $("<div>");                    //create a new div element 
		   divs.attr("id","ticker");
		
		   //each tweet and its profile image will be displayed using a HTML <table> element having 1 row and 1 column
		   var table=$("<table id='ticker_table'><tr id='row'><td width=80><img id='prof' src='' onerror='this.src=\"anonymous.png\"' height=50 width=50></img></td> <td> <div id ='div'></div> </td></tr></table><div style='height: 3px'/>")
		   
		   //each hashtag will be displayed in HTML by encapsulating it within this tag 
		   var tags=$("<div id='tag'> </div>");
       
		   table.find("#prof").attr("src",image);  //encapsulate the the image into the <table> element under the <prof> tag to transfer it into html
		   table.find("#div").text(text);          //encapsulate the tweet content into the <table> element under the <div> tag to transfer it to HTML
		   
		   divs.append(table);                     //the <divs> element will encapsulate the <table> element
           $("#main_ticker").append(divs);         //finally, the <divs> element is passed to the HTML file using this call
		   
           tags.text(hash[j]);                    //the <tags> element will contain the hash-tag that was extracted
           j=(j+1)%hash.length;	                  //increment j to index into the next hash-tag in the hash array. '%' operator used to cycle through to the beginning after reaching the end	
           $("#tag_ticker").append(tags);	      //the hashtags appended into the <tag> element is passed into HTML
		   
		   animate();      						  //invoke animation of the tweets and profile picture
		   animate_tag();						  //invoke animation for the hash-tags
	    });
	  
	
	  
	  
	}, error: function(msg) {                    // error if JSON file was not successfully read
    alert("There was a problem: " + msg.status + " " + msg.statusText);
    }
  });
  
});


function getHashtags(new_tags,tags)   //this function is used to collect all hash-tags present in new_tags and puts it in an array
{
	var j=tags.length;
	for(var i=0; i<new_tags.length; i++)
	{
		if(new_tags[i]!=undefined || new_tags[i]!='')
		{ 
         	tags[j]='#'+new_tags[i].text;
			j++;
		}
	}
		
	return tags;
}  
