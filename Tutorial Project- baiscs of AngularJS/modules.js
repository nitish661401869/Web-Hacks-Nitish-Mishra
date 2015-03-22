//type 2- avoid using global variables like app
//var app=angular.module('personApp',[]);

//type 3

//reference ngRoute in the module and call config to dependency inject the $routeProvider object
//that will be used to  the views with the controllers inside this module 

 (function(){
	var app=angular.module('personApp',['ngRoute']); 
	app.config(function($routeProvider){
		$routeProvider
		     .when('/',{
				controller: 'personController',
				templateUrl: 'persons.html' 
			 })
             .when('/orders/:pId', {
             
              controller: 'controller2',
              templateUrl: 'orders.html'
           })
			 
			 .otherwise({redirectTo: '/'});
			 
		
	});
	
	   
    }());  


 
 
 
 
 
 