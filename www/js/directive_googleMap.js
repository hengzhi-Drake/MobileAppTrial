/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('starter.directives')
.directive('map', function($ionicPlatform) {
  return {
    restrict: 'E',
    replace:true,
    scope: {
      onCreate: '&',
      setCenter: '&center'
    },
    link: function ($scope, $element,$attr) {
      function initialize() 
      {
        
                 
        var mapOptions = {
          center: new google.maps.LatLng(43.07493, -89.381388),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
        var map = new google.maps.Map($element[0], mapOptions);
  
        $scope.onCreate({map: map});
                
        $scope.setCenter({callback:function(centerPos){
            map.setCenter(centerPos);            
        }});
                
        // Stop the side bar from dragging when mousedown/tapdown on the map
        google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
            e.preventDefault();
          return false;
        });
      }

      $ionicPlatform.ready(function(){
            setTimeout(function () {
                initialize();
                
            },10);
           
          
      });
    
    },
    template: ['<div>' + '</div>'].join("")
  }
});

