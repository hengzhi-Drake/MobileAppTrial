/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('starter.directives')

.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
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
                    scope.$watch('searchBox.value', function (newValue, oldValue) 
                    {
                        if (!$.isEmptyNull(newValue) 
                                && !$.isEmptyNull(scope.searchBox.needFecthing) 
                                && (newValue.length > attrs.minLength) 
                                && (scope.searchBox.needFecthing)) 
                        {
                            scope.getData({str: newValue}).then(function (results) 
                            {
                                scope.model = results;
                            });
                        } 
                        else 
                        {
                            if(!$.isEmptyNull(scope.searchBox)) 
                            {
                                scope.searchBox.needFecthing = true;
                            }
                            scope.model = [];
                        }
                    });
                }
                scope.test = function(){alert('oooo!');};
                
                scope.clearSearch = function() {
                    scope.searchBox.value = '';
                    scope.searchBox.needFecthing = true;
                };
            },
            template: ['<div class="item-input-wrapper">' +
                        '<i class="icon ion-android-search"></i>' +
                        '<input type="search" ng-enter="test()"  placeholder="{{placeholder}}" ng-model="searchBox.value">' +
                        '<i ng-if="searchBox.value.length > 0" ng-click="clearSearch()" class="icon ion-close"></i>' +
                      '</div>'].join("")
        };
    });

