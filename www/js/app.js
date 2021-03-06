/* global cordova */
/* global angular */
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic','starter.controllers','starter.directives','starter.providers', 'starter.services','ui.calendar','ngCordova'])

.run(function($ionicPlatform,$rootScope,DB,X2Map,$cordovaSplashscreen,dbIni) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
     
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
    
     
    
     $rootScope.messgeNumber = 2;
     
     $rootScope.rimageDir = "img";
     $rootScope.ggetImg = function(filename){
          return 'img/'+filename;
     }
     
     $rootScope.isBoss = function(){
         return false;         
     }
     
     //to see if is in small
     if(window.screen.availWidth < 375)
     {
         $rootScope.rimageDir = "img/small";     
     }
     
     /*
     var startMs = (new Date).getTime();
        while(!window.sqlitePlugin){
            console.log('waiting');
            var currentMs = (new Date).getTime();
            if( (currentMs - startMs) > 3000){
            alert('timed out waiting for database');
            break;
        }
        }
     */
          
     setTimeout(function() 
     {
        // alert('START DB INI');
        DB.init();
      //  alert('db inied');
          
        dbIni.insertAllUser();
          
        X2Map.getCurrentPosition(function(pos)
        {
                    
        },function(err){
             // alert("error"+err);
        });
          
          
        if(!$.isEmptyNull($cordovaSplashscreen) && !$.isEmptyNull($cordovaSplashscreen.hide))
        {
            alert('to hiden aplash');
            $cordovaSplashscreen.hide();
            alert('splash hidden');
        }
        else
        {
           // alert('cordova splash object empty');
        }
      }, 3*1000);
        
  });
})

.config(function($ionicConfigProvider) {
  $ionicConfigProvider.tabs.position("bottom");
  $ionicConfigProvider.navBar.alignTitle("center");
  $ionicConfigProvider.navBar.positionPrimaryButtons("left");
  $ionicConfigProvider.navBar.positionSecondaryButtons("right");
 })
 
 .config(['$httpProvider', function($httpProvider) {
         
         $httpProvider.defaults.useXDomain = true;
//$httpProvider.defaults.withCredentials = true;
delete $httpProvider.defaults.headers.common["X-Requested-With"];
$httpProvider.defaults.headers.common["Accept"] = "application/json";
$httpProvider.defaults.headers.common["Content-Type"] = "application/json";
         

    }
])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })
  
   .state('tab.me',{
        url:'/me',
        abstract:true,
         views:{
            'tab-me':{
             templateUrl: 'templates/tab-me.html'
         }
      }
    })

 .state('tab.me.testSub', {
        url: '/testSub',
        views:{
            'tab-subView':{
        templateUrl: 'templates/testSubState.html',
        controller: 'testSubCtrl'
         }
      }
       
    })

  // Each tab has its own nav history stack:

  .state('tab.search', {
    url: '/search',
    views: {
      'tab-search': {
        templateUrl: 'templates/tab-search.html',
        controller: 'SearchCtrl'
      }
    }
  })
  .state('tab.homeNews', {
    url: '/homeNews',
    views: {
      'tab-search': {
        templateUrl: 'templates/homeNews.html',
        controller: 'homeNewsCtrl'
      }
    }
  })
 
  .state('tab.searchMap', {
      url: '/searchMap',
          views: {
              'tab-search': {
                  templateUrl: 'templates/tab-search-map.html',
                  controller: 'SearchMapCtrl'
              }
          }
   })
  .state('tab.searchDetail', {
        url: '/search/:classId',
        views: {
            'tab-search': {
                templateUrl: 'templates/search-detail.html',
                controller: 'SearchDetailCtrl'
            }
        }
    })

  .state('tab.classes', {
      url: '/classes',
      views: {
        'tab-classes': {
          templateUrl: 'templates/tab-classes.html',
          controller: 'ClassesCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/classes/:chatId',
      views: {
        'tab-classes': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  }) 
   

   
    
   
    
    ;

  console.log('state defined');

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/homeNews');

});

angular.module('starter.controllers',[]);
angular.module('starter.services', []);
angular.module('starter.directives', []);
angular.module('starter.providers', []);

