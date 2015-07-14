/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('starter.services')
.factory('X2Map',function($cordovaGeolocation){
    
    var currentPos = null;
   
    
    return {
             
     codeAddress:function (addressString,callback) 
     {
          var objthis = this;
          var geocoder = new google.maps.Geocoder();
          geocoder.geocode( { 'address': addressString}, function(results, status) 
          {
              if (status == google.maps.GeocoderStatus.OK) 
              {
                callback.call(objthis,results[0].geometry.location);
              } else {
                 alert('Geocode was not successful for the following reason: ' + status);
              }
         });
     },
     
     setMarker:function (locationPos,compiledTag,mapObj)
     {
        var myLocationMarker2 = new google.maps.Marker({
               position: locationPos,
               map: mapObj,
               title: "My Location from address"
        });

         var infowindow = new google.maps.InfoWindow({
             content: compiledTag
         });
          google.maps.event.addListener(myLocationMarker2, 'click', function () {
             infowindow.open(mapObj, myLocationMarker2);
          }); 
         
     },
        
     getCurrentPosition:function (callback,erroCallback)
     {
        var objthis = this;
        var posOptions = {timeout: 10000, enableHighAccuracy: false};
        
       // navigator.geolocation.getCurrentPosition(function (pos) {
        
        $cordovaGeolocation
          .getCurrentPosition(posOptions)
          .then(function (pos) 
          {
                  var myLatlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                  currentPos = myLatlng;
                  callback.call(objthis,myLatlng);
          }
          , 
          function(err) 
          {
            //alert('Can not get position:'+err.code+":"+err.message);
            erroCallback.call(objthis,err);
            // error
          });

     }
    }


})
