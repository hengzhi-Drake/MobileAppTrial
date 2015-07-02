/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('starter.controllers', [])

.controller('homeNewsCtrl', function ($scope,$rootScope,$cordovaGeolocation,$ionicPlatform,$state,$ionicLoading,searchClasses) {
      
     $scope.goSearch = function () {
            $rootScope.messgeNumber = 0;
            $state.go('tab.search');
    };
    
   // $ionicLoading.show({      template: 'Loading...'    });
    
   
    $ionicPlatform.ready(function(){
         //here 
        
        var posOptions = {timeout: 10000, enableHighAccuracy: false};
        $cordovaGeolocation
          .getCurrentPosition(posOptions)
          .then(function (pos) 
           {
               alert('Got posistion!');
               var myLatlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                var mapOptions = {
                    center: myLatlng,
                    zoom: 8,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                
                var domObj =$(".hbx2Mymap")[0];
                if($.isEmptyNull(domObj) || $.isEmptyNull(domObj)[0])
                {
                    console.log(domObj);
                    alert("dom empty");        
                    return;
                }
               // document.getElementById("map")
                var map = new google.maps.Map(domObj,
                    mapOptions);
                map.setCenter(myLatlng);
               
                $scope.map = map;
               
               
               
          }
          , 
          function(err) 
          {
            alert('Can not get position:'+err.code+":"+err.message);
            console.log(err);
            // error
          });


        
        
        
         console.log($cordovaGeolocation);
    });
    
    //$cordovaGeolocation,
    
   
   
   
    var objthis = this;
    
    var locationService = $cordovaGeolocation;
    
    //console.log(navigator);
    
    //var locationService = navigator.geolocation; // cordova geolocation plugin
    
    if($.isEmptyNull(locationService))
    {
        alert('plugin not working');        
    }
    
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
      
   
        
   // setTimeout(function () {$ionicLoading.show({template: 'Get position...'});}, 5000);
      
   // setTimeout(function () {$ionicLoading.hide();}, 10000);
   
   // $scope.searchClasses = searchClasses.all();
   
   
})

;


