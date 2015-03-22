(function(){
    
   var controller2= function ($scope, $routeParams)
    {
       
       var personId=$routeParams.pId; //from router
        $scope.orders=null;       //bind to this variable for view. this declaration is not needed, can be used directly in the below loop
        
        function init()
        {
            var len=$scope.customers.length;
            for(var i=0; i<len; i++)
            {
                if($scope.customers[i].id=== parseInt(personId))
                {   
                    $scope.orders=$scope.customers[i].orders;
                    $scope.name=$scope.customers[i].name;
                    break;
                 
                }
            }
        } 
        
        
        
        
 $scope.customers=[{name:'Nitish', age:26, DOB:'1988-06-01',  id:100, orders:[{id:450, product: 'ring', amount: 2, price:2.00}, {id:455, product: 'pendant', amount: 2, price:4.00}] },
                   {name:'Smruti', age:22, DOB: '1992-04-30', id:101, orders:[{id:451, product: 'shorts', amount: 1, price:6.00 }] },
                   {name:'Lolly', age:22, DOB:'1992-06-03',   id:102, orders:[{id:452, product: 'shirt', amount: 1, price:4.00 }]},
                   {name:'Saswat', age:27, DOB: '1984-06-30', id:103, orders:[{id:453, product: 'pen', amount: 3, price:1.50 }]},
                   {name:'Swagat', age:27, DOB: '1986-05-30', id:104, orders:[{id:454, product: 'fruit', amount: 4, price:2.00 }]}];
       
init();
        
        
    }; 
    
    
controller2.$inject=['$scope','$routeParams'];         
angular.module('personApp').controller('controller2', controller2);
  
    
}()); 