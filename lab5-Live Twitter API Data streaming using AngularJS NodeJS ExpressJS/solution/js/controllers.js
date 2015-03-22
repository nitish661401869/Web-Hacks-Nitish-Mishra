(function(){
var app=angular.module('App', []);   //declaring the Angular module that is used in HTML in the ng-app directive.
}());

(function(){
 function tweetsController($scope,$http){       //the angular controller that calls the backend service using http call.
	var url = "http://localhost:3000";
	$scope.count=5;                                    // count and tag variables are the ones bound to the HTML to keep track of user input and display tweets accordingly
	$scope.tag="hello";
	$scope.tweet_data=[{text:"Click Button!"}];
	$scope.getTweets=function(){                      //getTweets function is bound to the ng-click directive and is activated when user clicks the button
		$http.get(url + "/getTweets?count=" +$scope.count+"&tag="+$scope.tag).success(function(data)    //calls the twitter API in the back end.
		{
	     console.log("data: "+data[0].text);		
		 $scope.tweet_data=data;	
	  });	
    }	
  }
    tweetsController.$inject=['$scope','$http'];                              //handle minified libraries
    angular.module('App').controller('tweetsController', tweetsController);
}());

