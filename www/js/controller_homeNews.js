/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('starter.controllers')

.controller('homeNewsCtrl', function ($scope,$rootScope,$cordovaSocialSharing,$cordovaGeolocation,$ionicHistory,localNews,$ionicPlatform,$state,$ionicLoading,searchClasses) {
      
     $scope.goSearch = function () {
            $rootScope.messgeNumber = 0;
             //$location.path();
            $state.go('tab.searchMap');
    };
         $scope.goBack = function ()
    {
        $ionicHistory.goBack();
    };
     $scope.localNews = localNews.all();
     
     $scope.shareOut = function()
     {
         console.log($cordovaSocialSharing);
         alert('s');
         $cordovaSocialSharing
    .share('message', 'subject', null, 'http://test.com') // Share via native share sheet
    .then(function(result) {
      alert(0);
    }, function(err) {
      // An error occured. Show a message to the user
    });
         
     }
  
  
   // setTimeout(function () {$ionicLoading.show({template: 'Get position...'});}, 5000);
      
   // setTimeout(function () {$ionicLoading.hide();}, 10000);
   
   // $scope.searchClasses = searchClasses.all();
   
   
})
      
 .controller('testSubStateCtrl', function ($scope,$state,$ionicHistory) {
    $scope.goBack = function ()
    {
       // $state.go('tab.classes');
        $ionicHistory.goBack();
    }; 
  });



