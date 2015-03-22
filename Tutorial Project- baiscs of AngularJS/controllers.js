 (function(){
      
	 
	 function personController($scope)
	  {
	    $scope.sortBy='name';
        $scope.count=2;
        $scope.getCount=function()
        { $scope.count+=1;}
        $scope.reverse=false;
	    $scope.data=[{name:'Nitish', age:26, DOB:'1988-06-01',  id:100, orders:[{id:450, product: 'ring', amount: 2, price:2.00 }] },
                     {name:'Smruti', age:22, DOB: '1992-04-30', id:101, orders:[{id:451, product: 'shorts', amount: 1, price:6.00 }] },
                     {name:'Lolly', age:22, DOB:'1992-06-03',   id:102, orders:[{id:452, product: 'shirt', amount: 1, price:4.00 }]},
                     {name:'Saswat', age:27, DOB: '1984-06-30', id:103, orders:[{id:453, product: 'pen', amount: 3, price:1.50 }]},
                     {name:'Swagat', age:27, DOB: '1986-05-30', id:104, orders:[{id:454, product: 'fruit', amount: 4, price:2.00 }] }]; 
	    $scope.doSort=function(theName){
	    $scope.sortBy=theName;
	    $scope.reverse=!$scope.reverse;
		  };
	  }
	 personController.$inject=['$scope']; 
    angular.module('personApp').controller('personController', personController);
	  
 }());
  
 
 
 