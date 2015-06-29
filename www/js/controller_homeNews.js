/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('starter.controllers', [])

.controller('homeNewsCtrl', function ($scope,$rootScope,$state,$ionicLoading,searchClasses) {
      
     $scope.goSearch = function () {
            $rootScope.messgeNumber = 0;
            $state.go('tab.search');
    };
    
   // $ionicLoading.show({      template: 'Loading...'    });
    
   
    var objthis = this;
    
    //var locationService = $cordovaGeolocation;
    
    var locationService = navigator.geolocation; // cordova geolocation plugin
    
    if($.isEmptyNull(locationService))
    {
        alert('plugin not working');        
    }
    
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    
    
    
    
    setTimeout(function () {
    locationService.getCurrentPosition({enableHighAccuracy: true, timeout: 15000}
    ).then(function (pos)
    {
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
           
        
    });
    
    },3000);
    
        
   // setTimeout(function () {$ionicLoading.show({template: 'Get position...'});}, 5000);
      
   // setTimeout(function () {$ionicLoading.hide();}, 10000);
   
   // $scope.searchClasses = searchClasses.all();
   
   
})

;


