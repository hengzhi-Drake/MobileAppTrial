// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ui.calendar'])

.run(function($ionicPlatform) {
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
  });
})

.config(function($ionicConfigProvider) {
  $ionicConfigProvider.tabs.position("bottom");
  $ionicConfigProvider.navBar.alignTitle("center");
  $ionicConfigProvider.navBar.positionPrimaryButtons("left");
  $ionicConfigProvider.navBar.positionSecondaryButtons("right");
 })

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

    .state('tab.me', {
        url: '/me',
        views: {
            'tab-me': {
                templateUrl: 'templates/tab-me.html',
                controller: 'MeCtrl'
            }
        }
    })
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/homeNews');

});