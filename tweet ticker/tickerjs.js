$(function() {
       
  var main_ticker=$("#main_ticker");
  function animator(currentItem) {
             
    //work out new anim duration
    var distance = currentItem.height(),
    duration = (distance - Math.abs(parseInt(currentItem.css("marginTop")))) / 0.025;
 
    //animate the first child of the ticker
    currentItem.animate({ marginTop: -distance }, duration, "linear", function() {
             
      //move current item to the bottom     
	  currentItem.appendTo(currentItem.parent()).css("marginTop", 0);
 
    //recurse
    animator(currentItem.parent().children(":first"));
    }); 
  };
         
  //start the ticker
  animator(main_ticker.children(":first"));
});