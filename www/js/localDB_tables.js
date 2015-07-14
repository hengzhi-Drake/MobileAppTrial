/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('starter.services')
.constant('DB_CONFIG', {
    name: 'DB',
    tables: {
        users: {
            id: 'integer primary key',
            name: 'text'
        },
        localNews:{
            id:'integer',
            title:'text',
            content:'text'
        },
        myMates:{
            id:'integer',
            title:'text',
            content:'text'
        }
    }
});
