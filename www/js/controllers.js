angular.module('starter.controllers', [])
 .controller('SearchMapCtrl', function ($scope, searchClasses, $ionicScrollDelegate,$timeout, $ionicHistory, $state) {
    $scope.showList = function () {
         $state.go('tab.search');
    };
    
    $scope.goHome = function () {
        $state.go('tab.homeNews');
    };
    
    $scope.hbEventClick = function(calEvent, jsEvent, view) {

        alert('Event: ' + calEvent.title);
        alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
        alert('View: ' + view.name);

        // change the border color just for fun
        $(this).css('border-color', 'red');
        
       // $('#calendar').fullCalendar('option', 'height', 700);

    };
    
    
    
    $scope.dayclick = function(date, jsEvent, view)
    {
         // alert('Clicked on: ' + date.format());
                      //  alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
                      //  alert('Current view: ' + view.name);
                        // change the day's background color just for fun
                      //  $(this).css('background-color', 'grey'); agendaDay
                         $("#divCalendar").fullCalendar( 'changeView', "agendaWeek" );
    };
    
    $scope.getEvents = function(start, end, timezone, callback) {
        //alert(start);
        //alert(end); 
        var myEvents = [
        {
            title: 'Event1',
            start: '2015-06-10'
        },
        {
            title: 'Event2',
            start: '2015-06-11T10:30:00',
            end: '2015-06-11T12:30:00'
        }
        // etc...
        ];
        callback(myEvents);
        
        /*
        $.ajax({
            url: 'myxmlfeed.php',
            dataType: 'xml',
            data: {
                // our hypothetical feed requires UNIX timestamps
                start: start.unix(),
                end: end.unix()
            },
            success: function(doc) {
                var events = [];
                $(doc).find('event').each(function() {
                    events.push({
                        title: $(this).attr('title'),
                        start: $(this).attr('start') // will be parsed
                    });
                });
                callback(events);
            }
        });
        */
        
        
    };

     $scope.uiConfig = {
      calendar:{
        height: 450,
        events:$scope.getEvents,
        eventClick:$scope.hbEventClick,
        eventLimit: true, 
        scrollTime:'08:00:00',
        color: 'yellow',   // an option!
        textColor: 'black', // an option!
        editable: true,
        selectable:true,
        dayNamesShort:['Su', 'Mo', 'Tu', 'We','Th', 'Fr', 'Sa'],
        //header:false,
        header:{
            left:   'prev,today,next',
            center: 'title',
            right:  'agendaDay,agendaWeek,month'
        },
        dayClick: $scope.dayclick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize
      }
    };
    
     $ionicHistory.clearHistory();
    })


.controller('ClassesCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope,app, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('SearchDetailCtrl', function ($scope, $stateParams, searchClasses, $compile,$timeout, $ionicHistory) {
    $scope.singleClass = searchClasses.get($stateParams.classId);
    
    $scope.goBack = function ()
    {
        $ionicHistory.goBack();
     }
     
     function codeAddress(addressString,callback) 
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
     }
     
     function SetMarker(addressString)
     {
         codeAddress(addressString,function(newLocation){
                var myLocationMarker2 = new google.maps.Marker({
                       position: newLocation,
                       map: $scope.map,
                       title: "My Location from address"
                });

                 var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
                 var compiled = $compile(contentString)($scope);
                 var infowindow = new google.maps.InfoWindow({
                     content: compiled[0]
                 });
                  google.maps.event.addListener(myLocationMarker2, 'click', function () {
                     infowindow.open($scope.map, myLocationMarker2);
                  }); 
         })
     }
     
     function GetCurrentPosition(callback)
     {
         var objthis = this;
           var locationService = navigator.geolocation; // cordova geolocation plugin
           locationService.getCurrentPosition(
               function(pos) {
                   callback.call(objthis,pos);
               },
               function(error) {
                   showError(error);
               }, 
               {enableHighAccuracy: true, timeout: 15000}
           );
     }
     
     function showError(error) {
         var x = document.getElementById("map");
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    x.innerHTML = "User denied the request for Geolocation."
                    break;
                case error.POSITION_UNAVAILABLE:
                    x.innerHTML = "Location information is unavailable."
                    break;
                case error.TIMEOUT:
                    x.innerHTML = "The request to get user location timed out."
                    break;
                case error.UNKNOWN_ERROR:
                    x.innerHTML = "An unknown error occurred."
                    break;
            }
   }

    function Loadmap()
    {
            document.getElementById("map").innerHTML = "Getting your position..";
            
            GetCurrentPosition(function(pos) 
            {
                document.getElementById("map").innerHTML = "Got your position....";
                var myLatlng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                var mapOptions = {
                    center: myLatlng,
                    zoom: 8,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
                var map = new google.maps.Map(document.getElementById("map"),
                    mapOptions);
                map.setCenter(myLatlng);
               
                $scope.map = map;

                var myLocationMarker = new google.maps.Marker({
                        position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                        map: map,
                        title: "My Location"
                 });
                var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
                var compiled = $compile(contentString)($scope);
                var infowindow = new google.maps.InfoWindow({
                    content: compiled[0]
                });
                 google.maps.event.addListener(myLocationMarker, 'click', function () {
                    alert('marker clicked');
                    infowindow.open(map, myLocationMarker);
                });
                                
                SetMarker('32 timbertop dr vermont vic');
                
            });
 
           

            /*
        //Marker + infowindow + angularjs compiled ng-click
            var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";

            var compiled = $compile(contentString)($scope);

            var infowindow = new google.maps.InfoWindow({
                content: compiled[0]
            });

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: 'Piano lession(....)'
            });

            google.maps.event.addListener(marker, 'click', function () {
                alert('marker clicked');
                infowindow.open(map, marker);
            });
            */
            

    }
    
   $timeout(function(){
        Loadmap();
    });


  //  initialize();
       //google.maps.event.addDomListener(document.getElementById("map"), 'click', initialize);
       //google.maps.event.addDomListener(window, 'load',Loadmap);

        $scope.centerOnMe = function () {
            if (!$scope.map) {
                return;
            }

            $scope.loading = $ionicLoading.show({
                content: 'Getting current location...',
                showBackdrop: false
            });

            navigator.geolocation.getCurrentPosition(function (pos) {
                $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                $scope.loading.hide();
            }, function (error) {
                alert('Unable to get location: ' + error.message);
            });
        };

        $scope.clickTest = function () {
            alert('Example of infowindow with ng-click')
        };


})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('MeCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
})

.controller('homeNewsCtrl', function ($scope,$state,searchClasses) {
      
     $scope.goSearch = function () {
        $state.go('tab.search');
    };
    
    $scope.searchClasses = searchClasses.all();
   
   
})

.directive('ionSearch', function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                getData: '&source',
                model: '=?',
                searchBox: '='
            },
            link: function(scope, element, attrs) 
            {
                attrs.minLength = attrs.minLength || 0;
                scope.placeholder = attrs.placeholder || '';
                              
                if (attrs.class)
                    element.addClass(attrs.class);

                if (attrs.source) 
                {
                    scope.$watch('searchBox.value', function (newValue, oldValue) {
                        if (newValue.length > attrs.minLength && scope.searchBox.needFecthing) {
                            scope.getData({str: newValue}).then(function (results) 
                            {
                                scope.model = results;
                                console.log('fetching data');
                                
                            });
                        } 
                        else 
                        {
                            scope.searchBox.needFecthing = true;
                            scope.model = [];
                        }
                    });
                }
                
                scope.clearSearch = function() {
                    scope.searchBox.value = '';
                    scope.searchBox.needFecthing = true;
                };
            },
            template: ['<div class="item-input-wrapper">' +
                        '<i class="icon ion-android-search"></i>' +
                        '<input type="search" placeholder="{{placeholder}}" ng-model="searchBox.value">' +
                        '<i ng-if="searchBox.value.length > 0" ng-click="clearSearch()" class="icon ion-close"></i>' +
                      '</div>'].join("")
        };
    })

.controller('SearchCtrl', function ($scope, searchClasses,User,$ionicScrollDelegate,$state) {
    $scope.searchClasses = searchClasses.all();
    $scope.remove = function (singleClass) {
        searchClasses.remove(singleClass);
    };
    
    $scope.showMap = function () {
        $state.go('tab.searchMap');
    };
    
    $scope.goHome = function () {
        $state.go('tab.homeNews');
    };
    
    
    $scope.users = [];
    User.getFirst(15).then(function(users)
    {
        $scope.users = users;
    });
    
    $scope.getUsersByName = function(str) {
     return User.getAllByName(str);
   };
   
      
    $scope.searchBox = {"value":"","needFecthing":true};
   // $scope.Thisistest = '';
  
    $scope.optionClick = function(thisuser){
                
        // console.log("clicked");
        $scope.users = [];
        $scope.searchBox.needFecthing = false;
        $scope.searchBox.value = thisuser.name;
       
        //need to update results list
       
       
    };
  
    $scope.searchViewBack = function ()
    {
        $ionicScrollDelegate.$getByHandle('mainScroll').scrollTop(true);
       // $ionicScrollDelegate.scrollTop();  this if for all
    }
    
      
    $scope.countItem = 0;
    $scope.loadMore = function ()
    {
           setTimeout(function () {

                  var newResult = {
                       id: 10 + $scope.countItem,
                       name: 'Piano training ' + (10 + $scope.countItem),
                        descrption: 'This is a description',
                        address: '3 timeber top dr ave',
                        contact: '03 12345678'
                    };

                  searchClasses.add(newResult);
                  $scope.countItem++;

                  $scope.$broadcast('scroll.infiniteScrollComplete');



                }, 1000)
      
        
        //$http.get('/more-items').success(function (items) {
        //    useItems(items);
        //    $scope.$broadcast('scroll.infiniteScrollComplete');
        //});


    };

    $scope.$on('$stateChangeSuccess', function () {
        //$scope.loadMore();
        $scope.searchViewBack();
    });

})


;
