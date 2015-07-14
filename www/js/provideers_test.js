/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('starter.services')
.provider('age', {
    $get: function() 
    {
     var testString = "original";
      return {
             getAge:function(){return testString;},
             setAge:function(newAge){testString = newAge}
         };
    }
}
)

//可以写成,几乎一样？
.factory('ageFactory', function()
{
    var age = "original";
    return  {getAge:function(){return age;},
             setAge:function(newAge){age = newAge;}};
})

.service('ageService', function(){
    this.age = "original service";
    this.getAge = function(){return this.age};
     this.setAge = function(newage){this.age = newage};
})

.value('pageCount', 7)
.constant('pageCountc', 7);