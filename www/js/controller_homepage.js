/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('starter.controllers', [])

.controller('homeNewsCtrl', function ($scope,$rootScope,$state,$ionicLoading,searchClasses) {
      
     $scope.goSearch = function () {
         
         /*
             var myAccountInfo={};
              X2Test.test(myAccountInfo,function(result){
                  alert('Done');
                  alert(result.Msg);
                  console.log(result);
              })
           */    
               
             $rootScope.messgeNumber = 0;
               
               
        
        $state.go('tab.search');
    };
    
    $ionicLoading.show({
      template: 'Loading...'
    });
        
    setTimeout(function () {$ionicLoading.show({template: 'Get position...'});}, 5000);
      
    setTimeout(function () {$ionicLoading.hide();}, 10000);
    
    $scope.searchClasses = searchClasses.all();
   
   
})

