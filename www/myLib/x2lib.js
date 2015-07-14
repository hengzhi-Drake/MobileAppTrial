/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



(function($) {
    $.isEmptyNull = function(str) {
        if ($.IsBoolean(str)) {
            return false
        }
        if (str == null) {
            return true
        }
        if (typeof str == "undefined") {
            return true
        }
        if (str.length == 0) {
            return true
        }
        if (str == "") {
            return true
        }
        return false
    };
    
        $.IsBoolean = function(input) {
        var typeName = typeof(input);
        return typeName == "boolean"
    };
    
    
    
    
    
})(jQuery);