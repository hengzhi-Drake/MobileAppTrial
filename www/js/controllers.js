angular.module('starter.controllers')
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

.controller('ChatDetailCtrl', function($scope,$stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('SearchDetailCtrl', function ($scope,$ionicPlatform, $stateParams,X2Map, searchClasses, $compile,$timeout, $ionicHistory) {
    $scope.singleClass = searchClasses.get($stateParams.classId);
   
    //get the map handle.
    $scope.mapCreated = function(map) {
         $scope.map = map;
    };
    
   
    
    $scope.setCenter = function(callback)
    {
            X2Map.getCurrentPosition(function (pos) {
            // navigator.geolocation.getCurrentPosition(function (pos) {
                callback.call(this,pos);
             }, function (error) {
                alert('Unable to get location: ' + error.message);
            });
          return;
    };
    
    $scope.goBack = function ()
    {
        $ionicHistory.goBack();
    };
     
     $ionicPlatform.ready(function() 
     {
             /*
          X2Map.getCurrentPosition(function(pos) 
            {
               // document.getElementById("map_searchMap").innerHTML="LOADING...";
                alert('got position , start loading map');
                               
                $scope.map = X2Map.loadmap(document.getElementById("map_searchMap"),pos);
                
                alert('map loaded!');
                return;
                var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
                var compiled = $compile(contentString)($scope);
                
                X2Map.setMarker(pos,compiled[0],$scope.map);
                
                X2Map.codeAddress("2 timpertop dr vermont vic",function(AddressPosition){
                    X2Map.setMarker(AddressPosition,compiled[0],$scope.map);
                });
                
                 X2Map.codeAddress("melbourne",function(AddressPosition){
                    X2Map.setMarker(AddressPosition,compiled[0],$scope.map);
                });
                
                 X2Map.codeAddress("frankston",function(AddressPosition){
                    X2Map.setMarker(AddressPosition,compiled[0],$scope.map);
                });
                
         
         },function(error){X2Map.showError(error,document.getElementById("map_searchMap"))});
         
         */
       
    });
     



  //  initialize();
       //google.maps.event.addDomListener(document.getElementById("map"), 'click', initialize);
       //google.maps.event.addDomListener(window, 'load',Loadmap);

        $scope.centerOnMe = function () {
            if (!$scope.map) {
                return;
            }

            $scope.loading = $ionicLoading.show({
                content: 'Getting current location.....',
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


.controller('SearchCtrl', function ($scope,$http, searchClasses,User,$ionicScrollDelegate,$state) {
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
    
    /*  db may not inited, so leave it here
    User.getFirst(15).then(function(users)
    {
        $scope.users = users;
    });
    */
    
    $scope.getUsersByName = function(str) {
        
        if(!$.isEmptyNull(str))
        {
          return User.getAllByName(str);  
        }
        else
        {
            return null;
        }
   };
   
      
    $scope.searchBox = {"value":"","needFecthing":true};
   // $scope.Thisistest = '';
  
    $scope.optionClick = function(thisuser){
                
        // console.log("clicked");
        $scope.users = [];
        $scope.searchBox.needFecthing = false;
        $scope.searchBox.value = thisuser.name;
       
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
