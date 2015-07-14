/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('starter.services')
.factory('DB', function($q, DB_CONFIG) {
        var self = this;
        self.db = null;
        self.init = function () 
        {
            var succesOpen = false;
            if(!succesOpen)
            {
                try {
                    self.db = window.openDatabase("my.db", '1', 'my', 1024 * 1024 * 5); // browser
                   //(database_name, database_version, database_displayname, database_size);
                   succesOpen = true;    
                } 
                catch (e) 
                {
                    alert(e);
                }
             }
             
            for (var tableName in DB_CONFIG.tables) 
            {
                var defs = [];
                var columns = DB_CONFIG.tables[tableName];
                for (var columnName in columns) {
                    var type = columns[columnName];
                    defs.push(columnName + ' ' + type);
                }
                var sql = 'CREATE TABLE IF NOT EXISTS ' + tableName + ' (' + defs.join(', ') + ')';
                self.query(sql);
            }
            
        };

        self.insertAll = function(tableName, data) {
            var columns = [],
                bindings = [];

            for (var columnName in DB_CONFIG.tables[tableName]) {
                columns.push(columnName);
                bindings.push('?');
            }

            var sql = 'INSERT INTO ' + tableName + ' (' + columns.join(', ') + ') VALUES (' + bindings.join(', ') + ')';

            for (var i = 0; i < data.length; i++) {
                var values = [];
                for (var j = 0; j < columns.length; j++) {
                    values.push(data[i][columns[j]]);
                }
                self.query(sql, values);
            }
        };

        self.query = function (sql, bindings) {
            bindings = typeof bindings !== 'undefined' ? bindings : [];
            var deferred = $q.defer();
            if(self == null || self.db==null || self.db.transaction == null)
            {
               return;
            }
            self.db.transaction(function (transaction) 
            {
                transaction.executeSql(sql, bindings, function (transaction, result) {
                    deferred.resolve(result);
                }, function (transaction, error) {
                    deferred.reject(error);
                });
            });

            return deferred.promise;
        };

        self.fetchAll = function (result) {
            var output = [];

            for (var i = 0; i < result.rows.length; i++) {
                output.push(result.rows.item(i));
            }

            return output;
        };

        return self;
    });
  