angular.module('starter.services', [])

 .factory('searchClasses', function ()
{
    var searchClasses = [
        {
            id: 0,
            name: 'Piano training 1',
            description: 'This is a description',
            address: '3 timeber top dr ave',
            contact: '03 12345678'
        },
    {
        id: 2,
        name: 'Piano training 2',
        description: 'This is a description',
        address: '3 timeber top dr ave',
        contact: '03 12345678'
    },
    {
        id: 3,
        name: 'Piano training 3',
        description: 'This is a description',
        address: '3 timeber top dr ave',
        contact: '03 12345678'
    },
    {
        id: 4,
        name: 'Piano training 4',
        description: 'This is a description',
        address: '3 timeber top dr ave',
        contact: '03 12345678'
    },
    {
        id: 4,
        name: 'Piano training 4',
        description: 'This is a description',
        address: '3 timeber top dr ave',
        contact: '03 12345678'
    }
    ,
    {
        id: 4,
        name: 'Piano training 4',
        description: 'This is a description',
        address: '3 timeber top dr ave',
        contact: '03 12345678'
    }
    ,
    {
        id: 4,
        name: 'Piano training 4',
        description: 'This is a description',
        address: '3 timeber top dr ave',
        contact: '03 12345678'
    }
    ,
    {
        id: 4,
        name: 'Piano training 4',
        description: 'This is a description',
        address: '3 timeber top dr ave',
        contact: '03 12345678'
    }
    ,
    {
        id: 4,
        name: 'Piano training 4',
        description: 'This is a description',
        address: '3 timeber top dr ave',
        contact: '03 12345678'
    }
    ,
    {
        id: 5,
        name: 'Piano training 5',
        description: 'This is a description',
        address: '3 timeber top dr ave',
        contact: '03 12345678'
    }


    ];

    return {
        all: function () {
            return searchClasses;
        },
        remove: function (singleclass) {
            searchClasses.splice(searchClasses.indexOf(singleclass), 1);
        },
        add:function(newClass)
        {
            searchClasses.push(newClass);
        },
        get: function (classId) {
            for (var i = 0; i < searchClasses.length; i++) {
                if (searchClasses[i].id === parseInt(classId)) {
                    return searchClasses[i];
                }
            }
            return null;
        }
    };

})

///factory template
.factory('FTemplate',function(){
   var self = this;
   var cmdServerUrl = '';
   
   return self;
})


.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.constant('DB_CONFIG', {
    name: 'DB',
    tables: {
        users: {
            id: 'integer primary key',
            name: 'text'
        }
    }
})
.factory('DB', function($q, DB_CONFIG) {
        var self = this;
        self.db = null;
        self.init = function () {
            if (window.sqlitePlugin)
                self.db = window.sqlitePlugin.openDatabase({name: DB_CONFIG.name});
            else if (window.openDatabase)
                self.db = window.openDatabase(DB_CONFIG.name, '1.0', 'database', -1);

            for (var tableName in DB_CONFIG.tables) {
                var defs = [];
                var columns = DB_CONFIG.tables[tableName];
                for (var columnName in columns) {
                    var type = columns[columnName];
                    defs.push(columnName + ' ' + type);
                }
                var sql = 'CREATE TABLE IF NOT EXISTS ' + tableName + ' (' + defs.join(', ') + ')';
                self.query(sql);
            }
          self.insertAll('users', [
    {
        "id": 0,
        "name": "Atkinson Jenkins"
    },
    {
        "id": 1,
        "name": "Kent Cook"
    },
    {
        "id": 2,
        "name": "Sandoval Kramer"
    },
    {
        "id": 3,
        "name": "Adrienne Rutledge"
    },
    {
        "id": 4,
        "name": "Ebony Bryant"
    },
    {
        "id": 5,
        "name": "Amalia Bernard"
    },
    {
        "id": 6,
        "name": "Faulkner Lang"
    },
    {
        "id": 7,
        "name": "Foley Pickett"
    },
    {
        "id": 8,
        "name": "Lenore Jarvis"
    },
    {
        "id": 9,
        "name": "Marisa Frazier"
    },
    {
        "id": 10,
        "name": "Kristine Johns"
    },
    {
        "id": 11,
        "name": "Burnett Stokes"
    },
    {
        "id": 12,
        "name": "Lucille Fowler"
    },
    {
        "id": 13,
        "name": "Pollard Clark"
    },
    {
        "id": 14,
        "name": "Vega Hendrix"
    },
    {
        "id": 15,
        "name": "Jones Ortega"
    },
    {
        "id": 16,
        "name": "Irwin Stone"
    },
    {
        "id": 17,
        "name": "Phyllis Rosario"
    },
    {
        "id": 18,
        "name": "Beverly Dalton"
    },
    {
        "id": 19,
        "name": "Cervantes Blair"
    },
    {
        "id": 20,
        "name": "Simmons Diaz"
    },
    {
        "id": 21,
        "name": "Toni Molina"
    },
    {
        "id": 22,
        "name": "Snow Walters"
    },
    {
        "id": 23,
        "name": "Vance Ratliff"
    },
    {
        "id": 24,
        "name": "Patrice Page"
    },
    {
        "id": 25,
        "name": "June Marks"
    },
    {
        "id": 26,
        "name": "Duran Kane"
    },
    {
        "id": 27,
        "name": "Ward Ford"
    },
    {
        "id": 28,
        "name": "Ramirez Beach"
    },
    {
        "id": 29,
        "name": "Willie Compton"
    },
    {
        "id": 30,
        "name": "Kinney Woodard"
    },
    {
        "id": 31,
        "name": "Helen Tyson"
    },
    {
        "id": 32,
        "name": "Rosie Gray"
    },
    {
        "id": 33,
        "name": "Florence Ball"
    },
    {
        "id": 34,
        "name": "Bray Whitney"
    },
    {
        "id": 35,
        "name": "Hale Jimenez"
    },
    {
        "id": 36,
        "name": "Haynes Quinn"
    },
    {
        "id": 37,
        "name": "Weiss Miles"
    },
    {
        "id": 38,
        "name": "Shelton Padilla"
    },
    {
        "id": 39,
        "name": "Juliette George"
    },
    {
        "id": 40,
        "name": "Hendricks Merritt"
    },
    {
        "id": 41,
        "name": "Hallie Clayton"
    },
    {
        "id": 42,
        "name": "Yvette Pate"
    },
    {
        "id": 43,
        "name": "Mckinney Valentine"
    },
    {
        "id": 44,
        "name": "Angeline Solomon"
    },
    {
        "id": 45,
        "name": "Kristie Harper"
    },
    {
        "id": 46,
        "name": "Carmella Hunt"
    },
    {
        "id": 47,
        "name": "Andrea Crosby"
    },
    {
        "id": 48,
        "name": "Adkins Prince"
    },
    {
        "id": 49,
        "name": "Ruiz Lane"
    },
    {
        "id": 50,
        "name": "Watson Salas"
    },
    {
        "id": 51,
        "name": "Janine Garrett"
    },
    {
        "id": 52,
        "name": "Skinner Cantu"
    },
    {
        "id": 53,
        "name": "Hopper Rodriquez"
    },
    {
        "id": 54,
        "name": "Gamble Obrien"
    },
    {
        "id": 55,
        "name": "Aurora Wise"
    },
    {
        "id": 56,
        "name": "Peters Baird"
    },
    {
        "id": 57,
        "name": "Gretchen Dawson"
    },
    {
        "id": 58,
        "name": "Katrina Holt"
    },
    {
        "id": 59,
        "name": "Smith Kim"
    },
    {
        "id": 60,
        "name": "Tate Adkins"
    },
    {
        "id": 61,
        "name": "Grimes Walls"
    },
    {
        "id": 62,
        "name": "Leon Terrell"
    },
    {
        "id": 63,
        "name": "Carmen Leon"
    },
    {
        "id": 64,
        "name": "Colette Hoover"
    },
    {
        "id": 65,
        "name": "Ina Levy"
    },
    {
        "id": 66,
        "name": "Grace Trujillo"
    },
    {
        "id": 67,
        "name": "Cochran Hale"
    },
    {
        "id": 68,
        "name": "Avery Hansen"
    },
    {
        "id": 69,
        "name": "Bush Ortiz"
    },
    {
        "id": 70,
        "name": "Jacobson Ellison"
    },
    {
        "id": 71,
        "name": "Mcfadden Short"
    },
    {
        "id": 72,
        "name": "Glenna Pratt"
    },
    {
        "id": 73,
        "name": "Lindsay Cross"
    },
    {
        "id": 74,
        "name": "Bryant Holcomb"
    },
    {
        "id": 75,
        "name": "Chambers Mclean"
    },
    {
        "id": 76,
        "name": "Opal Burke"
    },
    {
        "id": 77,
        "name": "Jordan Simmons"
    },
    {
        "id": 78,
        "name": "Janie Montgomery"
    },
    {
        "id": 79,
        "name": "Dolores Dickerson"
    },
    {
        "id": 80,
        "name": "Marsha Mason"
    },
    {
        "id": 81,
        "name": "Allison Flynn"
    },
    {
        "id": 82,
        "name": "Haley Campos"
    },
    {
        "id": 83,
        "name": "Hall Hess"
    },
    {
        "id": 84,
        "name": "Lela Cooley"
    },
    {
        "id": 85,
        "name": "Christine Joyner"
    },
    {
        "id": 86,
        "name": "Jenny Carpenter"
    },
    {
        "id": 87,
        "name": "Diana Lawson"
    },
    {
        "id": 88,
        "name": "Young Cherry"
    },
    {
        "id": 89,
        "name": "Duffy Bowers"
    },
    {
        "id": 90,
        "name": "Holder Boyer"
    },
    {
        "id": 91,
        "name": "Villarreal Carson"
    },
    {
        "id": 92,
        "name": "Woods Barker"
    },
    {
        "id": 93,
        "name": "Hodge Wyatt"
    },
    {
        "id": 94,
        "name": "Helga Dorsey"
    },
    {
        "id": 95,
        "name": "Verna Brock"
    }
]);
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
            self.db.transaction(function (transaction) {
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
    })
    
.factory('User', function(DB) {
        var self = this;

        self.getFirst = function(number) {
          return DB.query("SELECT * FROM users LIMIT ?", [number])
          .then(function(result){
                    return DB.fetchAll(result);
                });
        }
  
        self.getAllByName = function(name) {
            return DB.query("SELECT * FROM users WHERE name LIKE '%"+name.toLowerCase()+"%' ORDER BY name")
                .then(function(result){
                    return DB.fetchAll(result);
                });
        };
  return self;
})


.factory('X2Test',function(X2Server){
    var self = this;
    self.test = function(accountInfo,callback)
    {
        X2Server.login(accountInfo,callback);
    }

    return self;      
})

///factory template
.factory('X2Server',function($http){
   var self = this;
   var cmdServerUrl = 'http://drakeau.drakex2.com/ServerCmdCenter.aspx?oper=';
   
   ///send a comand to server
   self.sendCmd = function(cmdName,reqParam,callback){
         var headers = {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			};
        var thisUrl = cmdServerUrl+cmdName;                
        $http({method: "POST",headers: headers,url: thisUrl,data: reqParam})
        .success(function(result) 
           {
               callback.call(self,result);
           })
        .error(function(data, status, headers, config) 
           {
              var resultObj = {
                  'Result':false,
                  'data':data,
                  'status':status,
                  'headers':headers,
                  'config':config,
                  'Msg':'Error from http request'+status
              };
              callback.call(self,resultObj);                       
          });
   };
   
   //login
   self.login = function(accountInfo,callback){
       var cmdName = "HBO_TestNews";
       self.sendCmd(cmdName,accountInfo,callback);
   }
   
   return self;
})

//Here's ini entry
.run(function(DB){
  DB.init();
 
});
