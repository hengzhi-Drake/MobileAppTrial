angular.module('starter.services')

.factory('localNews',function(){
   var localNews = [
       {
            id: 0,
            title: '6 sigma training Classes open in three days',
            image: 'img/drakelogo.jpg',
            shortDescription: '3 timeber top dr ave , Just very nearby your home. Drake is there waitting for you to come!3 timeber top dr ave , Just very nearby your home. Drake is there waitting for you to come!3 timeber top dr ave , Just very nearby your home. Drake is there waitting for you to come!'
        },
        {
            id: 1,
            title: 'Time managment training 1',
            image: 'img/drakelogo.jpg',
            shortDescription: '3 timeber top dr ave'
        },
        {
            id: 2,
            title: 'Piano training 1',
            image: 'img/drakelogo.jpg',
            shortDescription: '3 timeber top dr ave'
        },
        {
            id: 3,
            title: 'Piano training 1',
            image: 'img/drakelogo.jpg',
            shortDescription: '3 timeber top dr ave'
        }
   ];
    return {
        all: function () {
            return localNews;
        },
        get: function (classId) {
            for (var i = 0; i < localNews.length; i++) {
                if (localNews[i].id === parseInt(classId)) {
                    return localNews[i];
                }
            }
            return null;
        }
    };
})


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
   var cmdServerUrl = 'img';
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


.factory('User', function(DB) {
        var self = this;

        self.getFirst = function(number) {
          return DB.query("SELECT * FROM users LIMIT ?", [number])
          .then(function(result){
                    return DB.fetchAll(result);
                });
        };
  
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
    };

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
   };
   
   return self;
})
;
